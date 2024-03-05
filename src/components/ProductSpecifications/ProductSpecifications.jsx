function ProductSpecifications({ productSpecsData }) {
  // const {name, features} = productSpecsData;
  return (
    <>
      <div className="flex flex-col gap-2 mt-4">
        <h4 className="text-gray-600 text-sm lg:text-base font-bold">{productSpecsData?.name}</h4>
        <div className="flex gap-2">
          <div className="w-[30%] flex flex-col gap-1">
            {productSpecsData?.features.map((item, index) => (
                <p key={index} className="text-gray-600 text-sm lg:text-base overflow-hidden" dangerouslySetInnerHTML={{ __html: item?.name.replaceAll("reliancedigital@ril.com", "gadgetglance@xyz.com").replaceAll("Reliance Digital", "Gadget Glance").replaceAll("Reliance Retail Ltd.", "Gadget Retail Ltd.").replaceAll("Reliance", "Gadget").replaceAll("Digital", "Glance") }}>
                </p>
            ))}
          </div>
          <div className="w-[70%] flex flex-col gap-1">
            {productSpecsData?.features.map((item, index) => (
                <p key={index} className="text-gray-600 text-sm lg:text-base overflow-hidden" dangerouslySetInnerHTML={{ __html: item?.featureValues[0]?.value.replaceAll("reliancedigital@ril.com", "gadgetGlance@xyz.com").replaceAll("Reliance Digital", "Gadget Glance").replaceAll("Reliance Retail Ltd.", "Gadget Retail Ltd.").replaceAll("Reliance", "Gadget").replaceAll("Digital", "Glance") }}>
                </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSpecifications;
