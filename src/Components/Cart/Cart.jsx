import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'

const precioTotal = (carrito) =>{
    let precio = 0

    carrito.forEach(i=> {precio += i.price * i.quantity});
    return precio
}
const removerDelCarrito = (item) => {
    cartList.remove(item)
}
const Cart = ({cartList}) => {
    useCartContext()
    return (
        <>
            <h1>Este es el cart</h1>
            {cartList.map((producto)=> <div>{producto.name,producto.price, producto.quantity}<button onClick={removerDelCarrito(producto)}>X</button></div> )}  
            <h3>Precio total {precioTotal(cartList)}</h3>
        </>
    )
}

export default Cart
