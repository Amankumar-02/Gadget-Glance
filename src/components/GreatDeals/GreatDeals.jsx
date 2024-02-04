import { IMG_URL } from "../../utils/constant";
import "./GreatDeals.css";

function GreatDeals({ greatDealsData }) {
    const {name, data} = greatDealsData;
  return (
    <>
      {/* {!dealsData ? null : (
        <> */}
          <div className="py-8 px-10">
            <div>
                <h1 className="me-4 font-semibold">{name}</h1>
            </div>
            <div className="flex flex-wrap py-6">
            {data.map(({url, imageUrl}, index) => (
              <div key={index} className="w-[25%] scale-[0.95] hover:scale-[1.02] transition">
                <a href={url} target="_blank">
                <img
                  src={IMG_URL + imageUrl}
                  alt=""
                  className=""
                />
                </a>
              </div>
            ))}
          </div>
          </div>
        {/* </>
      )} */}
    </>
  );
}

export default GreatDeals;
