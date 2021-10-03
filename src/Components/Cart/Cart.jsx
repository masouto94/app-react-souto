import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'

const Cart = () => {
    const {cartList} = useCartContext();
    const {deleteFromCart}= useCartContext();
    const {getTotalPrice} = useCartContext();
        

    return (
        <>
            {cartList.length === 0 ? <h1>No hay nada que mostrar!</h1> : <h1>Este es el cart</h1>}
            {cartList.map(producto=> <div>{producto.name},{producto.price}, {producto.quantity}<button onClick={()=>deleteFromCart(producto)}>X</button></div> )}  
            <h3>Precio total {getTotalPrice(cartList)}</h3>
        </>
    )
}

export default Cart
