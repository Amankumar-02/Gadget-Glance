import React from 'react'
import './Footer.css'

function Footer() {
    const footerItems = [
        {title:"PRODUCT CATEGORIES", more:["Smartphones", "Laptops", "DSLR Cameras", "Televisions", "Air Conditioners", "Refrigerators", "Kitchen Appliances", "Accessories", "Personal Care & Grooming",]},
        {title:"SITE INFO", more:["About Gadget Glance", "resQ Services", "Site Map", "Gift Cards", "Corporate Enquires", "Contact Us",]}
        ,{title:"RESOURCE CENTER", more:["Product Reviews", "Buying Guides", "How Tos", "Featured Stories", "Events & Happenings", "Nearest Store",]},
        {title:"POLICIES", more:["Terms of Use", "FAQs", "Cancellation and Return Policy", "Pricing and Payments Policy", "Shipping and Delivery Ploicy", "Privacy Policy", "E-waste Recycling Policy", "EMI and Additional Cashback T&C", "RelianceOne Loyalty Program T&C", "Caution Notice",]},
    ]
  return (
    <>
    <div className='flex justify-between px-14 py-4 bg-[#003380]'>
        {footerItems.map((item, index)=>(
            <div key={index} className='text-white flex flex-col gap-2'>
                <h1 className='font-bold'>{item.title}</h1>
                {item.more.map((items, index)=>(
                    <ul className="decoration-none" key={index}>
                        <a href="#"><li className='hover:text-[#ffffffb3]'>{items}</li></a>
                    </ul>
                ))}
            </div>
        ))}
    </div>
    </>
  )
}

export default Footer