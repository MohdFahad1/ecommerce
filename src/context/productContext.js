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
    isSingleLoading: false,
    singleProduct: {},
}

// The children inside the AppProvider is nothing but our App component which is wrapped inside the index.js

// both the children below are same
const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // API call for OurBestProduct section on Home Page
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


    // API call forsingleproduct info
    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct })
        } catch (error) {
            dispatch({ type: "SET_SINGLE_ERROR" })
        }
    }

    useEffect(() => {
        getProducts(API);
    }, [])
    

    return <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>
}


// custom hook 
const useProductContext = () => {
    return useContext(AppContext);
}


export {AppProvider, AppContext, useProductContext};