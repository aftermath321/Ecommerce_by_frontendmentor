import Image from "next/image"
import Link from "next/link";
import React from "react";

const GridItem = ({product}) => {

    function realPrice() {
        if (product.price === 0) {
            return <p>{product.price}</p>
        } else {
            return <>
                <span className="price-smaller">
                    <p>${product.price - (product.price * (product.discount / 100))}</p>
                    <span className="discount-smaller"> {product.discount}% </span>
                </span>
                <p className="old-price-smaller">${product.price}</p>
            </>
        }
    }

    return (
        <div className="gridItem">
            <Link href={{pathname: `/product/${product.slug}`}} key={product._id}>
                <Image src={product.images[0]}
                       layout="fixed"
                       height="200px"
                       width="200px"
                       style={{borderRadius: "10px"}}/>
            </Link>
            <Link href={{pathname: `/product/${product.slug}`}} key={product._id}>
                <div className="gridDetails">
                    <h3> {product.productName}</h3>
                    {realPrice()}

                </div>
            </Link>
        </div>
    )
}

export default GridItem;