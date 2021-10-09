import { useState, useContext, createContext } from "react";
import firebase from "firebase";

import { getFirestore } from "../Services/getFirebase";



export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

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
    return precio
}
  const iconBubble = ()=>{
    return cartList.reduce( (key, value)=> key + value.quantity, 0)
  }
  
  const confirmOrder = (carrito,userInfo) =>{
    
    const db= getFirestore()
    const ordenes= db.collection("ordenes")
    const newOrder={
      buyer: {name: userInfo.name, surname: userInfo.surname, phone: userInfo.phone, email: userInfo.email},
      items: carrito.map((i)=>({id:i.id, name:i.name,quantity: i.quantity, price:i.price})),
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: getTotalPrice(carrito)
    }
    ordenes.add(newOrder)
    
    var productosRef = db.collection('productos')
    for( let elem of newOrder.items){
      console.log(elem)
      productosRef.get()
      .then(resp =>{
        resp.docs.map(producto => ({id: producto.id, ...producto.data()})).filter(prod => prod.id == elem.id)
      
      console.log(resp.stock)
      console.log(elem.quantity)
      var nuevoStock = parseInt(resp.stock) - parseInt(elem.quantity)
      console.log(nuevoStock)
      // productosRef.doc(elem.id).update({
      //   stock: parseInt(nuevoStock)
      // })
    })
    }
  }


    return(
    
            <CartContext.Provider value={{
                cartList,
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