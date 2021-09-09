import React from 'react'
import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import {CounterButtonAdd} from './CounterButtonAdd'
import {CounterButtonRemove} from './CounterButtonRemove'
import {itemCount} from './ItemCount'

// let productos=[
//     {id: 0, name: "Comida para gato", price:123.33, image: 'url', stock: 10},
//     {id: 1, name: "Comida para perro", price: 123.44, image: 'url', stock: 10},
//     {id: 2, name: "Piedritas", price: 111, image: 'url', stock: 20}
//         ]

const getFetch = new Promise((res, rej)=>{
    //acciones asincronicas
    let respuesta = '200'
    if(respuesta === '200'){
        setTimeout(()=>{
            res(itemCount)
        },3000)
    }else{
        rej('404')
    }
    //console.log('tare')

});

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd=(cant)=>{
        console.log(cant)
    }
    useEffect(() => {
        getFetch
        .then(respuesta =>{
            setProductos(respuesta)         
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
               
        
    }, [])

    return (<div>             
        <h1> {props.mensaje}</h1> 

        { loading ? <h2>Cargando...</h2> :   itemCount.map(producto=> <div key={producto.id} className='card w-50 mt-3'>
            <div className='card-header'>{producto.name}</div>
            <div className="card-body">
                <img src={producto.image} />
            </div>               
            <div className="card-footer">
            <CounterButtonRemove name={producto.name} stock={producto.stock} initial={1} onAdd={onAdd} />
        <CounterButtonAdd name={producto.name}  stock={producto.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>)
        }  

        

      
    </div>
)
}

export default ItemListContainer
