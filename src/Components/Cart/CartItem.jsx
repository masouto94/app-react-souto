import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'

const CartItem = () => {
    const {cartList} = useCartContext();

    const {deleteFromCart}= useCartContext();

    return (
        <>
        
            <div className="cartBox">
            {cartList.map(producto=> <>
            <div className="cartItem">
            <ul>
                    <li>Nombre:{producto?.name}</li>
                    <li>Precio:{producto?.price}</li>
                    <li>Cantidad:{producto?.quantity}</li>
            </ul>
            <button onClick={()=>deleteFromCart(producto)}>Eliminar del carrito</button>
            </div>
                    
                </> )}

            </div>
           
            
        </>
    )
}

export default CartItem
