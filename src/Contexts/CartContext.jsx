import { useState, useContext, createContext } from "react";


const CartContext = createContext([])
export const useCartContext = () => {useContext(CartContext)}

const CartContextProvider = ({children}) =>{
    const [cartList, setCartList] = useState([])

    const addToCart=(item)=>{setCartList(...cartList,item)}
    const clearCart=()=>{setCartList([])}


    return(
    
            <CartContext.Provider value={
                {cartList,
                addToCart,
                clearCart}
            }>
                {children}
            </CartContext.Provider>
            )
}

export default  CartContextProvider