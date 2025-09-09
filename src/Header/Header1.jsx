import React from 'react'
import { PiHandWavingFill } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { PiMapPinLine } from "react-icons/pi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header1() {
    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
   <div className='bg-blue-500 w-full h-12 top-0 inline-flex justify-between items-center px-10 text-base'>
    {/* <div className=' inline-block justify-between items-center max-w-screen-xl'> */}
     <div className='flex items-center space-x-2'>
         <PiHandWavingFill className='text-2xl text-yellow-300'/>
         <span className='text-white'>Welcome To The World Wide Of Smart Electronics</span>
     </div>
     <div className="text-white w-[28rem] text-center -ml-[67px]">
        {/* <p>slider......</p> */}
      <Slider {...settings}>
        <div>
          <h3>0% Interest Financing For Members</h3>
        </div>
        <div>
          <h3>Exclusive Online-Only Offers 50% Off</h3>
        </div>
        <div>
          <h3>Free Shipping On All Orders Over $100</h3>
        </div>
        <div>
          <h3>Free Shipping On All Orders Over $150</h3>
        </div>
        <div>
          <h3>20% Discounts On Popular Electronic Items</h3>
        </div>

      </Slider>
    </div>
    <div className='text-white inline-flex  justify-between'>
        <div className='flex items-center space-x-2 pr-3'>
            <TfiHeadphoneAlt className='text-xl text-white'/>
            <span className='text-white'>+91 9004728301</span>
        </div>
        |
        <div className='flex items-center space-x-2 pl-3'>
            <PiMapPinLine className='text-xl text-white'/>
            <span className='text-white'>Store Location</span>
        </div>
    </div>
  {/* </div> */}
   </div>
  )
}

export default Header1
