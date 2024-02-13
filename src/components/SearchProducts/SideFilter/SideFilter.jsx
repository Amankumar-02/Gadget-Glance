import React, { useState } from 'react'

function SideFilter({sideFilterData, event}) {
    const [minPrice, setMinPrice] = useState(sideFilterData?.productListData?.facets[0]?.minPrice.replace(".0",""));
    const [maxPrice, setMaxPrice] = useState(sideFilterData?.productListData?.facets[0]?.maxPrice.replace(".0",""));
    const priceFilterEvent = ()=>{
        event(prev=>{
            const pricefilterIndex1 = prev.indexOf('%3Arelevance');
            const pricefilterIndex2 = prev.indexOf('%3Aprice-asc');
            const pricefilterIndex3 = prev.indexOf('%3Aprice-desc');
            const currentFilter1 = prev.slice(pricefilterIndex1 + 12, prev.indexOf('&',pricefilterIndex1));
            const currentFilter2 = prev.slice(pricefilterIndex2 + 12, prev.indexOf('&',pricefilterIndex2));
            const currentFilter3 = prev.slice(pricefilterIndex3 + 13, prev.indexOf('&',pricefilterIndex3));
            return prev.replace(`%3Arelevance${currentFilter1}`, `%3Arelevance%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`).replace(`%3Aprice-asc${currentFilter2}`, `%3Aprice-asc%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`).replace(`%3Aprice-desc${currentFilter3}`, `%3Aprice-desc%3Aprice%3A%5B${minPrice}%20TO%20${maxPrice}%5D`)
        })
    }
    const availEvent = ()=>{
        event(prev=>{
            const filterIndex = prev.indexOf('%3Arelevance');
            const currentFilter = prev.slice(filterIndex + 12, prev.indexOf('&',filterIndex));
            console.log("first")
            return prev.replace(`%3Arelevance${currentFilter}`, `%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock`)
        })
        // event(prev => {
        //     const filterIndex = prev.indexOf('%3Arelevance');
        //     if (filterIndex !== -1) {
        //         const currentFilter = prev.slice(filterIndex + 15, prev.indexOf('&', filterIndex));
        //         console.log("Current Filter:", currentFilter); // Debugging statement
        //         const newUrl = prev.replace(`%3Arelevance${currentFilter}`, `%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock`);
        //         console.log("New URL:", newUrl); // Debugging statement
        //         return newUrl;
        //     } else {
        //         console.log("Filter not found"); // Debugging statement
        //         return prev;
        //     }
        // });
    }
  return (
    <>
    <h2 className='text-lg font-semibold text-gray-700'>FILTERS</h2>
    <div className="pt-14">
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
    <div>
        <p>Availability</p>
        <button onClick={availEvent}>Exclude out of Stock
        </button>
    </div>
    </>
  )
}

export default SideFilter