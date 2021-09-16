const products = (callback) =>{
    const listado= [
    {id: 0, name: "Comida para gato", price:123.33, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.continente.pt%2FSonae.eGlobal.Presentation.Web.Media%2Fmedia.axd%3FresourceSearchType%3D2%26resource%3DProductId%3D6461936(eCsf%24RetekProductCatalog%24MegastoreContinenteOnline%24Continente)%26siteId%3D1%26channelId%3D1%26width%3D180%26height%3D170%26defaultOptions%3D1&f=1&nofb=1', stock: 10},
    {id: 1, name: "Comida para perro", price: 123.44, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.ulabox.com%2Fmedia%2F26287_s2.jpg&f=1&nofb=1', stock: 10},
    {id: 2, name: "Piedritas", price: 111, image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmascotasshop.com.ar%2Fwp-content%2Fuploads%2F2020%2F05%2F463-2-150x150.jpg&f=1&nofb=1', stock: 20}
        ]
    if(callback == null){
        return listado
    }else{
        return listado.filter(callback)
    }
    };


const fakeFetch2 = (filtro) =>{
    
    return(new Promise((res, rej)=>{
    let response = '200';
    if(response === '200'){
        setTimeout(()=>{
            console.log('OK')
            res(products(filtro))
        }, 10)}
        else{
            rej(alert('Error'))
        }
})
    )};

fakeFetch2()

