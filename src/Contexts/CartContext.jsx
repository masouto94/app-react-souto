import { useState, useContext, createContext } from "react";




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
    


    return(
    
            <CartContext.Provider value={{
                cartList,
                addToCart,
                clearCart,
                deleteFromCart,
                getTotalPrice,
                iconBubble
            }}>
                {children}
            </CartContext.Provider>
            )
}

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)