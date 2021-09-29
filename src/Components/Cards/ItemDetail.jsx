import React from 'react'
import {useCartContext} from '../../Contexts/CartContext'
import { ItemCount } from './ItemCount'


const ItemDetail = ({item}) => {
    const {addToCart} = useCartContext
    console.log(addToCart)

    const onAdd=(cant)=>{
        console.log(cant)
        addToCart(item, cant)
    }
    return (
        <>
        {item.map((item)=> <div key={item.id} className="card  mt-3 mb-3 m-auto w-50 ">
                        <div className="card-header">
                            <h5 className="card-title text-center">{item.name}</h5>
                        </div>
                        <div className="card-body">
                            <img src={item.image} className="card-img-top w-50" alt={`imagen de ${item.name}`} />
                            <p className="card-text">
                                {item.description}
                            </p>
                        </div>
                        <div className="card-footer">
                            <ItemCount stock={item.stock} initial ={1} onAdd={onAdd}/>
                        </div>
                    </div>)}
        
    </>)
}

export default ItemDetail
