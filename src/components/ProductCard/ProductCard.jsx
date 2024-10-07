import { IMG_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

function ProductCard({ items }) {
  const {
    teaserType,
    imageUrl,
    name,
    sellingPrice,
    mrp,
    discount,
    hasPP,
    skuId,
  } = items;
  return (
    <>
      <Link to={"/productInfo/" + skuId}>
        <div className="productItemHover relative lg:py-4 px-4 lg:px-8">
          {!teaserType ? null : (
            <div className="absolute top-0 left-0 text-[7px] lg:text-[10px] text-white bg-[#007FAD] font-semibold px-2 py-1 z-10 rounded-tl-lg rounded-br-lg w-[60%] lg:w-[60%] overflow-hidden">
              {teaserType.replaceAll("_", " ")}
            </div>
          )}
          <div className="productImg">
            <img
              src={IMG_URL + imageUrl}
              alt=""
              className="w-full object-cover h-[150px] lg:h-[200px]"
            />
          </div>
          <h2 className="productTitle text-[#003380] text-xs lg:text-sm font-semibold py-4 lg:py-6 text-left h-[48px] lg:h-[68px] overflow-hidden">
            {name}
          </h2>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-xs lg:text-sm text-gray-500">
              Deal Price:{" "}
              <span className="text-black font-bold">₹{sellingPrice}.00</span>
            </p>
            <p className="text-xs lg:text-sm text-gray-500">
              M.R.P: <span className="line-through">₹{mrp}.00</span>
            </p>
            <p className="text-xs lg:text-sm text-gray-500">
              You Save: {discount}
            </p>
            {hasPP ? (
                <p className="text-green-600 text-[10px] lg:text-xs font-semibold">
                OFFERS AVAILABLE
                </p>
            ) : null}
          </div>
        </div>
      </Link>
    </>
  );
}

export default ProductCard;
