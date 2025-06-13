import { createContext } from 'react';
import {products} from '../assets/products';
const ShopContext = createContext();

const ShopProvider = ({ props }) => {

    const currency = '₦';
    const deliveryFee = 2000;
    const taxRate = 0.075; // 7.5%

    const value = {
        products , currency, deliveryFee, taxRate,

    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;