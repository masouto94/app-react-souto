import { useState } from 'react'
import { Link } from 'react-router-dom'
import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'


export const ItemCount = ({stock, initial,item}) => {
    const {addToCart} = useCartContext() 
    const [count, setCount] = useState(initial)
    const [type, setType] = useState('agregar')
    
   
    const agregar = () =>{
        if(count < stock){
            setCount(count+1)
            setType('agregar')
        }

    }
    const restar = () =>{
        if(count > 0){
            setCount(count-1)
            setType('agregar')
        }
    }

    const handlerAddToCart=()=>{
        
        item.quantity= count
        addToCart(item)
        setType('terminar')
    }

    const AgregarAlCarrito = () => {
        return <button onClick={handlerAddToCart}  className="btn btn-secondary btn-outline">Agregar al carrito</button>
    }
    const TerminarCompra = () =>{
        return (
        <Link to={'/cart'}>
            <button className="btn btn-secondary btn-outline">Terminar compra</button>
            </Link>)
    }


    return (
        <div>
            <button className="btn btn-primary btn-outline" onClick={restar}>-</button>
            <label>{<h4>{count}</h4>}</label>
            <button className="btn btn-primary btn-outline" onClick={agregar}>+</button>
            {type === 'agregar' ?
                <AgregarAlCarrito/>
                :
                <TerminarCompra/>}    
        </div>
    )
}
