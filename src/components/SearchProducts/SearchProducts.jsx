import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SEARCH_URL_CUSTOM } from "../../utils/constant";
import { Shimmer } from "../index";
import { ItemCard, SideFilter } from "./index";
import useApiFetch from "../../hooks/useApiFetch";
// import { useSelector } from 'react-redux';

function SearchProducts() {
  const { userId } = useParams();
  // const searchStoreData = useSelector(state=>state.searchResult.searchResult);
  const [changeUrl, setChangeUrl] = useState(null);
  const [fetchSearchList, setFetchSearchList] = useState(null);
  const [orderType, setOrderType] = useState("relevance");
  const [pageNumb, setPageNumb] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [range, setRange] = useState("");
  const [stock, setStock] = useState("");
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);

  // verify the params input
  useEffect(() => {
    const searchQuery = userId
      ?.toLowerCase()
      .replaceAll("%", " ")
      .replaceAll("|", " ")
      .replaceAll("/", " ")
      .replaceAll("&", "and")
      .replaceAll(" ", "%20");

    if (userId) {
      // const url = `${SEARCH_URL_CUSTOM.slice(0, 100)}${searchQuery}${SEARCH_URL_CUSTOM.slice(-37)}`;
      const url = `${SEARCH_URL_CUSTOM}/${searchQuery}?orderType=relevance&paginate=0&range=&stock=`;

      setOrderType("relevance");
      setPageNumb(0);
      setRange("");
      setStock("");
      setExcludeOutOfStock(false);
      setChangeUrl(url);
    }
  }, [userId]);

  // fetch the api depending on params
  const { data: fetchedSearchedData, loading } = useApiFetch(changeUrl);
  useEffect(() => {
    if (fetchedSearchedData?.data) {
      setFetchSearchList(fetchedSearchedData?.data?.data);
      setMinPrice(
        parseInt(
          fetchedSearchedData?.data?.data?.productListData?.facets[0]
            ?.selectedMinPrice
        ) ||
          fetchedSearchedData?.data?.data?.productListData?.facets[0]?.minPrice.replace(
            ".0",
            ""
          )
      );
      setMaxPrice(
        parseInt(
          fetchedSearchedData?.data?.data?.productListData?.facets[0]
            ?.selectedMaxPrice
        ) ||
          fetchedSearchedData?.data?.data?.productListData?.facets[0]?.maxPrice.replace(
            ".0",
            ""
          )
      );
    }
  }, [fetchedSearchedData, changeUrl]);

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
  const paginationItems = (direction) => {
    const currentPage = pageNumb;
    let newPage;
    if (direction === "prev") {
      if (currentPage > 0) {
        newPage = currentPage - 1;
      } else {
        newPage = 0;
      }
    } else if (direction === "next") {
      if (
        currentPage <
        fetchSearchList?.productListData?.pagination?.numberOfPages - 1
      ) {
        newPage = currentPage + 1;
      } else {
        newPage =
          fetchSearchList?.productListData?.pagination?.numberOfPages - 1;
      }
    }
    setPageNumb(newPage);
    const searchQuery = userId
      .toLowerCase()
      .replaceAll("%", " ")
      .replaceAll("|", " ")
      .replaceAll("/", " ")
      .replaceAll("&", "and")
      .replaceAll(" ", "%20");
    const url = `${SEARCH_URL_CUSTOM}/${searchQuery}?orderType=${orderType}&paginate=${newPage}&range=${range}&stock=${stock}`;
    setChangeUrl(url);
  };

  const applyFilter = (filter) => {
    if (userId) {
      setOrderType(filter);
      const searchQuery = userId
        .toLowerCase()
        .replaceAll("%", " ")
        .replaceAll("|", " ")
        .replaceAll("/", " ")
        .replaceAll("&", "and")
        .replaceAll(" ", "%20");
      const url = `${SEARCH_URL_CUSTOM}/${searchQuery}?orderType=${filter}&paginate=${pageNumb}&range=${range}&stock=${stock}`;
      setChangeUrl(url);
    }
    // setChangeUrl(prev=>{
    //   const filterIndex = prev.indexOf('%3A');
    //   const currentFilter = prev.slice(filterIndex + 3, prev.indexOf('&',filterIndex));
    //   return prev.replace(`%3A${currentFilter}`, `%3A${filter}`)
    // })
  };

  return (
    <>
      {!fetchSearchList ? (
        <Shimmer />
      ) : (
        <>
          <section className="relative">
            {loading && (
              <div className="fixed top-auto h-[6px] lg:h-1 bg-green-500 w-full animate-pulse transition-all"></div>
            )}
            <div className="py-2 lg:py-4 px-3 lg:px-6">
              <div className="flex items-center justify-start text-gray-700">
                <i className="ri-home-4-fill text-base"></i>
                <div className="ms-2 text-xs capitalize">
                  {`> ${fetchSearchList?.productListData?.facets[1]?.values[0]?.query?.query?.value
                    .split(":")[0]
                    .replaceAll("%2520", " ")
                    .replaceAll("%20", " ")} > Search`}
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="py-2 lg:py-4 px-3 lg:px-6">
            <div className="flex flex-row lg:flex-row gap-4 lg:gap-6">
              <div className="relative w-[20%] lg:w-1/5">
                <SideFilter
                  sideFilterData={fetchSearchList}
                  excludeOutOfStock={excludeOutOfStock}
                  setExcludeOutOfStock={setExcludeOutOfStock}
                  mainUrl={SEARCH_URL_CUSTOM}
                  userId={userId}
                  setOrderType={setOrderType}
                  setPageNumb={setPageNumb}
                  minPrice={minPrice}
                  setMinPrice={setMinPrice}
                  maxPrice={maxPrice}
                  setMaxPrice={setMaxPrice}
                  range={range}
                  setRange={setRange}
                  stock={stock}
                  setStock={setStock}
                  setChangeUrl={setChangeUrl}
                />
              </div>
              <div className="w-[80%] lg:w-4/5">
                <div className="flex flex-col lg:flex-row justify-between pb-4">
                  <div>
                    <h1 className="uppercase text-sm lg:text-lg font-bold text-gray-700">
                      {fetchSearchList?.productListData?.facets[1]?.values[0]?.query?.query?.value
                        .split(":")[0]
                        .replaceAll("%2520", " ")
                        .replaceAll("%20", " ")}
                    </h1>
                    <p className="text-xs lg:text-base text-gray-400">
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
                  <div className="flex items-center gap-2 lg:gap-4 flex-wrap lg:flex-nowrap">
                    <p>Sort By:</p>
                    <button
                      onClick={() => applyFilter("relevance")}
                      className="text-green-600 border border-green-600 text-xs sm:text-sm px-1 lg:px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl"
                    >
                      Relevance
                    </button>
                    <button
                      onClick={() => applyFilter("price-asc")}
                      className="text-green-600 border border-green-600 text-xs sm:text-sm px-1 lg:px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl"
                    >
                      Price(Low-High)
                    </button>
                    <button
                      onClick={() => applyFilter("price-desc")}
                      className="text-green-600 border border-green-600 text-xs sm:text-sm px-1 lg:px-3 py-1 hover:bg-green-600 hover:text-white rounded-xl"
                    >
                      Price(High-Low)
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap">
                  {fetchSearchList?.productListData?.results.map(
                    (item, index) => (
                      <ItemCard key={index} items={item} />
                    )
                  )}
                </div>

                {fetchSearchList?.productListData?.pagination?.numberOfPages >
                  1 && (
                  <div className="flex w-fit justify-between items-center gap-2 lg:gap-4 float-right py-4">
                    <button
                      onClick={() => paginationItems("prev")}
                      className="text-gray-400 border-2 border-gray-400 text-xs sm:text-sm lg:text-base px-1 lg:px-2 hover:bg-gray-400 hover:text-white rounded-md"
                    >
                      Prev
                    </button>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-lg font-semibold">
                      {fetchSearchList?.productListData?.pagination
                        ?.currentPage + 1}
                    </p>
                    <button
                      onClick={() => paginationItems("next")}
                      className="text-gray-400 border-2 border-gray-400 text-xs sm:text-sm lg:text-base px-1 lg:px-2 hover:bg-gray-400 hover:text-white rounded-md"
                    >
                      Next
                    </button>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-lg font-semibold">
                      Total Pages:{" "}
                      {
                        fetchSearchList?.productListData?.pagination
                          ?.numberOfPages
                      }
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default SearchProducts;
