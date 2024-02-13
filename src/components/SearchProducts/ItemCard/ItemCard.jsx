import React from "react";
import { Link } from "react-router-dom";
import { IMG_URL } from "../../../utils/constant";

function ItemCard({items}) {
    const { media, name, price, hasPP, url } = items;
  return (
    <>
      <Link
        to={"/productInfo/" + url.replaceAll("/", "_")}
        target="_blank"
        className="w-[25%] my-4 px-2"
      >
        <div className="productItemHover">
          <div className="productImg">
            <img
              src={IMG_URL + media[0]?.productImageUrl}
              alt=""
              className=""
            />
          </div>
          <h2 className="productTitle text-[#003380] text-sm font-semibold py-6 text-left h-[68px] overflow-hidden w-[100%]">
            {name.length > 50 ? name.slice(0, 50) + "..." : name}
          </h2>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm text-gray-500">
              Deal Price:{" "}
              <span className="text-black font-bold">
                {price?.formattedValue}.00
              </span>
            </p>
            <p className="text-sm text-gray-500">
              M.R.P: <span className="line-through">₹{price?.mrp}.00</span>
            </p>
            <p className="text-sm text-gray-500">You Save: {price?.discount}</p>
            {hasPP ? (
              <>
                <div className="text-green-600 text-xs rounded-3xl border border-green-600 px-1">
                  OFFERS AVAILABLE
                </div>
              </>
            ) : null}
            <button className="text-red-500 border border-red-500 text-sm px-4 rounded-lg hover:bg-red-500 hover:text-white">
              Add WishList
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}

export default ItemCard;
