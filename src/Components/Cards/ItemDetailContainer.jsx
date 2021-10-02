import ItemDetail from './ItemDetail'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore } from '../../Services/getFirebase';





export const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()
    const dbquery = getFirestore()
    useEffect(() => {
        console.log(productId)
        
        dbquery.collection('productos').get()
        
        .then(resp =>{ 
            setDetalle(resp.docs.map(producto => ({id: producto.id, ...producto.data()})).filter(prod => prod.id == productId))
            
        
        })
            
        .catch(error => console.log(error))
        .finally(setLoading(false))



    }, [productId])



    return (
        <>
            {loading ? <h2>Cargando...</h2> : <ItemDetail item={detalle} />}
        </>
    )
}
