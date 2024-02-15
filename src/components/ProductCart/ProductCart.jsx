import 'remixicon/fonts/remixicon.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IMG_URL } from '../../utils/constant';

function ProductCart() {
  const storeData = useSelector(state=>state.cart.cart);
  console.log(storeData)
  return (
    <>
      <div className="flex py-2 px-14">
        <div className="w-[65%]">
          <div className="flex justify-between items-center border border-y-2 border-x-0 py-2 px-4">
            <div>
              <h2>My Cart ({storeData.length} Items)</h2>
            </div>
            <div>
              <p>
                Shipping to: 110059 <i class="ri-map-pin-2-fill"></i>
              </p>
            </div>
          </div>
          <div id="items">
            {storeData.map((item, index) => (
              <div
                key={index}
                className="flex justify-between border border-y-2 border-x-0 py-2 px-4 my-2"
              >
                <div id="left" className="flex w-[60%]">
                  <div>
                    <div className="w-[100px]">
                      <img
                        src={IMG_URL + item?.productData?.media[0]?.zoomUrl}
                        alt=""
                      />
                    </div>
                    <div>
                      <label htmlFor="">Qty</label>
                      <select name="" id="">
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
                    <p>{item?.productData?.name}</p>
                    <p>{item?.productData?.code}</p>
                    <div className="flex items-center">
                      <div className="text-yellow-500 font-medium text-lg">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-line"></i>
                      </div>
                      <p>
                        ({item?.productData?.numberOfRatings} Ratings &{" "}
                        {item?.productData?.numberOfReviews} Reviews)
                      </p>
                    </div>
                  </div>
                </div>
                <div id="right" className='flex flex-col gap-1 w-[38%]'>
                  <h2 className="text-end text-lg font-extrabold tracking-widest">
                    ₹{item?.productData?.price?.value}
                  </h2>
                  <p className="text-end">
                    M.R.P.:{" "}
                    <span className="line-through text-sm">
                      ₹{item?.productData?.price?.mrp}
                    </span>{" "}
                    <span className="text-xs">Inclusive of all taxes</span>
                  </p>
                  <p className="text-xs text-end">
                    You Save: <span>₹{item?.productData?.price?.discount}</span>
                  </p>
                  {!item?.productData?.freeshipping ? (
                    <>
                      <h1 className="text-end text-gray-700 text-xs">
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
            ))}
          </div>
        </div>
        <div className="w-[35%]"></div>
      </div>
    </>
  );
}

export default ProductCart