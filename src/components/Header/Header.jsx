import React from 'react'
import "./Header.css";
import 'remixicon/fonts/remixicon.css'

function Header() {
  const navItems = [
    {title:"MOBILES & TABLETS"},{title:"TELEVISIONS"},{title:"AUDIO"},{title:"HOME APPLIANCES"},{title:"COMPUTERS"},{title:"CAMERAS"},{title:"KITCHEN APPLIANCES"},{title:"PERSONAL CARE"},{title:"ACCESSORIES"},
  ]
  return (
    <>
    <div className='sticky top-0 z-50'>
    <div className='px-8 bg-[#E42529]'>
      <div className='flex items-center justify-end text-white'>
        <div className=''>
          <a href="#" className='font-semibold'>Find a store</a>{'\ '}|{"\ "}
          <a href="#" className='font-semibold'>Buying guides</a>{'\ '}|{'\ '} 
          <a href="#" className='font-semibold'>Contact us</a>
        </div>
      </div>
      <div className='py-2 flex justify-between items-center text-white'>
        <div><h1 className='text-3xl font-bold'>Gadget<span className='text-blue-400'>Glance</span></h1></div>
        <div className='flex items-center bg-white pe-3 rounded-3xl'><input type="search" className='bg-white w-[400px] ps-4 py-2 rounded-3xl' placeholder='Find your favourite products '/><i className="ri-search-line bg-white text-gray-500 cursor-pointer"></i></div>
        <div>
          <a href="#" className='font-semibold'><i className="ri-map-pin-2-fill font-light"></i> Deliver to DELHI 110059</a>{'\ '}|{"\ "}
          <a href="#" className='font-semibold'><i className="ri-shopping-cart-2-fill font-light"></i> Cart</a>{'\ '}|{'\ '} 
          <a href="#" className='font-semibold'><i className="ri-user-fill font-light"></i> Login</a></div>
      </div>
    </div>
    <div className='bg-[#003380] text-white flex items-center justify-between px-10 py-1'>
      {navItems.map((item, index)=>(
        <div key={index} className='flex items-center justify-center'>
          <p className='text-xs font-semibold'>{item.title}</p><i className="ri-arrow-drop-down-line text-2xl"></i>
        </div>
      ))}
    </div>
    </div>
    </>
  )
}

export default Header