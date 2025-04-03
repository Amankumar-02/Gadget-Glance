import React from "react";
import { IMG_URL } from "../../utils/constant";

function BrandSection({ brandSelectionData }) {
  const brandData = brandSelectionData;
  return (
    <>
      {!brandData ? null : (
        <>
          <div className="py-4 lg:py-8 px-4 lg:px-10">
            <div className="text-center text-lg lg:text-2xl font-bold text-[#003088]">
              THE GADGET GLANCE BRAND PROMISE
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:pt-4 justify-center items-center">
              {brandData.map(({ img, url }, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg py-2 flex flex-col gap-2 items-center"
                >
                  <img src={img} alt="" />
                  <div>
                    <p className="text-[#003088] font-semibold text-xs lg:text-sm text-center">
                      {url}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default BrandSection;
