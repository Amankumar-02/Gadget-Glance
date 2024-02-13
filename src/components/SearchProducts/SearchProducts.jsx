import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { SEARCH_URL_CUSTOM } from '../../utils/constant';
import { Shimmer } from '../index'
import {ItemCard, SideFilter} from './index';

function SearchProducts() {
  const { userId } = useParams();
  const searchProductList1 = SEARCH_URL_CUSTOM.slice(0, 100);
  const searchProductList2 = userId.replaceAll(" ", "%20");
  const searchProductList3 = SEARCH_URL_CUSTOM.slice(-31);
  const [fetchSearchList, setFetchSearchList] = useState(null);
  const [changeUrl , setChangeUrl] = useState(searchProductList1+searchProductList2+searchProductList3);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(changeUrl);
        if (!res.ok) {
          throw new Error("Error Serving Data");
        } else {
          const data = await res.json();
          setFetchSearchList(data?.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();
  }, [changeUrl, userId]);
  const prevPage = ()=>{
    setChangeUrl(prev => {
      const pageIndex = prev.indexOf('page=');
      if (pageIndex !==-1) {
        const currentPage = parseInt(prev.slice(pageIndex + 5, prev.indexOf('&', pageIndex)));
        const prevPage = currentPage - 1;
        return prev.replace(`page=${currentPage}`, `page=${prevPage}`);
      } else {
        return prev;
      }
    });
  }
  const nextPage = ()=>{
    setChangeUrl(prev => {
      const pageIndex = prev.indexOf('page=');
      const currentPage = parseInt(prev.slice(pageIndex + 5, prev.indexOf('&', pageIndex)));
      if (currentPage < fetchSearchList?.productListData?.pagination?.numberOfPages) {
        const nextPage = currentPage + 1;
        return prev.replace(`page=${currentPage}`, `page=${nextPage}`);
      } else {
        return prev;
      }
    });
  }
  const highToLowEvent = ()=>{
    setChangeUrl(prev=>{
      const filterIndex = prev.indexOf('%3A');
      const currentFilter = prev.slice(filterIndex + 3, prev.indexOf('&',filterIndex));
      return prev.replace(`%3A${currentFilter}`, `%3Aprice-desc`)
    })
  }
  const lowToHighEvent = ()=>{
    setChangeUrl(prev=>{
      const filterIndex = prev.indexOf('%3A');
      const currentFilter = prev.slice(filterIndex + 3, prev.indexOf('&',filterIndex));
      return prev.replace(`%3A${currentFilter}`, `%3Aprice-asc`)
    })
  }
  const relevanceEvent = ()=>{
    setChangeUrl(prev=>{
      const filterIndex = prev.indexOf('%3A');
      const currentFilter = prev.slice(filterIndex + 3, prev.indexOf('&',filterIndex));
      return prev.replace(`%3A${currentFilter}`, `%3Arelevance`)
    })
  }
  

  return (
    <>
      {!fetchSearchList ? (
        <Shimmer />
      ) : (
        <>
          <section>
            <div className="flex items-center justify-start py-1 px-4 text-gray-700">
              <i className="ri-home-4-fill text-base"></i>
              <div className="ms-2 text-xs capitalize">
                {`> ${fetchSearchList?.productListData?.facets[1]?.values[0]?.query?.query?.value.split(":")[0]} > Search`}
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className="flex gap-6 py-4 px-6">
              <div className="w-[20%]">
                <SideFilter sideFilterData={fetchSearchList} event={setChangeUrl}/>
                {/* <h2 className='text-lg font-semibold text-gray-700'>FILTERS</h2>
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
                </div> */}
              </div>
              <div className="w-[80%]">
                <div className="flex justify-between pb-4">
                  <div>
                    <h1 className="uppercase text-xl font-bold text-gray-700">{fetchSearchList?.productListData?.facets[1]?.values[0]?.query?.query?.value.split(":")[0]}</h1>
                    <p className='text-gray-400'>
                      (Showing{" "}
                      {
                        fetchSearchList?.productListData?.pagination
                          ?.currentPage
                      }
                      -{fetchSearchList?.productListData?.pagination?.pageSize}{" "}
                      products of{" "}
                      {
                        fetchSearchList?.productListData?.pagination
                          ?.totalNumberOfResults
                      }{" "}
                      products)
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p>Sort By:</p>
                    <button onClick={relevanceEvent} className='text-green-600 border border-green-600 text-sm px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl'>Relevance</button>
                    <button onClick={lowToHighEvent} className='text-green-600 border border-green-600 text-sm px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl'>Price(Low-High)</button>
                    <button onClick={highToLowEvent} className='text-green-600 border border-green-600 text-sm px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl'>Price(High-Low)</button>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  {fetchSearchList?.productListData?.results.map(
                    (item, index) => (
                      <ItemCard key={index} items={item}/>
                    )
                  )}
                </div>

                {fetchSearchList?.productListData?.pagination?.numberOfPages>1? (
                  <>
                  <div className='flex w-fit justify-between items-center gap-4 float-right py-4'>
                  <button onClick={prevPage} className='text-gray-400 border-2 border-gray-400 px-2 hover:bg-gray-400 hover:text-white '>Prev</button>
                  <p className='text-gray-600 text-lg font-semibold'>
                    {fetchSearchList?.productListData?.pagination?.currentPage}
                  </p>
                  <button onClick={nextPage} className='text-gray-400 border-2 border-gray-400 px-2 hover:bg-gray-400 hover:text-white '>Next</button>
                  <p className='text-gray-600 text-lg font-semibold'>Total Pages: {fetchSearchList?.productListData?.pagination?.numberOfPages}</p>
                  </div>
                  </>
                ):(null)}
              </div>
            </div>
          </section>
          <hr />
          <section></section>
        </>
      )}
    </>
  );
}

export default SearchProducts