import React from 'react'
import * as Icon  from 'react-bootstrap-icons';
import {useCartContext} from '../../Contexts/CartContext'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
const CartWidget = () => {
    const {iconBubble} = useCartContext();
    


    return (  <>
        <i style={{color: "black"}}><Nav.Link as={Link} to={'/cart'}>{iconBubble()}</Nav.Link><Icon.Basket2Fill fill={'black'}/></i>
    </>)}
export default CartWidget
