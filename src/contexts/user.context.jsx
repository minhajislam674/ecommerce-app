import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../util/firebase/firebase.util";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {}
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
          if (user) {
            createUserDocumentFromAuth(user);
          }
          setCurrentUser(user);
        });
    
        return unsubscribe;
      }, []);




    return <UserContext.Provider value={value}>{children} </UserContext.Provider>
}