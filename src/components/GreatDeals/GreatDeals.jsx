import React from "react";
import "./GreatDeals.css";

function GreatDeals({ data }) {
    const dealsData = data;
    const dealsDataItems = data?.data;
    // console.log(dealsData);
    // console.log(dealsDataItems);
  return (
    <>
      {!dealsData ? null : (
        <>
          <div className="py-8 px-10">
            <div>
                <h1 className="me-4 font-semibold">{data?.name}</h1>
            </div>
            <div className="flex flex-wrap py-6">
            {dealsDataItems.map((item, index) => (
              <div key={index} className="w-[25%] scale-[0.95] hover:scale-[1.02] transition">
                <a href={item?.url} target="_blank">
                <img
                  src={`https://www.reliancedigital.in/${item?.imageUrl}`}
                  alt=""
                  className=""
                />
                </a>
              </div>
            ))}
          </div>
          </div>
        </>
      )}
    </>
  );
}

export default GreatDeals;
