function ProductSpecifications({ productSpecsData }) {
  // const {name, features} = productSpecsData;
  return (
    <>
      <div className="w-full lg:w-[48%] flex flex-col gap-2 mt-4">
        <h4 className="text-gray-600 text-sm lg:text-base font-bold">
          {productSpecsData?.title}
        </h4>

        {productSpecsData?.details.map((item, index) => (
          <div key={index} className="flex gap-4">
            {/* Features Column */}
            <div className="w-[30%] flex flex-col gap-1">
              <p
                key={index}
                className="text-gray-600 text-sm lg:text-base overflow-hidden break-words"
                dangerouslySetInnerHTML={{
                  __html: item?.key
                    .replaceAll(
                      "reliancedigital@ril.com",
                      "gadgetglance@xyz.com"
                    )
                    .replaceAll("Reliance Digital", "Gadget Glance")
                    .replaceAll("Reliance Retail Ltd.", "Gadget Retail Ltd.")
                    .replaceAll("Reliance", "Gadget")
                    .replaceAll("Digital", "Glance"),
                }}
              ></p>
            </div>
            {/* Feature Values Column */}
            <div className="w-[70%] flex flex-col gap-1">
              <p
                key={index}
                className="w-[90%] text-gray-600 text-sm lg:text-base overflow-hidden break-words"
                dangerouslySetInnerHTML={{
                  __html: item?.value
                    .replaceAll(
                      "reliancedigital@ril.com",
                      "gadgetGlance@xyz.com"
                    )
                    .replaceAll("Reliance Digital", "Gadget Glance")
                    .replaceAll("Reliance Retail Ltd.", "Gadget Retail Ltd.")
                    .replaceAll("Reliance", "Gadget")
                    .replaceAll("Digital", "Glance"),
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductSpecifications;
