import React from 'react'
const products = [
    {id: 0, name: "Comida para gato", price:123.33, image: 'url', stock: 10},
    {id: 1, name: "Comida para perro", price: 123.44, image: 'url', stock: 10},
    {id: 2, name: "Piedritas", price: 111, image: 'url', stock: 20}
        ]
const Products = ({children}) => {
    return (
        <>
         {products}
        </>
    )
}

export default Products
