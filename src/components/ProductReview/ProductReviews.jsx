import React from "react";

function ProductReviews({ productReviewData }) {
  // const { headline, comment, date, principal, location, certified } = productReviewData;
  const { customerName, verified, title, content, createdAt, location, rating } = productReviewData;
  return (
    <>
      {!productReviewData ? null : (
        <>
          <div className="flex flex-col gap-1 py-6 w-full lg:w-[48%]">
            <div className="flex items-center gap-2">
              {/* Name */}
              <h3 className="text-gray-600 text-lg lg:text-xl">
                {customerName}
              </h3>
              {/* Certified Badge */}
              {verified ? (
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
                {[...Array(rating)].map((_, index) => (
                  <i key={index} className="ri-star-fill mr-1"></i>
                ))}
                {/* <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i> */}
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">
                {title}
              </p>
            </div>

            {/* Location and Date */}
            <div className="text-gray-500 text-xs lg:text-sm">
              {`${location?.city},`} {new Date(createdAt).getDate()}/
              {new Date(createdAt).getMonth() + 1}/
              {new Date(createdAt).getFullYear()}
            </div>

            {/* Comment */}
            <p className="text-gray-500 text-sm lg:text-base w-[90%] max-h-[44px] lg:max-h-none overflow-hidden overflow-y-scroll custom-scrollbar">
              {content}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default ProductReviews;
