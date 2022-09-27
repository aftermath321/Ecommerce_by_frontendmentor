import Image from "next/image"
import Link from "next/link";
import React from "react";

const GridItem = ({product}) => {

    function realPrice() {
        if (product.discount === 0) {
            return <span className="price-smaller">${product.price}</span>
        } else {
            return <>
                <span className="price-smaller">
                   ${product.price - (product.price * (product.discount / 100))}
                </span>
                <span className="discount-smaller"> {product.discount}% </span>
                <span className="old-price-smaller">${product.price}</span>
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
                       style={{borderRadius: "10px", borderBottom: 'black 1px solid'}}/>
            </Link>
            <Link href={{pathname: `/product/${product.slug}`}} key={product._id}>
                <div className="gridDetails">
                    <h3 className="product-name-smaller"> {product.productName}</h3>
                    {realPrice()}

                </div>
            </Link>
        </div>
    )
}

export default GridItem;