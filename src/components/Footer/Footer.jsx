import "./Footer.css";
import { footerItems } from "../../utils/constant";

function Footer() {
  return (
    <>
      <div>
        <div className="px-14 py-4 bg-[#003380]">
          <div className="flex justify-between">
            {footerItems.map((item, index) => (
              <div key={index} className="text-white flex flex-col gap-2">
                <h1 className="font-bold">{item.title}</h1>
                {item.more.map((items, index) => (
                  <ul className="decoration-none" key={index}>
                    {/* <a href="#"> */}
                      <li className="hover:text-[#ffffffb3] cursor-pointer">{items}</li>
                    {/* </a> */}
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="text-white pt-4">
            <p className="text-xl tracking-wider">Follow Us</p>
            <div className="flex gap-4">
              <i className="ri-facebook-box-fill text-3xl cursor-pointer"></i>
              <i className="ri-twitter-fill text-3xl cursor-pointer"></i>
              <i className="ri-youtube-fill text-3xl cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="bg-[#0A244A] py-4 text-center text-white">
          <p className="pt- text-sm">
            © 2024 Gadget Glance. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
