import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => { 

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id 
        );

    if (existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem 
          );

    }
    return [...cartItems, {...productToAdd, quantity: 1} ]
}

const removeCartItem = (cartItems, productToRemove ) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id 
        );

    if (existingCartItem !== 0) {
        return cartItems.map((cartItem) => cartItem.id === productToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem 
          );
    }
    return [...cartItems, {...productToRemove, quantity: 1} ]
    
}

const clearCartItem = (cartItems, productToClear ) => cartItems.filter((cartItem) => cartItem.id !== productToClear.id)





export const cartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
    
})

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setcartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem)=> total + cartItem.quantity, 0)
        setCartCount(newCartCount)
}, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem)=> total + cartItem.quantity * cartItem.price, 0)
        setcartTotal(newCartTotal)
    }, [cartItems])



    const addItemToCart = (productToAdd) => { 
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToClear) => {
        setCartItems(clearCartItem(cartItems, productToClear))
    }

    const value  = {isCartOpen, setIsCartOpen, addItemToCart, removeItemFromCart, clearItemFromCart, cartItems, cartCount, cartTotal}


    return (
        <cartContext.Provider value={value}>
            {children}
        </cartContext.Provider>
    )
}
