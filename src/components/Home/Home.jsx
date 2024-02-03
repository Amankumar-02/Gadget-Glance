import React from 'react';
import {Slides, ProductSlider, GreatDeals, BrandSection, ExploreProducts} from '../index.js'

function Home({data}) {
    const sliderData1 = data?.data?.Section4[0]?.data;
    const fetchData1 = data?.data?.Section5[0];
    const fetchData2 = data?.data?.Section12;
    const fetchData3 = data?.data?.Section2[0];
    const sliderData2 = data?.data?.Section1[0]?.data;
    const sliderData3 = data?.data?.Section11[0]?.data;
    const fetchData4 = data?.data?.Section8;
    const brandData = data?.data?.Section9[0]?.data;
  return (
    <>
    <Slides data={sliderData1}/>
    <ProductSlider data={fetchData1}/>
    <GreatDeals data={fetchData3}/>
    {!fetchData2?(null):(fetchData2.map((item, index)=>(
      <ProductSlider key={index} data={item}/>
      )))}
    <Slides data={sliderData2}/>
    <div className='p-4'></div>
    <Slides data={sliderData3}/>
    {!fetchData4?(null):(fetchData4.map((item, index)=>(
      <ProductSlider key={index} data={item}/>
      )))}
      <BrandSection data={brandData}/>
      <ExploreProducts/>
      
    </>
  )
}

export default Home