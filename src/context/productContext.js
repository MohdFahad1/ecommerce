// create a context (contextAPI)
// provider 
// consumer => (for simplicity we use useContext Hook which is inside contextAPI)


import { createContext, useContext, useEffect, useReducer } from "react";
import axios from 'axios';
import reducer from '../reducer/productReducer';

const AppContext = createContext();


const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featuredProducts: [],
}

// The children inside the AppProvider is nothing but our App component which is wrapped inside the index.js

// both the children below are same
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        } catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])
    

    return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
}


// custom hook 
const useProductContext = () => {
    return useContext(AppContext);
}


export {AppProvider, AppContext, useProductContext};