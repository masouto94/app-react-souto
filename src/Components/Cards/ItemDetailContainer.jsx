import ItemDetail from './ItemDetail'
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";



export const getItemDetail = () => {  
    return new Promise((res)=>{
        setTimeout(()=>{res([
            {id: 0, class:"Alimento",name: "Comida para gato", price:123.33, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.continente.pt%2FSonae.eGlobal.Presentation.Web.Media%2Fmedia.axd%3FresourceSearchType%3D2%26resource%3DProductId%3D6461936(eCsf%24RetekProductCatalog%24MegastoreContinenteOnline%24Continente)%26siteId%3D1%26channelId%3D1%26width%3D180%26height%3D170%26defaultOptions%3D1&f=1&nofb=1', stock: 10, description: "Esto comen los gatos"},
            {id: 1, class:"Alimento",name: "Comida para perro", price: 123.44, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.ulabox.com%2Fmedia%2F26287_s2.jpg&f=1&nofb=1', stock: 10, description: "Esto comen los perros"},
            {id: 2,class:"Higiene", name: "Piedritas", price: 111, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmascotasshop.com.ar%2Fwp-content%2Fuploads%2F2020%2F05%2F463-2-150x150.jpg&f=1&nofb=1', stock: 20, description: "Estas son piedritas"},
            {id:3, class: 'Accesorios', name: "Collar", price: 123, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fqmascotas.cl%2Fwp-content%2Fuploads%2F2020%2F12%2FZEEDOG-COLLAR-ELLA-1-187x187.png&f=1&nofb=1', stock:5, description: "Esto es un collarcito"}    ] )},0)
    })
}


export const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    const {productId} = useParams()
    useEffect(() => {
        
        if(productId){
            console.log(getItemDetail())
            getItemDetail()
        .then(r =>{
            setDetalle(   r.filter(prod => prod.id == productId)   )         
        })
        .catch(error => console.log(error))
               
        
    }
    else{
        getItemDetail()
        .then(r =>{
            setDetalle(r)         
            })
            .catch(error => console.log(error))
                   
            
       }
    }, [productId])


    console.log(productId)
    console.log(detalle)
    console.log('detalles', detalle)
    return (
        <>
            <ItemDetail item={detalle} />
        </>
    )
}
