import { ItemCount } from './ItemCount' 
import { useEffect, useState } from 'react'
import Products from '../Products/Products'
import React from 'react'

const products = [
    {id: 0, name: "Comida para gato", price:123.33, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.continente.pt%2FSonae.eGlobal.Presentation.Web.Media%2Fmedia.axd%3FresourceSearchType%3D2%26resource%3DProductId%3D6461936(eCsf%24RetekProductCatalog%24MegastoreContinenteOnline%24Continente)%26siteId%3D1%26channelId%3D1%26width%3D180%26height%3D170%26defaultOptions%3D1&f=1&nofb=1', stock: 10},
    {id: 1, name: "Comida para perro", price: 123.44, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.ulabox.com%2Fmedia%2F26287_s2.jpg&f=1&nofb=1', stock: 10},
    {id: 2, name: "Piedritas", price: 111, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmascotasshop.com.ar%2Fwp-content%2Fuploads%2F2020%2F05%2F463-2-150x150.jpg&f=1&nofb=1', stock: 20}
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
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    fakeFetch
    .then(r => {
        console.log(r)
        return 1})
    .then(resp => console.log(resp))
    useEffect(() => {
        fakeFetch
        .then(r =>{
            setProductos(r)         
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
               
        
    }, [])

    return (
        <div>
        <h1> {props.mensaje}</h1> 

        {loading ? <h2>Cargando...</h2> :    productos.map(producto=> <div key={producto.id} className='card w-50 mt-3'>
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

