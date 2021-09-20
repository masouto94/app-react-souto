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
            <button className="btn btn-primary btn-outline" onClick={restar}>-</button>
            <label>{<h4>{count}</h4>}</label>
            <button className="btn btn-primary btn-outline" onClick={agregar}>+</button>
            <button className="btn btn-secondary btn-outline" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}
