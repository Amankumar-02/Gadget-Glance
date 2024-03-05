import React from 'react';
import "./BrandSection.css";
import { IMG_URL } from '../../utils/constant';

function BrandSection({brandSelectionData}) {
    const brandData = brandSelectionData;
  return (
    <>
    {!brandData? (null): (
        <>
            <div className='py-4 lg:py-8 px-2 lg:px-10'>
                <div className='text-center text-lg lg:text-2xl font-bold text-[#003380]'>THE GADGET GLANCE BRAND PROMISE</div>
                <div className='flex gap-1 lg:gap-4 lg:pt-4'>
                    {brandData.map(({imageUrl, headline, content}, index)=>(
                        <div key={index} className='flex flex-col gap-2 items-center justify-center w-[25%] border border-gray-200 rounded-lg py-2'>
                            <div><img src={IMG_URL + imageUrl} alt="" /></div>
                            <p className='text-[#003380] font-semibold text-xs lg:text-sm text-center leading-3 lg:leading-none'>{headline}</p>
                            <p className='text-[10px] lg:text-xs text-gray-500 text-center leading-3 lg:leading-none'>{content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )}
    </>
  )
}

export default BrandSection