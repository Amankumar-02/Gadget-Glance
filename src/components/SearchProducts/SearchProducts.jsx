import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { SEARCH_URL_CUSTOM } from '../../utils/constant';
import { ProductCard, Shimmer, Slides } from '../index'

function SearchProducts() {
  const { userId } = useParams();
  const searchProductList1 = SEARCH_URL_CUSTOM.slice(0, 100);
  const searchProductList2 = userId.replaceAll(" ", "%20");
  const searchProductList3 = SEARCH_URL_CUSTOM.slice(-31);
  const [fetchSearchList, setFetchSearchList] = useState(null);
  // console.log(searchProductList1+searchProductList2+searchProductList3)
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch(searchProductList1+searchProductList2+searchProductList3);
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
  }, []);
  // console.log(fetchSearchList);

  return (
    <>
    {!fetchSearchList? (<Shimmer/>) : (
      <>
      {/* <section>
        <Slides liveCarousalData={fetchSearchList?.BannerSection[0]?.data}/>
      </section> */}
      <section>
        <div className="flex items-center justify-start py-1 px-4 text-gray-700">
          <i className="ri-home-4-fill text-base"></i>
          <div className="ms-2 text-xs capitalize">
            {`> ${userId} > Search`}
          </div>
        </div>
        <hr />
      </section>
      <section>
        <div className='flex py-2 px-4'>
          <div className='w-[20%]'>
            <h2>FILTERS</h2>
            <div className='w-full'>
              <p>Price</p>
              <input type="range" max={fetchSearchList?.productListData?.facets[0]?.maxPrice.replace(".0", "")} min={fetchSearchList?.productListData?.facets[0]?.minPrice.replace(".0", "")} className='w-full' />
              <div className='flex justify-between w-full'>
                <p>₹{fetchSearchList?.productListData?.facets[0]?.minPrice.replace(".0", "")}</p>
                <p>₹{fetchSearchList?.productListData?.facets[0]?.maxPrice.replace(".0", "")}</p>
              </div>
            </div>
          </div>
          <div className='w-[80%]'>
            <div className='flex justify-between'>
              <div>
                <h1 className='uppercase'>{userId}</h1>
                <p>(Showing {fetchSearchList?.productListData?.pagination?.numberOfPages}-{fetchSearchList?.productListData?.pagination?.pageSize} products of {fetchSearchList?.productListData?.pagination?.totalNumberOfResults} products)</p>
              </div>
              <div className='flex items-center gap-4'>
                <p>Sort By:</p>
                <button>Relevance</button>
                <button>Price(Low-High)</button>
                <button>Price(High-Low)</button>
              </div>
            </div>
            <div>
              {fetchSearchList?.productListData?.results.map((item, index)=>(
              <div key={index} className='w-[25%]'>
                <ProductCard items={item}/>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </>
    )}
    </>
  )
}

export default SearchProducts