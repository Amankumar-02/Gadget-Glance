import { footerItems } from "../../utils/constant";

function Footer() {
  return (
    <>
      <div>
        <div className="px-4 lg:px-14 py-4 bg-[#4D148C]">
          <div className="flex flex-wrap w-full gap-2 justify-between">
            {footerItems.map((item, index) => (
              <div
                key={index}
                className="text-white flex flex-col gap-1 lg:gap-2 w-[46%] md:w-auto my-4"
              >
                <h1 className="text-xs lg:text-base font-bold leading-4 lg:leading-none">
                  {item.title}
                </h1>
                {item.more.map((items, index) => (
                  <ul className="decoration-none" key={index}>
                    <li className="hover:text-[#ffffffb3] cursor-pointer text-[10px] lg:text-base">
                      {items}
                    </li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="text-white lg:pt-4 mt-4 lg:mt-0">
            <p className="text-lg lg:text-xl tracking-wider">Follow Us</p>
            <div className="flex gap-2 lg:gap-4 mt-2 lg:mt-4">
              <i className="ri-facebook-box-fill text-xl lg:text-3xl cursor-pointer"></i>
              <i className="ri-twitter-fill text-xl lg:text-3xl cursor-pointer"></i>
              <i className="ri-youtube-fill text-xl lg:text-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="bg-[#3e0977] py-4 text-center text-white">
          <p className="text-xs lg:text-sm">
            © 2024 Gadget Glance. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
