
const Cart = ({listOfIDs}) => {

    return (
        <>
            <ul className="cart-menu">
                {listOfIDs.map((element) => {
                    return <li key={element}><CartItem product={element}/></li>
                })}
            </ul>
        </>
    )
}

const CartItem = ({product}) => {

    return (
        <>
            <span>{product}</span>
        </>
    )
}

export default Cart;

