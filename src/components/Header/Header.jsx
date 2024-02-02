import React from 'react'
import "./Header.css";
import 'remixicon/fonts/remixicon.css'

function Header() {
  let navItems = [
    {},{},
  ]
  return (
    <>
    <div className='px-8 bg-[#E42529]'>
      <div className='flex items-center justify-end text-white'>
        <div className=''>
          <a href="#">Find a store</a>{'\ '}|{"\ "}
          <a href="#">Buying guides</a>{'\ '}|{'\ '} 
          <a href="#">Contact us</a>
        </div>
      </div>
      <div className='py-2 flex justify-between items-center text-white'>
        <div><h1 className='text-2xl'>Gadget Glance</h1></div>
        <div className='flex items-center bg-white pe-3 rounded-3xl'><input type="search" className='bg-white w-[400px] ps-4 py-2 rounded-3xl' placeholder='Find your favourite products '/><i className="ri-search-line bg-white text-gray-500 cursor-pointer"></i></div>
        <div>
          <a href="#"><i className="ri-map-pin-2-fill"></i> Deliver to DELHI 110059</a>{'\ '}|{"\ "}
          <a href="#"><i className="ri-shopping-cart-2-fill"></i> Cart</a>{'\ '}|{'\ '} 
          <a href="#"><i className="ri-user-fill"></i> Login</a></div>
      </div>
    </div>
    <div className='bg-[#003380]'>

    </div>
    </>
  )
}

export default Header