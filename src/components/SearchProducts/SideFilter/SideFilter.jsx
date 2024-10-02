import React, { useState } from "react";

function SideFilter({
  sideFilterData,
  excludeOutOfStock,
  setExcludeOutOfStock,
  mainUrl,
  userId,
  setOrderType,
  setPageNumb,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  range,
  setRange,
  stock,
  setStock,
  setChangeUrl,
}) {

  const priceFilterEvent = () => {
    let newRange = `%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`;
    setRange(newRange);
    const searchQuery = userId
      .toLowerCase()
      .replaceAll("%", " ")
      .replaceAll("|", " ")
      .replaceAll("/", " ")
      .replaceAll("&", "and")
      .replaceAll(" ", "%20");

    const url = `${mainUrl}/${searchQuery}?orderType=relevance&paginate=0&range=${newRange}&stock=`;
    setOrderType('relevance');
    setPageNumb(0);
    setExcludeOutOfStock(false);
    setChangeUrl(url);
  };

  const availEvent = () => {
    let newUrl = stock;
    if (!excludeOutOfStock) {
      console.log("Exclude out of stock");
      newUrl = "%3Aavailability%3AExclude%20out%20of%20Stock";
    } else {
      console.log("Include out of stock");
      newUrl = "";
    }
    setStock(newUrl);
    const searchQuery = userId
      .toLowerCase()
      .replaceAll("%", " ")
      .replaceAll("|", " ")
      .replaceAll("/", " ")
      .replaceAll("&", "and")
      .replaceAll(" ", "%20");

    const url = `${mainUrl}/${searchQuery}?orderType=relevance&paginate=0&range=${range}&stock=${newUrl}`;
    setOrderType('relevance');
    setPageNumb(0);
    setChangeUrl(url);
  };

  const handleCheckboxChange = (e) => {
    setExcludeOutOfStock(e.target.checked);
    availEvent();
  };
  return (
    <>
      <div className="sticky lg:relative top-[145px] lg:top-0 left-0">
        <h2 className="text-sm lg:text-lg font-semibold text-gray-700">
          FILTERS
        </h2>
        <div className="pt-2 lg:pt-12">
          <p className="text-sm lg:text-xl text-gray-700 pb-2">Price</p>
          <div className="flex justify-between items-center flex-col lg:flex-row gap-2 lg:gap-0">
            <div className="flex flex-col items-center justify-center border border-[#1774EF]">
              <p className="text-[#1774EF] text-xs">Min.</p>
              <input
                type="number"
                min={sideFilterData?.productListData?.facets[0]?.minPrice.replace(".0", "")}
                className="w-[70px] text-center text-gray-700 outline-none"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
              />
            </div>
            <p>to</p>
            <div className="flex flex-col items-center justify-center border border-[#1774EF]">
              <p className="text-[#1774EF] text-xs">Max.</p>
              <input
                type="number"
                max={sideFilterData?.productListData?.facets[0]?.maxPrice.replace(".0", "")}
                className="w-[70px] text-center text-gray-700 outline-none"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
              />
            </div>
            <button
              onClick={priceFilterEvent}
              className="bg-[#1774EF] text-white font-semibold hover:bg-white hover:border-2 hover:border-[#1774EF] hover:text-[#1774EF] p-1 lg:p-2"
            >
              Go
            </button>
          </div>
        </div>
        <div className="pt-2 lg:pt-12">
          <p className="text-sm lg:text-xl text-gray-700 pb-2">Availability</p>
          <input
            type="checkbox"
            id="avail"
            className="me-2"
            checked={excludeOutOfStock}
            onClick={handleCheckboxChange}
          />
          <label htmlFor="avail" className="text-gray-500">
            Exclude out of Stock
          </label>
        </div>
      </div>
    </>
  );
}

export default SideFilter;
