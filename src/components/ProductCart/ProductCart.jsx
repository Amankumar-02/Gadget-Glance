import 'remixicon/fonts/remixicon.css';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMG_URL } from '../../utils/constant';
import { removeCartData, editCartQuantityData, clearCartItems } from '../../features/cart/cartSlice';
import { useNavigate, Link } from 'react-router-dom';

function ProductCart() {
  const storeData = useSelector(state=>state.cart.cart);
  const [newStoreData, setNewStoreData] = useState(storeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editQuantityEvent = (code, task)=>{
    dispatch(editCartQuantityData({code: code, task: task}));
  }
  const removeProduct = (e)=>{
    dispatch(removeCartData(e));
  }
  useEffect(()=>{
    setNewStoreData(storeData);
  }, [editQuantityEvent, removeProduct])
  const checkOutEvent = ()=>{
    // navigate("/checkout")
    dispatch(clearCartItems());
  }
  return (
    <>
      {newStoreData.length === 0 ? (
        <>
          <div className="w-full h-[80px] flex justify-center items-center">
            <h1 className="text-red-500 text-2xl font-bold">Cart is Empty</h1>
            <p className="text-3xl ms-2">🛒</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row py-2 lg:py-6 px-4 lg:px-14">
            <div className="w-full lg:w-[65%]">
              <div
                id="topBar"
                className="flex justify-between items-center border py-2 px-4"
              >
                <div>
                  <h2 className="font-bold">
                    My Cart{" "}
                    <span className="text-gray-500 font-normal">
                      ({newStoreData.length} Items)
                    </span>
                  </h2>
                </div>
                <div>
                  <p className="text-sm">
                    Shipping to: 110059 <i className="ri-map-pin-2-fill"></i>
                  </p>
                </div>
              </div>
              <div id="items">
                {newStoreData.map((item, index) => (
                  <div key={index} className="border my-2">
                    <div className="flex justify-between flex-col lg:flex-row py-3 lg:px-4 ">
                      <div id="left" className="flex w-full lg:w-[60%]">
                        <div className="flex flex-col items-center">
                          <Link to={"/productInfo/" + item?.productData?.code}>
                            <div className="w-[160px] py-4 pe-4">
                              <img
                                src={
                                  IMG_URL + item?.productData?.media[0]?.zoomUrl
                                }
                                alt=""
                                />
                            </div>
                          </Link>
                          <div className="border flex rounded w-fit">
                            <button
                              className="px-4 hover:font-semibold"
                              onClick={() => {
                                editQuantityEvent(item?.productData?.code, "decrease");
                              }}
                            >
                              -
                            </button>
                            <p>{item?.productQuantity}</p>
                            <button
                              className="px-4 hover:font-semibold"
                              onClick={() => {
                                editQuantityEvent(item?.productData?.code, "increase");
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <Link to={"/productInfo/" + item?.productData?.code}>
                          <div>
                            {item?.productData?.name.length > 90 ? (
                              <>
                                <p className="text-[#003088] font-semibold text-sm">
                                  {item?.productData?.name.slice(0, 90) + "..."}
                                </p>
                              </>
                            ) : (
                              <>
                                <p className="text-[#003088] font-semibold">
                                  {item?.productData?.name}
                                </p>
                              </>
                            )}
                            <p className="text-gray-500 font-semibold text-sm">
                              {item?.productData?.code}
                            </p>
                            <div className="flex lg:items-center flex-col lg:flex-row">
                              <div className="text-yellow-500 font-medium lg:text-lg">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                              </div>
                              <p className="lg:ms-2 text-sm text-[#003088]">
                                ({item?.productData?.numberOfRatings} Ratings &{" "}
                                {item?.productData?.numberOfReviews} Reviews)
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div id="right" className="flex flex-col gap-1 w-full lg:w-[38%]">
                        <h2 className="text-end text-lg font-extrabold">
                          {item?.productData?.price?.value.toLocaleString(
                            "en-IN",
                            { style: "currency", currency: "INR" }
                          )}
                        </h2>
                        <p className="text-sm text-gray-700 text-end">
                          M.R.P.:{" "}
                          <span className="line-through text-sm">
                            ₹{item?.productData?.price?.mrp}
                          </span>{" "}
                          <span className="text-xs">
                            Inclusive of all taxes
                          </span>
                        </p>
                        <p className="text-sm text-gray-700 text-end">
                          You Save:{" "}
                          <span>₹{item?.productData?.price?.discount}</span>
                        </p>
                        {!item?.productData?.freeshipping ? (
                          <>
                            <h1 className="text-end text-green-600 text-xs font-semibold">
                              FREE Shipping!
                            </h1>
                          </>
                        ) : null}
                        <p className="text-xs font-semibold text-gray-700 text-end">
                          Standard Delivery:{" "}
                          <span className="text-[#003380]">
                            {new Date().getDate() + 2}{" "}
                            {new Date().toLocaleString("en-US", {
                              month: "short",
                            })}{" "}
                            (
                            {new Date(
                              new Date().setDate(new Date().getDate() + 2)
                            ).toLocaleString("en-US", { weekday: "short" })}
                            )-{new Date().getDate() + 3}{" "}
                            {new Date().toLocaleString("en-US", {
                              month: "short",
                            })}{" "}
                            (
                            {new Date(
                              new Date().setDate(new Date().getDate() + 3)
                            ).toLocaleString("en-US", { weekday: "short" })}
                            )
                          </span>
                        </p>
                        <p className="text-end text-xs text-gray-700 leading-none">
                          *Delivery assurance is subject to our delivery
                          locations staying open as per govt. regulations
                        </p>
                      </div>
                    </div>
                    <div className="border border-x-0 border-b-0 flex justify-evenly py-2">
                      <button
                        className="text-[#003088] hover:font-semibold"
                        value={item?.productData?.code}
                        onClick={(e) => {
                          removeProduct(e.target.value);
                        }}
                      >
                        Remove
                      </button>
                      <button className="text-[#003088] hover:font-semibold">
                        Move to wishlist
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full lg:w-[35%] lg:ms-10">
              <div>
                <button
                  className="bg-red-600 text-white w-full rounded py-2 text-sm font-semibold"
                  onClick={checkOutEvent}
                >
                  CHECKOUT
                </button>
              </div>
              <div className="p-2">
                <div className="flex gap-2 flex-col">
                  <p className="text-gray-600 font-semibold">PRICE DETAILS</p>
                  <div className="flex justify-between">
                    <p className="text-gray-600 text-sm">
                      Price (
                      {newStoreData.length +
                        parseInt(
                          newStoreData.reduce((a, b) => {
                            return a + (b?.productQuantity || 0);
                          }, 0) - newStoreData.length
                        )}{" "}
                      Items)
                    </p>
                    <p className="text-gray-600 text-sm font-semibold">
                        {parseInt(
                        newStoreData.reduce(
                          (a, b) =>
                            a +
                            (b?.productData?.price?.value || 0) *
                              (b?.productQuantity || 0),
                          0
                        )
                      ).toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-sm text-gray-600">Delivery Charges</p>
                    {!newStoreData?.productData?.freeshipping ? (
                      <>
                        <p className="text-sm text-green-600 font-semibold">
                          Free
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-red-600 font-semibold">
                          Paid
                        </p>
                      </>
                    )}
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <h4 className="text-gray-600 font-semibold">
                      AMOUNT PAYABLE
                    </h4>
                    <p className="text-[#003088] font-semibold">
                      {parseInt(
                        newStoreData.reduce(
                          (a, b) =>
                            a +
                            (b?.productData?.price?.value || 0) *
                              (b?.productQuantity || 0),
                          0
                        )
                      ).toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </p>
                  </div>
                  <hr />
                  <p className="text-sm text-gray-800">
                    Safe and Secure Payments. Easy returns. 100% Authentic
                    products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProductCart