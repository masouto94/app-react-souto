import ItemDetail from './ItemDetail'
import { useEffect,useState } from "module";

const product_detail = {
    id: 0, name: "Comida para gato", price:123.33, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.continente.pt%2FSonae.eGlobal.Presentation.Web.Media%2Fmedia.axd%3FresourceSearchType%3D2%26resource%3DProductId%3D6461936(eCsf%24RetekProductCatalog%24MegastoreContinenteOnline%24Continente)%26siteId%3D1%26channelId%3D1%26width%3D180%26height%3D170%26defaultOptions%3D1&f=1&nofb=1', stock: 10
}


const fakeFetchDetail = new Promise((res, rej)=>{
    let response = '200';
    if(response === '200'){
        setTimeout(()=>{
            console.log('OK')
            res(product_detail)
        }, 10)}
        else{
            rej(alert('Error'))
        }
    
   
    
})


const ItemDetailContainer = () => {
    const [detalles, setDetalles] = useState()
    
    fakeFetchDetail
    .then(r => {
        console.log(r)
        return 1})
    .then(resp => console.log(resp))
    useEffect(() => {
        fakeFetchDetail
        .then(r =>{
            setDetalles(r)         
        })
        .catch(error => console.log(error))
               
        
    }, []) 

    return (
        <>
            <ItemDetail item={detalles} />
        </>
    )
}

export default ItemDetailContainer
