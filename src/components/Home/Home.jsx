import { useEffect, useState } from 'react';
import {Slides, ProductSlider, GreatDeals, BrandSection, ExploreProducts} from '../index.js';

function Home() {
  let [fetchData, setFetchData] = useState(null);
  useEffect(()=>{
    const fetchDataFromAPI = async () => {
      try {
        const res = await fetch("v2/rrldigital/cms/pagedata?pageId=homepage&pageType=contentPage");
        if(!res.ok){
          throw new Error ("Error Serving Data");
        }else{
          const data = await res.json();
          setFetchData(data);
          // console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDataFromAPI();
  }, [])

    const sliderData1 = fetchData?.data?.Section4[0]?.data;
    const fetchData1 = fetchData?.data?.Section5[0];
    const fetchData2 = fetchData?.data?.Section12;
    const fetchData3 = fetchData?.data?.Section2[0];
    // const sliderData2 = data?.data?.Section1[0]?.data;
    const sliderData3 = fetchData?.data?.Section11[0]?.data;
    const fetchData4 = fetchData?.data?.Section8;
    const brandData = fetchData?.data?.Section9[0]?.data;
    const exploreData = fetchData?.data?.Section10[0];
  return (
    <>
    <Slides data={sliderData1}/>
    <ProductSlider data={fetchData1}/>
    <GreatDeals data={fetchData3}/>
    {!fetchData2?(null):(fetchData2.map((item, index)=>(
      <ProductSlider key={index} data={item}/>
      )))}
    {/* <Slides data={sliderData2}/> */}
    {/* <div className='p-4'></div> */}
    <Slides data={sliderData3}/>
    {!fetchData4?(
      <>
      <div className='flex items-center justify-center h-[50vh] w-full'>
        <img src="https://i.pinimg.com/originals/c8/94/63/c894635359b2e0ffa0b1f15941ce43ae.gif" alt="" className='w-full h-full object-contain'/>
      </div>
      </>
    ):(fetchData4.map((item, index)=>(
      <ProductSlider key={index} data={item}/>
      )))}
      <ExploreProducts data={exploreData}/>
      <BrandSection data={brandData}/>
      
    </>
  )
}

export default Home