import "./Header.css";
import "remixicon/fonts/remixicon.css";
import { navItems } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { storeSearchResult } from "../../features/searchResult/searchResult";

function Header() {
  const storeData = useSelector(state=>state.cart.cart);
  console.log(storeData)
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const searchSubmitEvent = (e) => {
    e.preventDefault();
    if(searchInput.length > 0){
      // dispatch(storeSearchResult(searchInput.toLowerCase()));
      navigate(
        `/search/${searchInput
          .toLowerCase()
          .replaceAll("%", " ")
          .replaceAll("|", " ")
          .replaceAll("/", " ")
          .replaceAll("&", "and")}`
      );
      setSearchInput("");
    }
    // window.location.reload();
  };
  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="px-8 bg-[#E42529]">
          <div className="py-2 flex gap-1 justify-between items-center text-white flex-col lg:flex-row">
            <div>
              <Link to={"/"}>
                <h1 className="text-xl lg:text-3xl font-bold">
                  Gadget<span className="text-blue-400">Glance</span>
                </h1>
              </Link>
            </div>
            <form onSubmit={searchSubmitEvent}>
              <div className="flex items-center bg-white pe-3 rounded-3xl">
                <input
                  type="text"
                  className="bg-white lg:w-[400px] ps-4 lg:py-1 rounded-3xl text-gray-800 outline-none"
                  placeholder="Find your favourite products"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                <i className="ri-search-line bg-white text-gray-500 ms-1 cursor-pointer" onClick={searchSubmitEvent}></i>
              </div>
            </form>
            <div>
              <div className="inline-block font-semibold text-sm lg:text-base">
                <i className="ri-map-pin-2-fill font-light"></i> Deliver to New
                Delhi
              </div>{" "}
              |{" "}
              <Link
                to={"/cart"}
                className="font-semibold text-sm lg:text-base hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2"
              >
                <i className="ri-shopping-cart-2-fill font-light">
                  {" "}
                  <span className="font-semibold">Cart{storeData.length > 0? (<>: {storeData.length}</>):null}</span>
                </i>
              </Link>{" "}
              |{" "}
              <Link
                to={"/"}
                className="font-semibold text-sm lg:text-base hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2"
              >
                <i className="ri-user-fill font-light">
                  {" "}
                  <span className="font-semibold">Login</span>
                </i>
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#003380] text-white hidden lg:flex items-center lg:justify-between px-10 py- flex-wrap lg:flex-nowrap">
          {navItems.map((item, index) => (
            // <div className="flex items-center justify-center">
              <Link to={`search/${item.title.toLowerCase()}`} key={index} className="flex items-center justify-center">
                <p className="text-xs font-semibold hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2">{item.title}</p>
                <i className="ri-arrow-drop-down-line text-2xl"></i>
              </Link>
            // </div>
          ))}
        </div>
        <div className="h-[4px] bg-[#003380] w-full block lg:hidden"></div>
      </div>
    </>
  );
}

export default Header;
