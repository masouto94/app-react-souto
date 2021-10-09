
import { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { getFirestore } from '../../Services/getFirebase';
import ItemList from './ItemList'







export const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const { Categoria } = useParams();

    

    useEffect(() => {
    const dbquery = getFirestore()
    
        if(Categoria){
        dbquery.collection('productos').where('class', '==', Categoria).get()
        .then(resp =>{ 
            setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}) ))}
            )
        .then(    console.log(productos))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
               
        
    }
    else{
       dbquery.collection('productos').get()
        .then(resp =>{ 
            setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()}) ))}
            )
        .then(    console.log(productos))
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
                   
            
       }
    }, [Categoria])
    
    return (
        <div>
        <h1> {props.mensaje}</h1> 

        {loading ? <h2>Cargando...</h2> : <div className={"gridProductos"}> <ItemList productos={productos}/> </div>  
        }  
        </div>
        
        
    )
}

