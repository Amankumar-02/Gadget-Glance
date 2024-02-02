let laptopUrlOld = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=categoryPage&categoryCode=S101210&searchQuery=%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock&page=0&size=24&pc=110059";
let laptopUrlOldPage2 = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=categoryPage&categoryCode=S101210&searchQuery=%3Arelevance%3Aavailability%3AExclude%20out%20of%20Stock&page=1&size=24&pc=110059";
let homePage = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage";
let smartPhoneUrl = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=categoryPage&categoryCode=S101711&searchQuery=%3Arelevance&page=0&size=24&pc=110059";
let tvUrl = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=categoryPage&categoryCode=S101812&searchQuery=%3Arelevance&page=0&size=24&pc=110059";
let laptopUrl = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=categoryPage&categoryCode=S101210&searchQuery=%3Arelevance&page=0&size=24&pc=110059";
let masterSearch = "https://www.reliancedigital.in/rildigitalws/v2/rrldigital/cms/pagedata?pageType=productSearchPage&q=tv%3Arelevance&page=0&size=24&pc=110059";
async function myFunc(){
    let res = await fetch(masterSearch);
    let data = await res.json();
    console.log(data)
}
myFunc();


