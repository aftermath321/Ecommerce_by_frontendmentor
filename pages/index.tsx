import Image from 'next/image'
import logo from "../public/logo.svg"
import cart from "../public/icon-cart.svg"
import avatar from "../public/image-avatar.png"
import ProductPage from "../src/components/ProductPage";
import {Product, ImageType} from "../src/components/ProductPage";
import Cart from "../src/components/Cart";
import React, {useEffect, useState} from "react";
import dbConnect from "../utils/connectDB";
import {GetStaticPropsContext} from "next";
import run from "../utils/connectDB"
import {getServerSideProps} from "./api/GetProduct";

const imageArray: ImageType[] = [
    {id: 0, src: "/../public/image-product-1.jpg"},
    {id: 1, src: "/../public/image-product-2.jpg"},
    {id: 2, src: "/../public/image-product-3.jpg"},
    {id: 3, src: "/../public/image-product-4.jpg"}
];

const testProduct: Product = {
    id: 1,
    companyName: "Sneakers Company",
    productName: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion." +
        " Featuring a durable rubber outer sole, " +
        "they'll withstand everything the weather can offer.",
    price: 250.00,
    discount: 50,
    images: imageArray
}

export default function Home({products}) {
    const [currentProduct, setCurrentProduct] = useState<any>(testProduct)
    const [display, setDisplay] = useState<boolean>(false)
    const [cartList, setCartList] = useState<number[]>([])
    // function fetchAndSetProduct () {
    //
    //     setCurrentProduct((prevProduct) => {
    //         return getServerSideProps()
    //     })
    // }
    // useEffect(() => fetchAndSetProduct, [])


    function handleCartMenu(): void {
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
            return
        }
    }
    function addToCart  (id:number):void  {
        setCartList(prevState => {
            return [...prevState, testProduct[0].id]
        })
    }


    return (
        <>
                <div>
                    <nav className="nav">
                        <div className="nav left">
                        <span className="logo">
                        <Image src={logo} width={150} height={25} layout="fixed"/>
                        </span>
                            <span>Collections</span>
                            <span>Men</span>
                            <span>Women</span>
                            <span>About</span>
                            <span>Contact</span>
                        </div>

                        <div className="nav right">
                        <span className="cart">
                            <Image src={cart}
                                   width={25}
                                   height={25}
                                   layout="fixed"
                                   onClick={() => handleCartMenu()}/>
                        </span>

                            <Image src={avatar} width="50px" height="50px"/>
                        </div>
                    </nav>
                    {showCart()}


                </div>

                <div className="product-window">
                    <ProductPage products={currentProduct} handleClick={addToCart}/>

                </div>
        </>
    )
}

