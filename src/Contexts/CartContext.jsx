import { useState, useContext, createContext } from "react";




export const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{
        let currentCart = [...cartList]
        if(currentCart.some(i => i.id === item.id)){
            currentCart.find(i => i.id === item.id).quantity += item.quantity
        
                
        
              setCartList(currentCart)
        
            } else {
        
              setCartList([...cartList, item])
        
            }
        
          }
    console.log(cartList)
    const clearCart=()=>{setCartList([])}
    


    return(
    
            <CartContext.Provider value={
                cartList,
                addToCart,
                clearCart
            }>
                {children}
            </CartContext.Provider>
            )
}

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)