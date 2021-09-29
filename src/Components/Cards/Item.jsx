import React from 'react'
import {ItemCount} from './ItemCount'
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
            <ItemCount stock={producto.stock} initial={1} item={producto}/>
            <Link to={`/detalle/${producto.id}`}>
            <button className="btn btn-outline-primary btn-block">Detalles</button>
            </Link>
            </div>
        </div>   
        </>
    )
}

export default Item
