import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'
import CartItem from './CartItem';

const Cart = () => {
    const {cartList} = useCartContext();
    const {getTotalPrice} = useCartContext();
    const {confirmOrder}=useCartContext()
    const {clearCart}=useCartContext()
    const {comprando}=useCartContext()

    const info = {name: "Elmo", surname: "Lesto", phone: 33333333, email:"lalolanda@gmail.com"}
    return (
        <>
        
            {comprando ? cartList.length === 0 ? <h1>No hay nada que mostrar!</h1> : <h1>Este es el cart</h1> : <div></div>}
            {comprando ? <><CartItem productos={cartList} />  
            <h3>Precio total {getTotalPrice(cartList)}</h3>
            <button onClick={() => {confirmOrder(cartList,info)}}>Confirmar Compra</button>
            <button onClick={clearCart}>Limpiar carrito</button> </>: <h1>Gracias por comprar</h1>}
            
        </>
    )
}

export default Cart
