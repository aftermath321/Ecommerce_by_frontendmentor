import Image from "next/image";
import logo from "../../public/logo.svg";
import cart from "../../public/icon-cart.svg";
import avatar from "../../public/image-avatar.png";
import React, {useState} from "react";
import Cart from "./Cart";

const NavBar = () => {

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
            return
        }
    }

    return (
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
    )
}
export default NavBar;
