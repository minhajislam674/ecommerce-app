import { createContext, useState, useEffect } from "react";
// import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../util/firebase/firebase.util";
// import { addCollectionDocuments } from "../util/firebase/firebase.util.js";

import { getCategoriesAndDocuments } from "../util/firebase/firebase.util.js";

import SHOP_DATA from "../shop-data.js";


export const CategoriesContext = createContext({
    categoriesMap: {},
})

export const CategoriesProvider = ({children}) => {
    const [categoriesMap, setCategoriesMap] = useState({});


    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesMap = await getCategoriesAndDocuments();
            console.log(categoriesMap);
            setCategoriesMap(categoriesMap);
        };
        getCategoriesMap();
    }, [])


    // To add SHOP_DATA collection to firebase first time
    // useEffect(() => {
    //     addCollectionDocuments('categories', SHOP_DATA);
    // }, [])
        

    const value = {categoriesMap}


    return <CategoriesContext.Provider value={value}>{children} </CategoriesContext.Provider>
}