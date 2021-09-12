import { useState } from 'react'

import React from 'react'

export const ItemCount = ({stock, initial,onAdd}) => {

    const [count, setCount] = useState(initial)

    const agregar = () =>{
        if(count < stock){
            setCount(count+1)
        }
    }
    const restar = () =>{
        if(count > 0){
            setCount(count-1)
        }
    }
    const agregarAlCarrito = () => {
        onAdd(count)
    }

    return (
        <div>
            <button onClick={restar}>-</button>
            <label>{count}</label>
            <button onClick={agregar}>+</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}
