import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:fles-row justify-around gap-12 sm:gap-2 
    text-center py-20 text-xs sm:text-sm md-text-base text-gray700'>
      
      <div>
        <img src={assets.quality_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Rayjock Store Exchange Policy</p>

        <p className='text-gray-400'> 
            Exchange Window for
            Items can be exchanged within 3 to 5 days of delivery.

            The item must be returned in original condition — unused, unwashed, with tags and original packaging.

            Eligible Items
            Exchanges are allowed for size issues, defects, or wrong items shipped.

            Non-exchangeable items: underwear, swimwear, clearance/sale items, or customized products.

            How to Request an Exchange
            Contact our support team via WhatsApp, Email, or through your account dashboard.

            Once approved, ship the item back we’ll provide return instructions.

            We’ll send a replacement item or store credit after we receive and inspect the item.

            Who Pays for Shipping?
            If the exchange is due to our error wrong item, damaged, etc., we cover shipping.

            If the customer ordered the wrong size or changed their mind, the customer covers return shipping.

            Important Notes
            Items returned without approval will not be processed.

            Only one exchange per item is allowed.

            We do not offer cash refunds unless the item is out of stock.
        </p>
        {/* <img src={assets.exchange_icon} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'> Rayjock Store allows 3 to 5 days on return policy</p>

        <p className='text-gray-400'>
            We offer a flexible return policy that allows you to return items within 3 to 5 days of delivery.
            Items must be in their original condition, unused, and with all tags and packaging intact.
        </p>
        <img src={assets.support_img} className='w-12 m-auto mb-5' alt="" />
        <p className='font-semibold'>Best customer support</p>

        <p className='text-gray-400'>
            We provide 24/7 customer support via WhatsApp, Email, and our website.
            Our team is always ready to assist you with any questions or concerns.
        </p> */}
      </div>
    </div>
  )
}

export default OurPolicy
