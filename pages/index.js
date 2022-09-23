import React, {useState} from "react";
import NavBar from "../src/components/NavBar";
import Link from "next/link";
import db from "../utils/mongooseConnect"
import Products from "../models/Products"

export const getServerSideProps = async () => {
    await db.connect();
    const products = await Products.find({}).lean();
    return {
        props: {
            products: products.map(db.convertDocToObject),
        }

    }
}

const Home = ({products}) => {

    return (
        <>
            <NavBar/>
            <div className="products-display">
                <ul>
                    {products.map((product) => {

                        return <li key={product._id}>
                            <Link href={{pathname: `/product/${(product.slug)}`}}>
                                {product.productName}
                            </Link>
                        </li>

                    })}
                </ul>
            </div>

        </>
    )
}

export default Home;

