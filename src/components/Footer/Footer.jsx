import './Footer.css';
import { footerItems } from '../../utils/constant';

function Footer() {
  return (
    <>
    <div>
    <div className='px-14 py-4 bg-[#003380]'>
        <div className='flex justify-between'>
            {footerItems.map((item, index)=>(
                <div key={index} className='text-white flex flex-col gap-2'>
                    <h1 className='font-bold'>{item.title}</h1>
                    {item.more.map((items, index)=>(
                        <ul className="decoration-none" key={index}>
                            <a href="#"><li className='hover:text-[#ffffffb3]'>{items}</li></a>
                        </ul>
                    ))}
                </div>
            ))}
        </div>
        <div className='text-white pt-4'>
                <p className='text-xl tracking-wider'>Follow Us</p>
                <div className='flex gap-4'>
                <i className="ri-facebook-box-fill text-3xl"></i>
                <i className="ri-twitter-fill text-3xl"></i>
                <i className="ri-youtube-fill text-3xl"></i>      
            </div>
        </div>
    </div>
    <div className='bg-[#0A244A] py-4 text-center text-white'>
        {/* <h2 className="underline pb-4">Disclaimer</h2>
        <p className='leading-4 text-sm pb-4 w-[80%] m-auto'>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
        <hr /> */}
        <p className='pt- text-sm'>© 2024 Gadget Glance. All Rights Reserved.</p>
    </div>
    </div>
    </>
  )
}

export default Footer