import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'

const CartItem = ({productos}) => {
    console.log(`Este es el producto ${productos}`)
    const {cartList} = useCartContext();

    const {deleteFromCart}= useCartContext();

    return (
        <>
        
            <div>
            {cartList.map(producto=> {<>
            <ul>
                    <li>{producto?.name}</li>
                    <li>{producto?.price}</li>
                    <li>{producto?.quantity}</li>
            </ul>
                    <button onClick={()=>deleteFromCart(producto)}>Eliminar del carrito</button>
                </>} )}

            </div>
           
            
        </>
    )
}

export default CartItem
