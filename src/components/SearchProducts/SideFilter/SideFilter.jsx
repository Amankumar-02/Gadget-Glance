import React, { useState } from 'react'

function SideFilter({sideFilterData, event}) {
    const [minPrice, setMinPrice] = useState(sideFilterData?.productListData?.facets[0]?.minPrice.replace(".0",""));
    const [maxPrice, setMaxPrice] = useState(sideFilterData?.productListData?.facets[0]?.maxPrice.replace(".0",""));
    const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);

    //Original
    // const priceFilterEvent = ()=>{
    //     event(prev=>{
    //         const pricefilterIndex1 = prev.indexOf('%3Arelevance');
    //         const pricefilterIndex2 = prev.indexOf('%3Aprice-asc');
    //         const pricefilterIndex3 = prev.indexOf('%3Aprice-desc');
    //         const currentFilter1 = prev.slice(pricefilterIndex1 + 12, prev.indexOf('&',pricefilterIndex1));
    //         const currentFilter2 = prev.slice(pricefilterIndex2 + 12, prev.indexOf('&',pricefilterIndex2));
    //         const currentFilter3 = prev.slice(pricefilterIndex3 + 13, prev.indexOf('&',pricefilterIndex3));
    //         return prev.replace(`%3Arelevance${currentFilter1}`, `%3Arelevance%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`).replace(`%3Aprice-asc${currentFilter2}`, `%3Aprice-asc%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`).replace(`%3Aprice-desc${currentFilter3}`, `%3Aprice-desc%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`)
    //     })
    // }

    //corsProxy
    const priceFilterEvent = ()=>{
      event(prev=>{
          const pricefilterIndex1 = prev.indexOf('%253Arelevance');
          const pricefilterIndex2 = prev.indexOf('%253Aprice-asc');
          const pricefilterIndex3 = prev.indexOf('%253Aprice-desc');
          const currentFilter1 = prev.slice(pricefilterIndex1 + 14, prev.indexOf('%26',pricefilterIndex1));
          const currentFilter2 = prev.slice(pricefilterIndex2 + 14, prev.indexOf('%26',pricefilterIndex2));
          const currentFilter3 = prev.slice(pricefilterIndex3 + 15, prev.indexOf('%26',pricefilterIndex3));
          return prev.replace(`%253Arelevance${currentFilter1}`, `%253Arelevance%3Aprice%3A%5B${minPrice}%2520TO%2520${maxPrice}%5D`).replace(`%253Aprice-asc${currentFilter2}`, `%253Aprice-asc%3Aprice%3A%5B${minPrice}%2520TO%2520${maxPrice}%5D`).replace(`%253Aprice-desc${currentFilter3}`, `%253Aprice-desc%3Aprice%3A%5B${minPrice}%2520TO%2520${maxPrice}%5D`)
      })
    }

    //Original
    // const availEvent = () => {
    //     event(prev => {
    //       let newUrl = prev;
    //       const filterIndex = prev.indexOf('%3Arelevance');
    //       const currentFilter = prev.slice(filterIndex + 12, prev.indexOf('&', filterIndex));
    //       if (!excludeOutOfStock) {
    //         console.log("Exclude out of stock");
    //         newUrl = prev.replace(`%3Arelevance${currentFilter}`, `%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock`);
    //       } else {
    //         console.log("Include out of stock");
    //         newUrl = prev.replace(`%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock`, '%3Arelevance');
    //       }
    //       return newUrl;
    //     });
    // }

    //corsProxy
    const availEvent = () => {
      event(prev => {
        let newUrl = prev;
        const filterIndex = prev.indexOf('%253Arelevance');
        const currentFilter = prev.slice(filterIndex + 14, prev.indexOf('%26', filterIndex));
        if (!excludeOutOfStock) {
          // console.log("Exclude out of stock");
          newUrl = prev.replace(`%253Arelevance${currentFilter}`, `%253Arelevance%253Aavailability%253AExclude%2520out%2520of%2520Stock`);
        } else {
          // console.log("Include out of stock");
          newUrl = prev.replace(`%253Arelevance%253Aavailability%253AExclude%2520out%2520of%2520Stock`, '%253Arelevance');
        }
        return newUrl;
      });
    }
    const handleCheckboxChange = (e) => {
    setExcludeOutOfStock(e.target.checked);
    availEvent();
    }
  return (
    <>
    <h2 className='text-lg font-semibold text-gray-700'>FILTERS</h2>
    <div className="pt-12">
        <p className='text-xl text-gray-700 pb-2'>Price</p>
        <div className='flex justify-between items-center'>
        <div className='flex flex-col items-center justify-center border border-[#1774EF]'>
            <p className='text-[#1774EF] text-xs'>Min.</p>
            <input type="text" className='w-[70px] text-center text-gray-700 outline-none' value={minPrice} onChange={(e)=>{setMinPrice(e.target.value)}}/>
        </div>
        <p>to</p>
        <div className='flex flex-col items-center justify-center border border-[#1774EF]'>
            <p className='text-[#1774EF] text-xs'>Max.</p>
            <input type="text" className='w-[70px] text-center text-gray-700 outline-none' value={maxPrice} onChange={(e)=>{setMaxPrice(e.target.value)}}/>
        </div>
        <button onClick={priceFilterEvent} className='bg-[#1774EF] text-white font-semibold hover:bg-white hover:border-2 hover:border-[#1774EF] hover:text-[#1774EF] p-2'>Go</button>
        </div>
    </div>
    <div className='py-12'>
        <p className='text-xl text-gray-700 pb-2'>Availability</p>
        <input type="checkbox" id='avail' className='me-2' checked={excludeOutOfStock} onClick={handleCheckboxChange}/>
        <label htmlFor="avail" className='text-gray-500'>Exclude out of Stock
        </label>
    </div>
    </>
  )
}

export default SideFilter