import React from "react";
import { IMG_URL } from "../../utils/constant";

function BrandSection({ brandSelectionData }) {
  const brandData = brandSelectionData;
  return (
    <>
      {!brandData ? null : (
        <>
          <div className="py-4 lg:py-8 px-4 lg:px-10">
            <div className="text-center text-lg lg:text-2xl font-bold text-[#003380]">
              THE GADGET GLANCE BRAND PROMISE
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 lg:pt-4 justify-center items-center">
              {brandData.map(({ imageUrl, headline, content }, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg py-2 flex flex-col gap-2 items-center"
                >
                  {imageUrl ===
                  "/medias/service-img.png?context=bWFzdGVyfGltYWdlc3w5MTB8aW1hZ2UvcG5nfGltYWdlcy9oMDYvaGEzLzkwOTA3OTc5OTQwMTQucG5nfGJjZmJhNzM1ODdkYTQ5ODI3YzNiMzQ1ZTdlM2JjNjUwMTBjM2E3YWFjNmUxZjdmMmEyOGRjZDMxOGI4ZWE0MWY" ? (
                    <>
                      <img
                        src="https://img.icons8.com/?size=45&id=57926&format=png&color=133055"
                        alt=""
                      />
                    </>
                  ) : (
                    <>
                      <img src={IMG_URL + imageUrl} alt="" />
                    </>
                  )}
                  <div>
                    <p className="text-[#003380] font-semibold text-xs lg:text-sm text-center">
                      {headline}
                    </p>
                    <p className="text-[10px] lg:text-xs text-gray-500 text-center">
                      {content}
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
