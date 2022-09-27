import {useRouter} from "next/router";
import {ProductView} from "../../src/components/ProductView";
import React, {useState} from "react";
import Cart from "../../src/components/Cart";
import db from "../../utils/mongooseConnect";
import Products from "../../models/Products";
import NavBar from "../../src/components/NavBar";

export async function getServerSideProps(context) {
    const {params} = context;
    const {slug} = params;

    await db.connect();
    const products = await Products.findOne({slug: slug}).lean();
    await db.disconnect();

    return {
        props: {
            product: slug ? db.convertDocToObject(products) : null,
        },
    };
}

const ProductPage = ({product}) => {
    const router = useRouter();

    const [display, setDisplay] = useState(false)
    const [cartList, setCartList] = useState([])

    function handleCartMenu() {
        if (display) {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }

    function showCart() {
        if (display) {
            return (
                <div>
                    <Cart listOfIDs={cartList}/>
                </div>
            )
        } else {
            return null
        }
    }

    function addToCart(id) {
        setCartList(prevState => {
            return [...prevState, product.id]
        })
    }

    if (router.isFallback) {
        return <h1>Loading...</h1>
    } else {

        return (
        <>
            <NavBar />
            <div className="product-window">
            <ProductView product={product} handleClick={addToCart}/>

        </div>
        </>)
    }
}
export default ProductPage;

