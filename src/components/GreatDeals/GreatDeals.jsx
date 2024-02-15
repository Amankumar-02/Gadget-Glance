import { IMG_URL } from "../../utils/constant";
import "./GreatDeals.css";
import { Link } from "react-router-dom";

function GreatDeals({ greatDealsData }) {
    const {name, data} = greatDealsData;
  return (
    <>
      {!greatDealsData ? null : (
        <>
          <div className="py-8 px-10">
            <div>
                <h1 className="me-4 font-semibold">{name}</h1>
            </div>
            <div className="flex flex-wrap py-6">
            {data.map(({url, imageUrl}, index) => (
              <div key={index} className="w-[25%] scale-[0.95] hover:scale-[1.02] transition">
                {/* <a href={url} target="_blank"> */}
                <Link to={`/search/${url.split('campaign=')[1].split('&')[0].replaceAll("_", " ").replaceAll("&", "and")}`}>
                <img
                  src={IMG_URL + imageUrl}
                  alt=""
                  className=""
                  />
                </Link>
                {/* </a> */}
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
