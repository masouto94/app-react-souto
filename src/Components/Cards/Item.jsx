import React from 'react'
import {ItemCount} from './ItemCount'
import ItemDetailContainer from './ItemDetailContainer'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <>
         <div key={producto.id} className='card w-50 mt-3'>
            <div className='card-header'>{producto.name}</div>
            <div className="card-body">
                <img src={producto.image} />
            </div>               
            <div className="card-footer">
            <ItemCount stock={producto.stock} initial={1} onAdd={ItemCount.onAdd}/>
            <Link to={`/detalles/${producto.id}`}>Detalles</Link>
            </div>
        </div>   
        </>
    )
}

export default Item
