import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const {cartList} = useCartContext();
    const {getTotalPrice} = useCartContext();
        

    return (
        <>
            {cartList.length === 0 ? <h1>No hay nada que mostrar!</h1> : <h1>Este es el cart</h1>}
            <CartItem productos={cartList} />  
            <h3>Precio total {getTotalPrice(cartList)}</h3>
        </>
    )
}

export default Cart
