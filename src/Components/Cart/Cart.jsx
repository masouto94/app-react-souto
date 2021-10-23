import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'
import BuyerForm from './BuyerForm';
import CartItem from './CartItem';
import { useState } from 'react';



const Cart = () => {
    const {cartList} = useCartContext();
    const {handleChange}= useCartContext();
    const {handleSubmit}= useCartContext();
    const {formOK}= useCartContext();
    const {formData}=useCartContext();
    const {getTotalPrice} = useCartContext();
    const {confirmOrder}=useCartContext()
    const {clearCart}=useCartContext()
    const {comprando}=useCartContext()
    



    return (
        <>
        
            {comprando ? cartList.length === 0 ? <h1>No hay nada que mostrar!</h1> : 
             <><CartItem productos={cartList} />  
            <h3>Precio total {getTotalPrice(cartList)}</h3>
            <>{formOK ? <button className="btn btn-outline-primary btn-block" onClick={() => {confirmOrder(cartList,formData)}}>Confirmar Compra</button>:<button style={{display:"none"}}>...</button>}</>
            <button  className="btn btn-secondary btn-outline" onClick={clearCart}>Limpiar carrito</button><div>
                <>{formOK ? <></> : <BuyerForm change={handleChange} submit={handleSubmit}/>}</>
                </div> </>: <h1>Gracias por comprar</h1>}
            
        </>
    )
}

export default Cart
