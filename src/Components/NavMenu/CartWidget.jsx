import React from 'react'
import * as Icon  from 'react-bootstrap-icons';
import {useCartContext} from '../../Contexts/CartContext'


const CartWidget = () => {
    // const {cartList} = useCartContext()

    return (  <>
        <i style={{color: "black"}}>1<Icon.Basket2Fill fill={'black'}/></i>
    </>)}
export default CartWidget
