import React from 'react'

const ItemDetail = ({item}) => {
    
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
                            <button
                                className="btn btn-outline-primary btn-block "
                            >
                                Agregar al carrito
                            </button>
                        </div>
                    </div>)}
        
    </>)
}

export default ItemDetail
