import { useState, useContext, useEffect, createContext } from "react";
import firebase from "firebase";

import { getFirestore } from "../Services/getFirebase";



export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])
    const [stock, setStock] = useState()
    const [comprando, setComprando] = useState(true)


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
  
  const confirmOrder = (carrito,userInfo) =>{
    const db= getFirestore()
    //ddduseEffect(()=>{

    const ordenes= db.collection("ordenes")
    const newOrder={
      buyer: {name: userInfo.name, surname: userInfo.surname, phone: userInfo.phone, email: userInfo.email},
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
                comprando,
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