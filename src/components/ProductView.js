import React, {MouseEventHandler, useState} from "react";
import Image from "next/image"
import cart from "../../public/icon-cart.svg";

export const ProductView = ({product, handleClick}) => {

    const [boughtCounter, setBoughtCounter] = useState(0)
    const [shownPicture, setShownPicture] = useState(0)

    function realPrice() {
        if (product.price === 0) {
            return <p>{product.price}</p>
        } else {
            return <>
                <span className="price">
                    <p>${product.price - (product.price * (product.discount / 100))}</p>
                    <span className="discount"> {product.discount}% </span>
                </span>
                <p className="old-price">${product.price}</p>
            </>
        }
    }

    function changePicture(n) {
        return setShownPicture(n)
    }

        const images = product.images.map((image, index) => {
            return {id: index, src: image}
        })


    return (
        <>
            <div className="photos">
                <Image src={images[shownPicture].src}
                       layout="fixed"
                       height="400px"
                       width="400px"
                       style={{borderRadius: "10px"}}
                />
                <div className="gallery">
                    {images.map((element, index) => {

                        return <Image src={images[index].src} layout="fixed"
                                      height="80px"
                                      width="80px"
                                      key={images[index].id}
                                      onClick={() => changePicture(images[index].id)}
                                      style={{borderRadius: "10px"}}
                        />
                    })}
                </div>
            </div>
            <div className="product-details">
                <h3 className="company-name">{product.companyName}</h3>
                <h1 className="product-name">{product.productName}</h1>
                <p className="product-description">{product.description}</p>
                <h2>{realPrice()}</h2>
                {/*<Image src="/../images/icon-plus.svg" layout="fill"/>*/}
                <p>{boughtCounter}</p>
                {/*<Image src="/../images/icon-minus.svg"/>*/}
                <button className="add-to-cart" onClick={handleClick}>
                    <Image src={cart}
                           width={25}
                           height={25}
                           layout="fixed"
                    />
                    Add to cart
                </button>

            </div>
        </>
    )
}

export default ProductView;
