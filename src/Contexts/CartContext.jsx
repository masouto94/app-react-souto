import { useState, useContext, useEffect, createContext } from "react";
import firebase from "firebase";

import { getFirestore } from "../Services/getFirebase";


const initialFormData = Object.freeze({
  nombre: "",
  apellido: "",
  email:"",
  telefono:""
});
export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    const [stock, setStock] = useState()
    const [comprando, setComprando] = useState(true)
    const [formData, setFormData] = useState(initialFormData);
    const [formOK, setFormOK] = useState(false)



    const addToCart=(item)=>{
        let currentCart = [...cartList]
        if(currentCart.some(i => i.id === item.id)){
            currentCart.find(i => i.id === item.id).quantity += item.quantity
        
                
        
              setCartList(currentCart)
              console.log(cartList)
        
            } else {
        
              setCartList([...cartList, item])
              console.log(cartList)
            }
        
          }
    const clearCart=()=>{setCartList([])}

    const deleteFromCart = (item) => {
      const deleteProduct = cartList.filter((prod) => prod.id !== item.id);
        
      setCartList([...deleteProduct])
      console.log(cartList)
  }
  const getTotalPrice = (carrito) =>{
    let precio = 0
    carrito.forEach(i=> {precio += i.price * i.quantity});
    return parseFloat(precio).toFixed(2)
}
  const iconBubble = ()=>{
    return cartList.reduce( (key, value)=> key + value.quantity, 0)
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value.trim()
    });
    console.log(formData)
  };

  const handleSubmit = (e) => {
    
    // tests
    let alphabet_test= /[a-zA-Z]/
    let email_test=/\w*@\w*\.com/
    let phone_test=/[0-9]/;
    if(alphabet_test.test(formData.nombre) ===false){
      alert("Por favor ingrese un nombre válido")
      e.preventDefault()
    } 
    else if(alphabet_test.test(formData.apellido) ===false){
      alert("Por favor ingrese un apellido válido")
      e.preventDefault()
    }
    else if(email_test.test(formData.email) ===false){
      alert("Por favor ingrese un email válido")
      e.preventDefault()
    }
    //Reemplazo de phone
    if(typeof(formData.telefono) !== 'number' && formData.telefono !== ''){
        formData.telefono= parseInt(formData.telefono.replaceAll(/\W|\s/g,""))
    }   
    else if(phone_test.test(formData.telefono) === false || formData.telefono === '' ){
      alert("Por favor ingrese un teléfono válido")
      e.preventDefault()
    }
    else{
      setFormOK(true)
    }
    

    
  };
  const confirmOrder = (carrito,userInfo) =>{
    const db= getFirestore()
    //ddduseEffect(()=>{

    const ordenes= db.collection("ordenes")
    const newOrder={
      buyer: {name: userInfo.nombre, surname: userInfo.apellido, phone: userInfo.telefono, email: userInfo.email},
      items: carrito.map((i)=>({id:i.id, name:i.name,quantity: i.quantity, price:i.price})),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getTotalPrice(carrito)
    }
    
    alert(`La orden es: ${JSON.stringify(newOrder)}`);
    ordenes.add(newOrder)
    .then(doc => {alert(`Se cargó la orden con el id: ${doc.id}`)})
    
  
    //});
    
    // for( let elem of newOrder.items){
    //    console.log(`El elemento es ${JSON.stringify(elem)}`)
    //    //Consigue los productos
    //    db.collection('productos').get()
    //    //Filtra la resp por id
    //    .then(resp => {resp.docs.map(producto => ({id: producto.id, ...producto.data()})).filter(prod => prod.id == elem.id)})
    //    //Toma el stock de la resp
    //    .then(r => {
    //     setStock(r.stock)
    //     console.log(`El stock del item a actualizar deberia ser: ${stock}`)
    //     console.log(`La cantidad comprada es: ${elem.quantity}`)
    //     var nuevoStock = parseInt(stock) - parseInt(elem.quantity)
    //     console.log(`El stock nuevo es: ${nuevoStock}`)
    //    })
    //    .then(
    //      db.collection('productos').doc(r).update(nuevoStock)
    //    )
       
    // }
    clearCart()
    setComprando(false)

}


    return(
    
            <CartContext.Provider value={{
                cartList,
                formData,
                comprando,
                formOK,
                handleChange,
                handleSubmit,
                addToCart,
                clearCart,
                deleteFromCart,
                getTotalPrice,
                confirmOrder,
                iconBubble
            }}>
                {children}
            </CartContext.Provider>
            )
}

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)