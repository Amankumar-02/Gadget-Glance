import React from "react";

function ProductReviews({ productReviewData }) {
  const { headline, comment, date, principal, location, certified } = productReviewData;
  return (
    <>
      {!productReviewData ? null : (
        <>
          <div className="flex flex-col gap-1 py-6">
            <div className="flex items-center gap-2">
              <h3 className="text-gray-600 text-lg lg:text-xl ">
                {principal?.name}
              </h3>
              {certified ? (
                <>
                  <div className="flex items-center gap-1">
                    <i className="ri-checkbox-circle-fill text-green-600 text-sm lg:text-base"></i>
                    <p className="text-green-600 text-xs lg:text-sm">Certified Buyer</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className="flex items-center gap-2 lg:gap-4">
              <div className="text-yellow-500 font-medium text-sm lg:text-lg">
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
                <i className="ri-star-fill"></i>
              </div>
              <p className="text-gray-700 font-semibold text-sm lg:text-base">{headline}</p>
            </div>
            <div className="text-gray-500 text-xs lg:text-sm">
              {`${location},`}{" "}
              {new Date(date).getDate()}
              /
              {new Date(date).getMonth() + 1}
              /
              {new Date(date).getFullYear()}
            </div>
            <p className="text-gray-500 text-sm lg:text-base">{comment}</p>
          </div>
        </>
      )}
    </>
  );
}

export default ProductReviews;
