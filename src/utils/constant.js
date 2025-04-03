const navItems = [
    {title:"MOBILES & TABLETS"},{title:"TELEVISIONS"},{title:"AUDIO"},{title:"HOME APPLIANCES"},{title:"COMPUTERS"},{title:"CAMERAS"},{title:"KITCHEN APPLIANCES"},{title:"PERSONAL CARE"},{title:"ACCESSORIES"},
]

// const banner1 = [
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741686479001.jpeg", url: `Now India Stays Cool`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742474854557.jpeg", url: `Vivo T4X`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742274801898.jpeg", url: `Entertainment Feast`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740550320745.jpeg", url: `Microwave Oven`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742194862097.jpeg", url: `Oppo K12X`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741781573372.jpeg", url: `Mid Night Deals`},
// ];

// const banner1_2 = [
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740547880237.jpeg", url: `AirPods`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741197212946.jpeg", url: `Digital Gaming Day`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742534018946.jpeg", url: `Kitchen Feast`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742806293229.jpeg", url: `Realme P1 Speed`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742371198548.jpeg", url: `New Launch AI Powered Laptops`},
// ];

// const banner2 = [
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740996784756.jpeg", url: `hsbc idfc`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740996818726.jpeg", url: `icici`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742050429003.jpeg", url: `axis`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742448360959.jpeg", url: `federal`},
// ];

// const greatDeals = [
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740660024430.jpeg", url: `ipad`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740660012439.jpeg", url: `refrigerator`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659884591.jpeg", url: `headphones`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659977519.jpeg", url: `smartphone`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659989611.jpeg", url: `smartwatch`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741343481982.jpeg", url: `mixer blender`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740659950387.jpeg", url: `power bank`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1740660001600.jpeg", url: `home theatre`},
// ];

// const banner3 = [
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742575097814.jpeg", url: `Oppo F29`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742405357231.jpeg", url: `Google Pixel 9a`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742801000596.jpeg", url: `Galaxy Book 5 Pro`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742884784680.jpeg", url: `Ipad Air`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742887546516.jpeg", url: `JioDive`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741756723151.jpeg", url: `MacBook Air`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1741763244613.jpeg", url: `FireBolt`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742292897409.jpeg", url: `Microsoft Surface`},
// ];

// const brandPromises = [{img:"https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742576357871.jpeg", url: "THE GADGET GLANCE BRAND PROMISE"}];

// const exploreProductsRange = [
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/theme-image-1742896316670.png", url: `Google Pixel Store`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/TV-180x180-15-01-2019.png", url: `Televisions`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Laptop-180x180-15-01-2019.png", url: `Laptops`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Speaker-Headset-180x180-15-01-2019.png", url: `Headsets`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Watch-180x180-27-02-2020.png", url: `Smartwatches`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Mixer-Explore.png", url: `Mixer Grinders`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-Speakers-Soundbars.png", url: `Soundbars`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Microwave-Explore-HP-Section-Icon.png", url: `Microwave Ovens`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Washing-Machine-180x180-15-01-2019.png", url: `Wasching Machines`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Camera-180x180-15-01-2019.png", url: `Cameras`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-AC.png", url: `Air Conditioners`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/Explore-Our-Range-of-Products-Ref.png", url: `Refrigerators`},
//   {img: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/company/1/applications/645a057875d8c4882b096f7e/theme/pictures/free/original/iphone-pro-11-01.png", url: `Smartphones`},
// ];

const footerItems = [
    {
      title: "PRODUCT CATEGORIES",
      more: [
        "Smartphones",
        "Laptops",
      //   "DSLR Cameras",
        "Televisions",
        "Air Conditioners",
        "Refrigerators",
        "Kitchen Appliances",
        "Accessories",
        "Personal Care & Grooming",
      ],
    },
    {
      title: "RESOURCE CENTER",
      more: [
        "Product Reviews",
        "Buying Guides",
      //   "How Tos",
      //   "Featured Stories",
        "Events & Happenings",
        "Nearest Store",
      ],
    },
    {
      title: "SITE INFO",
      more: [
        "About Gadget Glance",
        "ResQ Services",
      //   "Site Map",
        "Gift Cards",
        "Corporate Enquires",
        "Contact Us",
      ],
    },
    {
      title: "POLICIES",
      more: [
        "Terms of Use",
        "FAQs",
        "Cancellation and Return Policy",
        "Pricing and Payments Policy",
        "Shipping and Delivery Ploicy",
        "Privacy Policy",
      //   "E-waste Recycling Policy",
        "EMI and Additional Cashback T&C",
      //   "GadgetOne Loyalty Program T&C",
        "Caution Notice",
      ],
    },
];

const IMG_URL = "https://www.reliancedigital.in/";

//localHost cors
// const HOME_URL = "v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage";


//OG URL
// const HOME_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage";
// const HOMEITEMS_URL = "http://localhost:3000/api/gadget-glance/homeItems";
// const HOMEBANNER_URL = "http://localhost:3000/api/gadget-glance/homeBanners";
const HOMEITEMS_URL = "https://gadget-glance.vercel.app/api/gadget-glance/homeItems";
const HOMEBANNER_URL = "https://gadget-glance.vercel.app/api/gadget-glance/homeBanners";
// const HOME_URL = "https://food-explorer-server-prime.vercel.app/api/gadget-glance/home";

// const SEARCH_URL_CUSTOM = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=hp%20gaming%20laptop%3Arelevance&page=0&size=24&pc=110059"
// const SEARCH_URL_CUSTOM = "http://localhost:3000/api/gadget-glance/search"
const SEARCH_URL_CUSTOM = "https://food-explorer-server-prime.vercel.app/api/gadget-glance/search"

// const PRODUCT_INFO_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productPage&pageId=productPage&productCode="
// const PRODUCT_INFO_URL = "http://localhost:3000/api/gadget-glance/productInfo"
const PRODUCT_INFO_URL = "https://gadget-glance.vercel.app/api/gadget-glance/productInfo"
// const PRODUCT_INFO_URL = "https://food-explorer-server-prime.vercel.app/api/gadget-glance/productInfo"

// const PRODUCT_EMI_INFO_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/emi/getAllEmiDetails?productPrice=1049&productCode="
// const PRODUCT_EMI_INFO_URL = "http://localhost:3000/api/gadget-glance/productEMI"
// const PRODUCT_EMI_INFO_URL = "https://food-explorer-server-prime.vercel.app/api/gadget-glance/productEMI"

const SERVER_APIKEY = '12233344445678';

// export {navItems, banner1, banner1_2, banner2, greatDeals, banner3, brandPromises, exploreProductsRange, footerItems, IMG_URL, HOMEITEMS_URL, HOMEBANNER_URL, SEARCH_URL_CUSTOM, PRODUCT_INFO_URL, PRODUCT_EMI_INFO_URL, SERVER_APIKEY};
export {navItems, footerItems, IMG_URL, HOMEITEMS_URL, HOMEBANNER_URL, SEARCH_URL_CUSTOM, PRODUCT_INFO_URL, SERVER_APIKEY};