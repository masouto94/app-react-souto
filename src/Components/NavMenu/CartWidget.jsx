import React from 'react'
import * as Icon  from 'react-bootstrap-icons';
import {useCartContext} from '../../Contexts/CartContext'


const CartWidget = ({count}) => {
    return (  
        <i><Icon.Basket2Fill fill={'black'}/>{count}</i>
    )}
export default CartWidget
