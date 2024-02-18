import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { SEARCH_URL_CUSTOM } from '../../utils/constant';
import { Shimmer } from '../index'
import {ItemCard, SideFilter} from './index';
// import { useSelector } from 'react-redux';

function SearchProducts() {
  const { userId } = useParams();
  // const searchStoreData = useSelector(state=>state.searchResult.searchResult);
  const [changeUrl , setChangeUrl] = useState(null);
  const [fetchSearchList, setFetchSearchList] = useState(null);
  
  // verify the params input
  useEffect(() => {
    if (userId) {
      // Original
      // const searchQuery = userId.toLowerCase().replaceAll("%", " ").replaceAll("|", " ").replaceAll("/", " ").replaceAll("&", "and").replaceAll(" ", "%20");

      // corsProxy
      const searchQuery = userId.toLowerCase().replaceAll("%", " ").replaceAll("|", " ").replaceAll("/", " ").replaceAll("&", "and").replaceAll(" ", "%2520");

      // Original
      // const url = `${SEARCH_URL_CUSTOM.slice(0, 100)}${searchQuery}${SEARCH_URL_CUSTOM.slice(-37)}`;

      //corsProxy
      const url = `${SEARCH_URL_CUSTOM.slice(0, 147)}${searchQuery}${SEARCH_URL_CUSTOM.slice(-51)}`;

      setChangeUrl(url);
    }
  }, [userId]);

  // fetch the api depending on params
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
    if (changeUrl) {
      fetchDataFromAPI();
    }
  }, [changeUrl]);

  // Original
  // const prevPage = ()=>{
  //   setChangeUrl(prev => {
  //     const pageIndex = prev.indexOf('page=');
  //     if (pageIndex !==-1) {
  //       const currentPage = parseInt(prev.slice(pageIndex + 5, prev.indexOf('&', pageIndex)));
  //       const prevPage = currentPage - 1;
  //       return prev.replace(`page=${currentPage}`, `page=${prevPage}`);
  //     } else {
  //       return prev;
  //     }
  //   });
  // }

  //corsProxy
  // const prevPage = ()=>{
  //   setChangeUrl(prev => {
  //     const pageIndex = prev.indexOf('page%3D');
  //     if (pageIndex !==-1) {
  //       const currentPage = parseInt(prev.slice(pageIndex + 7, prev.indexOf('%26', pageIndex)));
  //       const prevPage = currentPage - 1;
  //       return prev.replace(`page%3D${currentPage}`, `page%3D${prevPage}`);
  //     } else {
  //       return prev;
  //     }
  //   });
  // }

  // Original
  // const nextPage = ()=>{
  //   setChangeUrl(prev => {
  //     const pageIndex = prev.indexOf('page=');
  //     const currentPage = parseInt(prev.slice(pageIndex + 5, prev.indexOf('&', pageIndex)));
  //     if (currentPage < fetchSearchList?.productListData?.pagination?.numberOfPages) {
  //       const nextPage = currentPage + 1;
  //       return prev.replace(`page=${currentPage}`, `page=${nextPage}`);
  //     } else {
  //       return prev;
  //     }
  //   });
  // }

  //corsProxy
  // const nextPage = ()=>{
  //   setChangeUrl(prev => {
  //     const pageIndex = prev.indexOf('page%3D');
  //     const currentPage = parseInt(prev.slice(pageIndex + 7, prev.indexOf('%26', pageIndex)));
  //     if (currentPage < fetchSearchList?.productListData?.pagination?.numberOfPages) {
  //       const nextPage = currentPage + 1;
  //       return prev.replace(`page%3D${currentPage}`, `page%3D${nextPage}`);
  //     } else {
  //       return prev;
  //     }
  //   });
  // }

  // Original
  // const paginationItems = (direction)=>{
  //   setChangeUrl(prev => {
  //     const pageIndex = prev.indexOf('page=');
  //     // if (pageIndex !== -1) {
  //       const currentPage = parseInt(prev.slice(pageIndex + 5, prev.indexOf('&', pageIndex)));
  //       let newPage;
  //       if (direction === 'prev') {
  //         if(currentPage > 0){
  //           newPage = currentPage - 1;
  //         }else{
  //           newPage = 0;
  //         }
  //       } else if (direction === 'next') {
  //         if (currentPage < fetchSearchList?.productListData?.pagination?.numberOfPages-1) {
  //           newPage = currentPage + 1;
  //         } else {
  //           newPage = fetchSearchList?.productListData?.pagination?.numberOfPages-1;
  //         }
  //       }

  //       return prev.replace(`page=${currentPage}`, `page=${newPage}`);
  //     // } else {
  //       // return prev;
  //     // }
  //   });
  // }

  // corsProxy
  const paginationItems = (direction)=>{
    setChangeUrl(prev => {
      const pageIndex = prev.indexOf('page%3D');
      // if (pageIndex !== -1) {
        const currentPage = parseInt(prev.slice(pageIndex + 7, prev.indexOf('%26', pageIndex)));
        let newPage;
        if (direction === 'prev') {
          if(currentPage > 0){
            newPage = currentPage - 1;
          }else{
            newPage = 0;
          }
        } else if (direction === 'next') {
          if (currentPage < fetchSearchList?.productListData?.pagination?.numberOfPages-1) {
            newPage = currentPage + 1;
          } else {
            newPage = fetchSearchList?.productListData?.pagination?.numberOfPages-1;
          }
        }

        return prev.replace(`page%3D${currentPage}`, `page%3D${newPage}`);
      // } else {
        // return prev;
      // }
    });
  }
  

  // Original
  // const applyFilter  = (filter)=>{
  //   setChangeUrl(prev=>{
  //     const filterIndex = prev.indexOf('%3A');
  //     const currentFilter = prev.slice(filterIndex + 3, prev.indexOf('&',filterIndex));
  //     return prev.replace(`%3A${currentFilter}`, `%3A${filter}`)
  //   })
  // }

  //corsProxy
  const applyFilter  = (filter)=>{
    setChangeUrl(prev=>{
      const filterIndex = prev.indexOf('%253A');
      const currentFilter = prev.slice(filterIndex + 5, prev.indexOf('%26',filterIndex));
      return prev.replace(`%253A${currentFilter}`, `%253A${filter}`)
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
                {`> ${fetchSearchList?.productListData?.facets[1]?.values[0]?.query?.query?.value.split(":")[0].replaceAll("%2520", " ").replaceAll("%20", " ")} > Search`}
              </div>
            </div>
          </section>
          <hr />
          <section>
            <div className="flex gap-6 py-4 px-6">
              <div className="w-[20%]">
                <SideFilter sideFilterData={fetchSearchList} event={setChangeUrl}/>
              </div>
              <div className="w-[80%]">
                <div className="flex justify-between pb-4">
                  <div>
                    <h1 className="uppercase text-xl font-bold text-gray-700">{fetchSearchList?.productListData?.facets[1]?.values[0]?.query?.query?.value.split(":")[0].replaceAll("%2520", " ").replaceAll("%20", " ")}</h1>
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
                    <button onClick={()=>{applyFilter("relevance")}} className='text-green-600 border border-green-600 text-sm px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl'>Relevance</button>
                    <button onClick={()=>{applyFilter("price-asc")}} className='text-green-600 border border-green-600 text-sm px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl'>Price(Low-High)</button>
                    <button onClick={()=>{applyFilter("price-desc")}} className='text-green-600 border border-green-600 text-sm px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl'>Price(High-Low)</button>
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
                  <button onClick={()=>{paginationItems("prev")}} className='text-gray-400 border-2 border-gray-400 px-2 hover:bg-gray-400 hover:text-white '>Prev</button>
                  <p className='text-gray-600 text-lg font-semibold'>
                    {fetchSearchList?.productListData?.pagination?.currentPage + 1}
                  </p>
                  <button onClick={()=>{paginationItems("next")}} className='text-gray-400 border-2 border-gray-400 px-2 hover:bg-gray-400 hover:text-white '>Next</button>
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