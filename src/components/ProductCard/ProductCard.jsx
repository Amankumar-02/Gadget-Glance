import { IMG_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

function ProductCard({ items }) {
  const {
    teaser_tag,
    medias,
    name = "name",
    price = Math.floor(Math.random() * 10000),
    discount,
    sellable,
    slug,
    item_code,
  } = items;
  return (
    <>
      <Link to={"/productInfo/" + slug + "?item_code=" + item_code}>
        <div className="productItemHover relative lg:py-4 px-4 lg:px-8">
          {!teaser_tag? null : (
            <div className="absolute top-0 left-0 text-[7px] lg:text-[10px] text-start text-white bg-[#007FAD] px-2 py-1 z-10 rounded-tl-lg rounded-br-lg w-auto lg:w-auto overflow-hidden">
              {teaser_tag.replaceAll("_", " ")}
            </div>
          )}
          <div className="productImg">
            <img
              src={medias[0].url}
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
              <span className="text-black font-bold">₹{price?.effective?.min}.00</span>
            </p>
            <p className="text-xs lg:text-sm text-gray-500">
              M.R.P: <span className="line-through">₹{price?.marked?.max}.00</span>
            </p>
            {discount ? (
              <p className="text-[10px] lg:text-xs text-orange-500">
              You Save: {discount}
            </p>
            ) : null}
            {sellable ? (
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
