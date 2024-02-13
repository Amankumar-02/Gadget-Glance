const navItems = [
    {title:"MOBILES & TABLETS"},{title:"TELEVISIONS"},{title:"AUDIO"},{title:"HOME APPLIANCES"},{title:"COMPUTERS"},{title:"CAMERAS"},{title:"KITCHEN APPLIANCES"},{title:"PERSONAL CARE"},{title:"ACCESSORIES"},
]

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
const HOME_URL = "v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage";

// const SEARCH_URL_All = "v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=tv%3Arelevance&page=0&size=24&pc=110059";
const SEARCH_URL_CUSTOM = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=hp%20gaming%20laptop%3Arelevance&page=0&size=24&pc="
// "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=categoryPage&categoryCode=S101210&searchQuery=%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock&page=0&size=24&pc="
// const SEARCH_URL_CUSTOM2 = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=laptop%3Arelevance&page=0&size=24&pc=110059"

// "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=hp%20gaming%20laptop%3Arelevance&page=0&size=24&pc=110059"


//OG URL
// const HOME_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage";
const PRODUCT_INFO_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productPage&pageId=productPage&productCode="
const PRODUCT_EMI_INFO_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/emi/getAllEmiDetails?productPrice=1049&productCode="

// const SEARCH_URL = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=tv%3Arelevance&page=0&size=24&pc=110059";


//Cors solve using corsproxy.io  ==> netlify & vercel supported
// const HOME_URL = "https://corsproxy.org/?https%3A%2F%2Fwww.reliancedigital.in%2Frildigitalws%2Fv2%2Frrldigital%2Fcms%2Fpagedata%3FpageId%3Dhomepage%26pageType%3DcontentPage";
// const PRODUCT_INFO_URL = "https://corsproxy.org/?https%3A%2F%2Fwww.reliancedigital.in%2Frildigitalws%2Fv2%2Frrldigital%2Fcms%2Fpagedata%3FpageType%3DproductPage%26pageId%3DproductPage%26productCode%3D"
// const PRODUCT_EMI_INFO_URL = "https://corsproxy.org/?https%3A%2F%2Fwww.reliancedigital.in%2Frildigitalws%2Fv2%2Frrldigital%2Femi%2FgetAllEmiDetails%3FproductPrice%3D1049%26productCode%3D"

// const SEARCH_URL = "https://corsproxy.org/?https%3A%2F%2Fwww.reliancedigital.in%2Frildigitalws%2Fv2%2Frrldigital%2Fcms%2Fpagedata%3FpageType%3DproductSearchPage%26q%3Dtv%253Arelevance%26page%3D0%26size%3D24%26pc%3D110059";


export {navItems, footerItems, IMG_URL, HOME_URL, SEARCH_URL_CUSTOM, PRODUCT_INFO_URL, PRODUCT_EMI_INFO_URL};