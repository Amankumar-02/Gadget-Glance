import "remixicon/fonts/remixicon.css";
import { navItems } from "../../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPincode, setStateLocation } from "../../features/cart/cartSlice";
import indiaPincodeLookup from "india-pincode-lookup";
// import { storeSearchResult } from "../../features/searchResult/searchResult";

function Header() {
  const storeData = useSelector((state) => state.cart.cart);
  const pincode = useSelector((state) => state.cart.pincode);
  const stateLocation = useSelector((state) => state.cart.stateLocation);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchSubmitEvent = (e) => {
    e.preventDefault();
    if (searchInput.length > 0) {
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

  const pinCodeEventHandler = () => {
    const pin = prompt("Enter your pin code");
    if (pin && /^\d{6}$/.test(pin)) {
      dispatch(setPincode(pin));
    } else {
      alert("Please enter a valid 6-digit pin code.");
    }
  };

  useEffect(() => {
    if (pincode) {
      const locationInfo = indiaPincodeLookup.lookup(pincode)[0];
      if (locationInfo) {
        // console.log("Pincode is valid!");
        dispatch(setStateLocation(locationInfo.districtName));
      } else {
        // console.log("Invalid pincode!");
        alert("Invalid pincode! Please try again.");
        pinCodeEventHandler();
      }
    }
  }, [pincode]);

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="py-2 px-4 sm:px-6 lg:px-8 bg-[#FF6600] lg:bg-gradient-to-b from-[#FF6600] from-90% to-[#003088] to-100%">
          <div className="py-1 lg:py-2 flex flex-col lg:flex-row gap-1 justify-between items-center text-white">
            <div>
              <Link to={"/"}>
                <h1 className="text-2xl sm:text-xl lg:text-3xl font-bold">
                <span className="text-3xl sm:text-[26px] lg:text-[36px] -tracking-[-2px] lg:-tracking-[-1px]">𝓖</span>adget<span className="text-[#003088] ms-2"><span className="text-3xl sm:text-[26px] lg:text-[36px] -tracking-[-2px] lg:-tracking-[-1px]">𝓖</span>lance</span>
                </h1>
              </Link>
            </div>
            <form
              onSubmit={searchSubmitEvent}
              className="w-full lg:w-auto mt-2 lg:mt-0"
            >
              <div className="flex items-center bg-white px-3 rounded-3xl">
                <input
                  type="text"
                  className="w-full lg:w-[30vw] py-1 px-4 rounded-3xl text-gray-800 outline-none"
                  placeholder="Find your favourite products"
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                  }}
                />
                <i
                  className="ri-search-line text-gray-500 cursor-pointer"
                  onClick={searchSubmitEvent}
                ></i>
              </div>
            </form>
            <div className="flex gap-4 sm:gap-4 mt-2 lg:mt-0 items-center text-sm sm:text-base font-semibold">
              <span
                className="inline-block cursor-pointer text-xs sm:text-sm"
                onClick={pinCodeEventHandler}
              >
                <i className="ri-map-pin-2-fill"></i>{" "}
                {pincode.length <= 0 ? (
                  <>Enter your pin code</>
                ) : (
                  <>Deliver to {stateLocation} {pincode}</>
                )}
              </span>
              <span className="hidden sm:inline font-extralight">|</span>
              <Link
                to={"/cart"}
                className="hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2"
              >
                <i className="ri-shopping-cart-2-fill"></i> Cart
                {storeData.length > 0 ? <>: {storeData.length}</> : null}
              </Link>
              <span className="hidden sm:inline font-extralight">|</span>
              <Link
                to={"/login"}
                className="hover:border hover:border-x-0 hover:border-t-0 hover:border-b-2"
              >
                <i className="ri-user-fill"></i> <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
        {/* Navigation Menu */}
        <div className="bg-[#003088] text-white hidden lg:flex items-center justify-between px-6 lg:px-10 py-2 flex-wrap lg:flex-nowrap">
          {navItems.map((item, index) => (
            <Link
              to={`search/${item.title.toLowerCase()}`}
              key={index}
              className="flex items-center justify-center px-2 py-1"
            >
              <p className="text-xs font-semibold hover:scale-[1.12] transition-all">
                {item.title}
              </p>
              {/* <i className="ri-arrow-drop-down-line text-2xl"></i> */}
            </Link>
          ))}
        </div>
        {/* Mobile Nav Indicator */}
        <div className="h-[4px] bg-[#003088] w-full block lg:hidden"></div>
      </div>
    </>
  );
}

export default Header;
