function ProductSpecifications({ productSpecsData }) {
  // const {name, features} = productSpecsData;
  return (
    <>
      <div className="flex flex-col gap-2">
        <h4 className="text-gray-600 text-[16px] font-bold">{productSpecsData?.name}</h4>
        <div className="flex">
          <div className="w-[30%] flex flex-col gap-1">
            {productSpecsData?.features.map((item, index) => (
              <>
                <p key={index} className="text-gray-600" dangerouslySetInnerHTML={{ __html: item?.name }}>
                  {/* {item?.name} */}
                </p>
              </>
            ))}
          </div>
          <div className="w-[70%] flex flex-col gap-1">
            {productSpecsData?.features.map((item, index) => (
              <>
                <p key={index} className="text-gray-600" dangerouslySetInnerHTML={{ __html: item?.featureValues[0]?.value }}>
                  {/* {item?.featureValues[0]?.value} */}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSpecifications;
