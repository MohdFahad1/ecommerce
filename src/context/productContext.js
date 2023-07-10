// create a context (contextAPI)
// provider 
// consumer => (for simplicity we use useContext Hook which is inside contextAPI)


import { createContext, useContext } from "react";

const AppContext = createContext();


// The children inside the AppProvider is nothing but our App component which is wrapped inside the index.js

// both the children below are same
const AppProvider = ({ children }) => {
    return <AppContext.Provider value={{myName: ""}}>{children}</AppContext.Provider>
}


// custom hook 

const useProductContext = () => {
    return useContext(AppContext);
}


export {AppProvider, AppContext, useProductContext};