import React from 'react'

function SideFilter({sideFilterData}) {
  return (
    <>
    <h2>FILTERS</h2>
                <div className="w-full">
                  <p>Price</p>
                  <input
                    type="range"
                    max={sideFilterData?.productListData?.facets[0]?.maxPrice.replace(
                      ".0",
                      ""
                    )}
                    min={sideFilterData?.productListData?.facets[0]?.minPrice.replace(
                      ".0",
                      ""
                    )}
                    className="w-full"
                  />
                  <div className="flex justify-between w-full">
                    <p>
                      ₹
                      {sideFilterData?.productListData?.facets[0]?.minPrice.replace(
                        ".0",
                        ""
                      )}
                    </p>
                    <p>
                      ₹
                      {sideFilterData?.productListData?.facets[0]?.maxPrice.replace(
                        ".0",
                        ""
                      )}
                    </p>
                  </div>
                </div>
    </>
  )
}

export default SideFilter