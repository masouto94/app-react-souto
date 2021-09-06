import React from 'react'
import { Container } from 'react-bootstrap'


const ItemListContainer = (props) => {
    return (
        <>
        <Container>
         <h1>{props.mensaje}</h1>
         {props.children}
         </Container>   
        </>
    )
}

export default ItemListContainer
