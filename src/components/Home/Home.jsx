import React from 'react'
import Slides from '../Slides/Slides'
import ProductSlider from '../ProductSlider/ProductSlider';
import GreatDeals from '../GreatDeals/GreatDeals';

function Home({data}) {
    const fetchData1 = data?.data?.Section5[0];
    const fetchData2 = data?.data?.Section12;
    const fetchData3 = data?.data?.Section2[0];
    // console.log(fetchData3)
    // console.log(data);
  return (
    <>
    <Slides data={data}/>
    <ProductSlider data={fetchData1}/>
    <GreatDeals data={fetchData3}/>
    {!fetchData2?(null):(fetchData2.map((item, index)=>(
      <ProductSlider key={index} data={item}/>
    )))}
    </>
  )
}

export default Home