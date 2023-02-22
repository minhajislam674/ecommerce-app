import { createContext, useState } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../util/firebase/firebase.util";
import PRODUCTS from '../shop-data.json';

export const ProductsContext = createContext({
    products: [],
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = {products, setProducts}


    return <ProductsContext.Provider value={value}>{children} </ProductsContext.Provider>
}