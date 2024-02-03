import React from 'react';
import "./BrandSection.css";

function BrandSection({data}) {
    const brandData = data;
  return (
    <>
    {!brandData? (null): (
        <>
            <div className='py-8 px-10'>
                <div className='text-center text-2xl font-bold text-[#003380]'>THE GADGET GLANCE BRAND PROMISE</div>
                <div className='flex gap-4 pt-4'>
                    {brandData.map((item, index)=>(
                        <div key={index} className='flex flex-col items-center justify-center w-[25%] border border-gray-200 rounded-lg py-2'>
                            <div><img src={`https://www.reliancedigital.in/${item?.imageUrl}`} alt="" /></div>
                            <p className='text-[#003380] font-semibold text-sm'>{item?.headline}</p>
                            <p className='text-xs text-gray-500'>{item?.content}</p>
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