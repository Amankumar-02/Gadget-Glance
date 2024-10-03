import { IMG_URL } from "../../utils/constant";
import { Link } from "react-router-dom";

function GreatDeals({ greatDealsData }) {
  const { name, data } = greatDealsData;
  return (
    <>
      {!greatDealsData ? null : (
        <>
          <div className="py-4 lg:py-8 px-2 lg:px-10">
            <h1 className="text-base lg:text-lg font-semibold">{name}</h1>
            <div className="flex flex-wrap py-2 lg:py-6">
              {data.map(({ url, imageUrl, name }, index) => (
                <div
                  key={index}
                  className="w-[50%] sm:w-[33.33%] lg:w-[25%] scale-[0.95] hover:scale-[1.02] transition-all"
                >
                  <Link
                    to={`/search/${name
                      .toLowerCase()
                      .replaceAll("%", " ")
                      .replaceAll("|", " ")
                      .replaceAll("/", " ")
                      .replaceAll("&", "and")}`}
                  >
                    <img src={IMG_URL + imageUrl} alt="" className="w-full" />
                  </Link>
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
