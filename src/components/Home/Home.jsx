import React from 'react'
import Slides from '../Slides/Slides'
import ProductSlider from '../ProductSlider/ProductSlider';

function Home({data}) {
    const fetchData1 = data?.data?.Section5[0];
    const fetchData2 = data?.data?.Section12;
  return (
    <>
    <Slides data={data}/>
    <ProductSlider data={fetchData1}/>
    {!fetchData2?(null):(fetchData2.map((item, index)=>(
      <ProductSlider key={index} data={item}/>
    )))}
    </>
  )
}

export default Home