import "./Header.css";
import 'remixicon/fonts/remixicon.css';
import { navItems } from '../../utils/constant';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const searchSubmitEvent = (e)=>{
    e.preventDefault();
    console.log(searchInput)
    navigate(`/search/${searchInput.toLowerCase()}`);
    // window.location.reload();
  }
  return (
    <>
    <div className='sticky top-0 z-50'>
    <div className='px-8 bg-[#E42529]'>
      {/* <div className='flex items-center justify-end text-white'>
        <div className=''>
          <a href="#" className='font-semibold'>Find a store</a>{'\ '}|{"\ "}
          <a href="#" className='font-semibold'>Buying guides</a>{'\ '}|{'\ '} 
          <a href="#" className='font-semibold'>Contact us</a>
        </div>
      </div> */}
      <div className='py-2 flex justify-between items-center text-white flex-col lg:flex-row'>
        <div><Link to={"/"}>
        <h1 className='text-3xl font-bold'>Gadget<span className='text-blue-400'>Glance</span></h1>
        </Link></div>
        <form onSubmit={searchSubmitEvent}>
        <div className='flex items-center bg-white pe-3 rounded-3xl'><input type="search" className='bg-white w-[400px] ps-4 py-1 rounded-3xl text-gray-800' placeholder='Find your favourite products' value={searchInput} onChange={(e)=>{setSearchInput(e.target.value)}}/><i className="ri-search-line bg-white text-gray-500 cursor-pointer"></i></div>
        </form>
        <div>
          <a href="#" className='font-semibold'><i className="ri-map-pin-2-fill font-light"></i> Deliver to DELHI 110059</a>{'\ '}|{"\ "}
          <Link to={'/cart'} className='font-semibold'><i className="ri-shopping-cart-2-fill font-light"></i> Cart</Link>{'\ '}|{'\ '} 
          <a href="#" className='font-semibold'><i className="ri-user-fill font-light"></i> Login</a></div>
      </div>
    </div>
    <div className='bg-[#003380] text-white flex items-center lg:justify-between px-10 py-1 flex-wrap lg:flex-nowrap'>
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