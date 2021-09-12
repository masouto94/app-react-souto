import { ItemCount } from './ItemCount' 
import Products from '../Products/Products'
import React from 'react'

const products = [
    {id: 0, name: "Comida para gato", price:123.33, image: 'url', stock: 10},
    {id: 1, name: "Comida para perro", price: 123.44, image: 'url', stock: 10},
    {id: 2, name: "Piedritas", price: 111, image: 'url', stock: 20}
        ]


const fakeFetch = new Promise((res, rej)=>{
    let response = '200';
    if(response === '200'){
        setTimeout(()=>{
            console.log('OK')
            res(products)
        }, 10)}
        else{
            rej(alert('Error'))
        }
    
   
    
})

export const ItemListContainer = (props) => {
    fakeFetch
    .then(r => {
        console.log(r)
        return 1})
    .then(resp => console.log(resp))

    return (
        <div>
        <h1> {props.mensaje}</h1> 

        { products.map(producto=> <div key={producto.id} className='card w-50 mt-3'>
            <div className='card-header'>{producto.name}</div>
            <div className="card-body">
                <img src={producto.image} />
            </div>               
            <div className="card-footer">
            <ItemCount stock={producto.stock} initial={1} onAdd={props.onAdd}/>
            </div>
        </div>)
        }  
        </div>
        
        
    )
}

