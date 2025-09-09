import React from 'react'
import Slider from "react-slick";
import Apple from "../assets/apple.png";
import Boat from "../assets/boat.jpg";
import MI from "../assets/mi.jpg";
import Nykaa from "../assets/nykaa.jpg";
import Samsung from "../assets/samsung.png";
import Realme from "../assets/realme.jpg"

function Brands() {
    var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <div className='bg-white rounded-3xl !max-w-full h-[415px] border-2 pt-10 mx-10 my-10 text-5xl font-bold'>
       <div className='flex justify-center items-center '>
         <p className="bg-transparent w-52 border-blue-500 border-2 text-blue-500 rounded-3xl font-semibold flex justify-center items-center text-sm h-10">
        WELCOME TO ELECTRIX
      </p>
       </div>
        <p className=" text-black text-5xl font-semibold flex justify-center items-center pt-7">
              Our Premium Brands
            </p>

             <div className="w-full h-[1px] bg-gray-300 mt-16"></div>
          
        <div className='content-center'>
              <Slider {...settings}>    
        <div className='group cursor-pointer  border-gray-300  border-r-2 w-1/4 h-48'>
          <img src= {Boat} alt="" className='h-32' />
        </div>
        <div className='group cursor-pointer  border-gray-300  border-r-2 w-1/4 h-48'>
          <img src={MI} alt="" className='h-32' />
        </div>
        <div className='group cursor-pointer  border-gray-300  border-r-2 w-1/4 h-48'>
          <img src={Boat} alt="" className='h-32'/>
        </div>
        <div className='group cursor-pointer  border-gray-300  border-r-2 w-1/4 h-48'>
          <img src= {Samsung} alt="" className='pt-6'/>
        </div>
        <div className='group cursor-pointer  border-gray-300  border-r-2 w-1/4 h-48'>
          <img src= {Realme} alt="" />
        </div>
        <div className='group cursor-pointer  border-gray-300  border-r-2 w-1/4 h-48'>
            <img src= {Nykaa} alt="" className='h-40'/>
        </div>
      </Slider>
        </div>
    </div>
  )
}

export default Brands
