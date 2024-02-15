import 'remixicon/fonts/remixicon.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMG_URL } from '../../utils/constant';
import { removeCartData } from '../../features/cart/cartSlice';

function ProductCart() {
  const storeData = useSelector(state=>state.cart.cart);
  console.log(storeData);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex py-6 px-14">
        <div className="w-[65%]">
          <div className="flex justify-between items-center border py-2 px-4">
            <div>
              <h2 className='font-bold'>My Cart <span className='text-gray-500 font-normal'>({storeData.length} Items)</span></h2>
            </div>
            <div>
              <p className='text-sm'>
                Shipping to: 110059 <i className="ri-map-pin-2-fill"></i>
              </p>
            </div>
          </div>
          {storeData.length === 0? (
            <>
            <div className='w-full h-[80px] flex justify-center items-center'>
              <h1 className='text-red-500 text-2xl font-bold'>Cart is Empty</h1>
              <p className='text-3xl ms-2'>🛒</p>
            </div>
            </>
          ) : (
            <>
            <div id="items">
            {storeData.map((item, index) => (
              <div key={index} className='border my-2'>
              <div className="flex justify-between py-3 px-4 " >
                <div id="left" className="flex w-[60%]">
                  <div className='flex flex-col items-center'>
                    <div className="w-[160px] py-4 pe-4">
                      <img
                        src={IMG_URL + item?.productData?.media[0]?.zoomUrl}
                        alt=""
                      />
                    </div>
                    <div className='border rounded w-fit px-2'>
                      <label htmlFor="">Qty:</label>
                      <select name="" id="" className='ms-2 outline-none'>
                        <option value="0">0</option>
                        <option value="1" selected>
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    {item?.productData?.name.length>90? (<>
                      <p className='text-[#003088] font-semibold text-sm'>{item?.productData?.name.slice(0, 90)+'...'}</p>
                    </>) : (<>
                      <p className='text-[#003088] font-semibold'>{item?.productData?.name}</p>
                    </>)}
                    {/* <p className='text-[#003088] font-semibold'>{item?.productData?.name}</p> */}
                    <p className='text-gray-500 font-semibold text-sm'>{item?.productData?.code}</p>
                    <div className="flex items-center">
                      <div className="text-yellow-500 font-medium text-lg">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                      </div>
                      <p className='ms-2 text-sm text-[#003088]'>
                        ({item?.productData?.numberOfRatings} Ratings &{" "}
                        {item?.productData?.numberOfReviews} Reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <div id="right" className='flex flex-col gap-1 w-[38%]'>
                  <h2 className="text-end text-lg font-extrabold">
                    {item?.productData?.price?.value.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                  </h2>
                  <p className="text-sm text-gray-700 text-end">
                    M.R.P.:{" "}
                    <span className="line-through text-sm">
                      ₹{item?.productData?.price?.mrp}
                    </span>{" "}
                    <span className="text-xs">Inclusive of all taxes</span>
                  </p>
                  <p className="text-sm text-gray-700 text-end">
                    You Save: <span>₹{item?.productData?.price?.discount}</span>
                  </p>
                  {!item?.productData?.freeshipping ? (
                    <>
                      <h1 className="text-end text-green-600 text-xs font-semibold">
                        FREE Shipping!
                      </h1>
                    </>
                  ) : null}
                  <p className='text-xs font-semibold text-gray-700 text-end'>
                    Standard Delivery: <span className='text-[#003380]'>{new Date().getDate()+2} {new Date().toLocaleString('en-US', { month: 'short' })} ({new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleString('en-US', { weekday: 'short' })})-{new Date().getDate()+3} {new Date().toLocaleString('en-US', { month: 'short' })} ({new Date(new Date().setDate(new Date().getDate() + 3)).toLocaleString('en-US', { weekday: 'short' })})</span>
                  </p>
                  <p className='text-end text-xs text-gray-700 leading-none'>*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</p>
                </div>
              </div>
                <div className='border border-x-0 border-b-0 flex justify-evenly py-2'>
                  <button className='text-[#003088]' value={item?.productData?.code} onClick={(e)=>{dispatch(removeCartData(e.target.value))}}>Remove</button>
                  <button className='text-[#003088]'>Move to wishlist</button>
                </div>
              </div>
            ))}
          </div>
            </>
          )}
        </div>
        <div className="w-[35%] ms-10">
          <div>
            <button className='bg-red-600 text-white w-full rounded py-2 text-sm font-semibold'>CHECKOUT</button>
          </div>
          <div className='p-2'>
            <div>
              <p>PRICE DETAILS</p>
              <div>
                <div>
                  <p>Price ({storeData.length} Items)</p>
                  <p>{storeData.reduce((a,b)=> a + (b?.productData?.price?.value || 0), 0).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</p>
                </div>
                <div>
                  <p>Delivery Charges</p>
                  {!storeData?.productData?.freeshipping? (
                    <>
                    <p>Free</p>
                    </>
                  ) : (
                    <>
                    <p>Paid</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCart