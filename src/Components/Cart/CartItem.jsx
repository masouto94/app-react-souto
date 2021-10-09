import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'

const CartItem = (producto) => {
    console.log(`Este es el producto ${producto}`)
    const {deleteFromCart}= useCartContext();

    return (
        <>
            <div>
                <ul>
            <li>{producto.name}</li>
            <li>{producto.price}</li>
            <li>{producto.quantity}</li>
            </ul>
            <button onClick={()=>deleteFromCart(producto)}>Eliminar del carrito</button>
            </div>
        </>
    )
}

export default CartItem
