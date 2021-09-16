import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <>
            <h2>{item.image}</h2>
            <h2>{item.name}</h2>
            <h2>{item.price}</h2> 
        </>
    )
}

export default ItemDetail
