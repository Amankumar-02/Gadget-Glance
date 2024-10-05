import React from "react";

function ProductReviews({ productReviewData }) {
  const { headline, comment, date, principal, location, certified } =
    productReviewData;
  return (
    <>
      {!productReviewData ? null : (
        <>
          <div className="flex flex-col gap-1 py-6 w-full lg:w-[48%]">
            <div className="flex items-center gap-2">
              {/* Name */}
              <h3 className="text-gray-600 text-lg lg:text-xl">
                {principal?.name}
              </h3>
              {/* Certified Badge */}
              {certified ? (
                <div className="flex items-center gap-1">
                  <i className="ri-checkbox-circle-fill text-green-600 text-sm lg:text-base"></i>
                  <p className="text-green-600 text-xs lg:text-sm">
                    Certified Buyer
                  </p>
                </div>
              ) : null}
            </div>

            {/* Rating and Headline */}
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="text-yellow-500 font-medium text-sm lg:text-lg">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">
                {headline}
              </p>
            </div>

            {/* Location and Date */}
            <div className="text-gray-500 text-xs lg:text-sm">
              {`${location},`} {new Date(date).getDate()}/
              {new Date(date).getMonth() + 1}/{new Date(date).getFullYear()}
            </div>

            {/* Comment */}
            <p className="text-gray-500 text-sm lg:text-base w-[90%] max-h-[44px] lg:max-h-none overflow-hidden overflow-y-scroll custom-scrollbar">
              {comment}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ProductReviews;
