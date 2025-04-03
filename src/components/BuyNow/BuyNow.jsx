import "remixicon/fonts/remixicon.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IMG_URL } from "../../utils/constant";
import {
  removeBuyNowData,
  editBuyNowQuantityData,
  clearBuyNowItems,
} from "../../features/cart/cartSlice";
import { useNavigate, Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function BuyNow() {
  const pincode = useSelector((state) => state.cart.pincode);
  const stateLocation = useSelector((state) => state.cart.stateLocation);
  const storeData = useSelector((state) => state.cart.buyNowCart);
  const [newStoreData, setNewStoreData] = useState(storeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const editQuantityEvent = (item_code, task) => {
    const filterProduct = storeData.filter(
      (item) => item.item_code === item_code
    )[0];
    if (task === "decrease") {
      if (filterProduct?.productQuantity > 1) {
        dispatch(editBuyNowQuantityData({ item_code: item_code, task: task }));
        toast.success("Item quantity is decreased.");
      }
    } else {
      if (filterProduct?.productQuantity < 10) {
        dispatch(editBuyNowQuantityData({ item_code: item_code, task: task }));
        toast.success("Item quantity is increased.");
      }
    }
  };

  const removeProduct = (e) => {
    dispatch(removeBuyNowData(e));
    toast.success("Item removed Successfully");
  };

  useEffect(() => {
    setNewStoreData(storeData);
  }, [editQuantityEvent, removeProduct]);

  useEffect(() => {
    if (!orderPlaced && newStoreData.length === 0) {
      navigate("/");
    }
  }, [orderPlaced, navigate]);

  const checkOutEvent = () => {
    setOrderPlaced(true);
    // navigate("/checkout")
    dispatch(clearBuyNowItems());
    toast.success("Your Order is Placed Successfully");
  };

  return (
    <>
      {newStoreData.length === 0 ? (
        <>
          {orderPlaced ? (
            <>
              <div className="my-6 lg:my-10 m-auto w-[94%] lg:w-[80%] min-h-[80vh] flex flex-col gap-4 items-center justify-center">
                <img
                  src="https://clipart-library.com/images/Lcd5doyqi.png"
                  alt=""
                  className="w-[80px] lg:w-[100px]"
                />
                <h1 className="mt-4 text-2xl font-semibold text-gray-600">
                  Order Placed!
                </h1>
                <p className="text-lg text-gray-500">
                  Thank you for your order
                </p>
                <p className="text-lg text-gray-500 font-semibold">
                  Order Id - {Math.floor(Math.random() * 999999)}
                </p>
                <button
                  className="p-2 bg-orange-400 rounded-lg text-white font-semibold text-lg lg:text-xl"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go to home
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="my-6 lg:my-8 m-auto w-[94%] lg:w-[80%] min-h-[80vh] flex flex-col items-center justify-center gap-4">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
                  alt=""
                  className="w-[250px] lg:w-[360px]"
                />
                <h1 className="mt-4 text-2xl font-semibold text-gray-600">
                  Your cart is empty
                </h1>
                <p className="text-lg text-gray-500 text-center">
                  Looks like you have not added anything to you cart. Go ahead &
                  explore top products.
                </p>
                <button
                  className="p-2 bg-orange-400 rounded-lg text-white font-semibold text-lg lg:text-xl"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go to home
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row py-2 lg:py-6 px-2 sm:px-4 lg:px-14">
            <div className="w-full lg:w-[65%]">
              <div
                id="topBar"
                className="flex justify-between items-center py-2 px-2 sm:px-4"
              >
                <div>
                  <h2 className="font-bold text-sm sm:text-base lg:text-lg">
                    My Items{" "}
                    <span className="text-gray-500 font-normal">
                      ({newStoreData.length} Items)
                    </span>
                  </h2>
                </div>
                <div>
                  <p className="text-xs sm:text-sm">
                    Shipping to: {`${stateLocation} ${pincode}`}{" "}
                    <i className="ri-map-pin-2-fill"></i>
                  </p>
                </div>
              </div>

              {/* Cart Items */}
              <div id="items">
                {newStoreData.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg my-2"
                  >
                    <div className="flex justify-between py-3 px-2 sm:px-4">
                      <div
                        id="left"
                        className="flex w-[40%] sm:w-[30%] xl:w-[20%]"
                      >
                        <div className="w-full flex flex-col items-center justify-center">
                          <Link
                            to={
                              "/productInfo/" +
                              item.slug +
                              "?item_code=" +
                              item.item_code
                            }
                          >
                            <div className="w-full h-full py-4 pe-4">
                              <img
                                src={item?.medias[0]?.url}
                                alt={item?.medias[0]?.alt}
                              />
                            </div>
                          </Link>
                          <div className="border border-gray-300 flex rounded-lg w-fit">
                            <button
                              className="px-3 sm:px-4 hover:font-semibold"
                              onClick={() => {
                                editQuantityEvent(
                                  item?.item_code,
                                  "decrease"
                                );
                              }}
                            >
                              -
                            </button>
                            <p>{item?.productQuantity}</p>
                            <button
                              className="px-3 sm:px-4 hover:font-semibold"
                              onClick={() => {
                                editQuantityEvent(
                                  item?.item_code,
                                  "increase"
                                );
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>

                      <div
                        id="right"
                        className="flex flex-col xl:flex-row gap-4 xl:gap-2 w-[78%] mt-2 lg:mt-0"
                      >
                        <Link
                          to={"/productInfo/" +
                            item.slug +
                            "?item_code=" +
                            item.item_code}
                          className="w-full xl:w-[58%]"
                        >
                          <div className="">
                            <p className="text-[#003088] font-semibold text-sm lg:text-base">
                              {item?.name.length > 90
                                ? item?.name.slice(0, 90) + "..."
                                : item?.name}
                            </p>
                            <p className="text-gray-500 font-semibold text-xs sm:text-sm">
                              {item?.item_code}
                            </p>
                            <div className="flex lg:items-center flex-col lg:flex-row">
                              <div className="text-yellow-500 font-medium text-sm sm:text-base lg:text-lg">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                              </div>
                              <p className="lg:ms-2 text-sm text-black font-semibold">
                                {item?._custom_json?._app?.averageRating}
                              </p>
                              <p className="lg:ms-2 text-xs sm:text-sm text-[#003088]">
                                ({item?._custom_json?._app?.ratingsCount} Ratings &{" "}
                                {item?._custom_json?._app?.reviewsCount} Reviews)
                              </p>
                            </div>
                          </div>
                        </Link>

                        <div className="lg:text-end w-full xl:w-[40%]">
                          <h2 className=" text-lg font-extrabold">
                            {item?.price?.effective?.max.toLocaleString(
                              "en-IN",
                              {
                                style: "currency",
                                currency: "INR",
                              }
                            )}
                          </h2>
                          <p className="text-sm text-gray-700 ">
                            M.R.P.:{" "}
                            <span className="line-through text-sm">
                              {item?.price?.marked?.max.toLocaleString(
                          "en-IN",
                          { style: "currency", currency: "INR" }
                        )}
                            </span>{" "}
                            <span className="text-xs">
                              Inclusive of all taxes
                            </span>
                          </p>
                          <p className="text-sm text-gray-700 ">
                            You Save:{" "}
                            <span>₹{item?.discount}</span>
                          </p>
                          {item?._custom_json?.free_shippable ? (
                            <h1 className=" text-green-600 text-xs font-semibold">
                              FREE Shipping!
                            </h1>
                          ) : null}
                          <p className="text-xs font-semibold text-gray-700 ">
                            Standard Delivery:{" "}
                            <span className="text-[#003088]">
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
                          <p className=" text-xs text-gray-700 leading-none">
                            *Delivery assurance is subject to our delivery
                            locations staying open as per govt. regulations
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border border-gray-300 border-x-0 border-b-0 flex justify-evenly items-center py-2">
                      <button
                        className="text-[#003088] hover:font-semibold"
                        value={item?.item_code}
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
            <div className="relative w-full lg:w-[35%] lg:ms-10 my-4 lg:my-0">
              <div className="h-[2px] w-full bg-gray-400 block lg:hidden"></div>
              <div className="lg:sticky lg:top-[100px] lg:right-0">
                <div className="p-2">
                  <div className="flex gap-2 flex-col">
                    <p className="text-gray-600 font-semibold">
                      PAYMENT DETAILS
                    </p>
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
                              (b?.price?.effective?.max || 0) *
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
                      <p className="text-gray-600 text-sm">
                        Extra Discount <span className="text-sm">(10%)</span>
                      </p>
                      <p className="text-gray-600 text-sm font-semibold">
                        -{" "}
                        {parseInt(
                          Math.floor(
                            (newStoreData.reduce(
                              (a, b) =>
                                a +
                                (b?.price?.effective?.max || 0) *
                                  (b?.productQuantity || 0),
                              0
                            ) *
                              10) /
                              100
                          )
                        ).toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </p>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-sm text-gray-600">Delivery Charges</p>
                      {newStoreData?._custom_json?.free_shippable ? (
                        <p className="text-sm text-green-600 font-semibold">
                          Free
                        </p>
                      ) : (
                        <p className="text-sm text-red-600 font-semibold">
                          ₹100.00
                        </p>
                      )}
                    </div>
                    <div className="h-[2px] my-1 w-full bg-gray-400"></div>

                    <div className="flex justify-between">
                      <h4 className="text-gray-600 font-semibold">
                        AMOUNT PAYABLE
                      </h4>
                      <p className="text-[#003088] font-semibold">
                        {parseInt(
                          Math.floor(
                            newStoreData.reduce(
                              (a, b) =>
                                a +
                                (b?.price?.effective?.max || 0) *
                                  (b?.productQuantity || 0),
                              0
                            )
                          ) -
                            Math.floor(
                              (newStoreData.reduce(
                                (a, b) =>
                                  a +
                                  (b?.price?.effective?.max || 0) *
                                    (b?.productQuantity || 0),
                                0
                              ) *
                                10) /
                                100
                            ) + 100
                        ).toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </p>
                    </div>
                    <div className="h-[2px] my-1 w-full bg-gray-400"></div>
                    <p className="text-sm text-gray-800">
                      Safe and Secure Payments. Easy returns. 100% Authentic
                      products.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center my-4">
                  <button
                    className="bg-red-600 text-white rounded py-2 px-4 text-sm font-semibold w-fit lg:w-full active:scale-[0.9]"
                    onClick={checkOutEvent}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BuyNow;
