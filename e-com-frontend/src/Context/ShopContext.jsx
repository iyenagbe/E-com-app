import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import {toast} from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "₦";
    const delivery_Fee = 2000;
    const taxRate = 0.075; 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if(!size) {
            toast.error('Please select product size');
            return;
        }

        let cartData = structuredClone(cartItems);

        if(cartData[itemId]) {
            if(cartData[itemId[size]]) {
                cartData[itemId] [size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }

        else{
            cartData[itemId] = {};
            cartData[itemId] [size] = 1;
        }

        setCartItems(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems) {
            for(const item in cartItems[items]) {
                try{
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];

                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;

        setCartItems(cartData);

    }
        // products caculation
    const getCartAmount = () => {
    let totalAmount = 0;

    for (const productId in cartItems) {
        const itemInfo = products.find((product) => product._id === productId);

        if (!itemInfo) continue; 

        for (const size in cartItems[productId]) {
            const quantity = cartItems[productId][size];

            if (quantity > 0) {
                totalAmount += itemInfo.price * quantity;
            }
        }
    }

    return totalAmount;
};


            // value obeject function 
    const value = {
        products , currency, delivery_Fee, taxRate,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,

        getCartCount, updateQuantity,
        getCartAmount

    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;