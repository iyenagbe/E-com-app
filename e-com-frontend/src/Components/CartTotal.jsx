        import React, { useContext, useEffect, useState } from 'react';
        import { ShopContext } from '../Context/ShopContext';
        import Tittle from './Title';

        const CartTotal = () => {
        const { currency, delivery_Fee = 0, getCartAmount } = useContext(ShopContext);
        const [subtotal, setSubtotal] = useState(0);

        useEffect(() => {
            const amount = getCartAmount();
            if (typeof amount === 'number') {
            setSubtotal(amount);
            } else {
            setSubtotal(0);
            }
        }, [getCartAmount]);

        const total = subtotal === 0 ? 0 : subtotal + delivery_Fee;

        return (
            <div className='w-full'>
            <div className='text-2xl'>
                <Tittle text1='CART' text2='TOTAL' />
            </div>

            <div className='flex flex-col gap-2 mt-2 text-sm'>
                <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {subtotal.toFixed(2)}</p>
                </div>

                <hr />
                <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {delivery_Fee.toFixed(2)}</p>
                </div>

                <hr />
                <div className='flex justify-between'>
                <p>Total</p>
                <p>{currency} {total.toFixed(2)}</p>
                </div>
            </div>
            </div>
        );
        };

        export default CartTotal;
