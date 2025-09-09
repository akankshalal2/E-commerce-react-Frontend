import React from 'react'
 import Slider from "react-slick";
 import { LiaLongArrowAltLeftSolid } from "react-icons/lia";
 import { LiaLongArrowAltRightSolid } from "react-icons/lia";
//  import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({onClick}) => {
  return (
    <div
    className='absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 text-2xl flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:bg-blue-500 hover:text-white'
      onClick={onClick}>
     < LiaLongArrowAltRightSolid/>
    </div>
  )
}

const PrevArrow = ({onClick}) => {
  return (
    <div
    className='absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 text-2xl flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer hover:bg-blue-500 hover:text-white'
      onClick={onClick}>
     < LiaLongArrowAltLeftSolid/>
    </div>
  )
}


function Slider1() {
     var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
     nextArrow: <NextArrow />,
     prevArrow: <PrevArrow />,
    //  adaptiveHeight: true
    
  };
  return (
    <div className=" bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#efd8f4] via-[#d4abdc] to-[#ea5656] rounded-3xl mt-5 !max-w-full mx-4 h-[560px] ">
      <Slider {...settings}>
       

        <div className=" !inline-flex  pl-36">
          <div className="w-1/2 pt-36">
            <p className="bg-transparent w-28 border-blue-500 border-2 text-blue-500 rounded-3xl font-semibold flex justify-center items-center  text-xs h-6">
              AI FEATURED
            </p>
            <p className="text-6xl font-bold  pt-5 pb-3">5G Pro +</p>
            <p className="text-5xl font-semibold pb-5">8GB RAM, 256GB</p>
            <p className="text-gray-600 text-lg pb-5">
              Ultricies mi quis hendrerit dolor magna eget est lorem. Odio
              pellentesque diam volutpat bibendum enim commodo sed.{" "}
            </p>
            <button className="bg-blue-500  hover:bg-gray-700 rounded-full text-lg text-white flex justify-center items-center w-44 h-12 ">
              View Collections
            </button>
          </div>

          <div className="inline-flex">
            <div className="bg-gray-200 absolute w-[672px] h-32 rounded-s-full mt-64 flex items-center">
              <div className=" bg-blue-500 text-white text-2xl rounded-full flex text-center justify-center ml-5 items-center w-24 h-24">
                From $355
              </div>
            </div>
            <div className="relative h-[560px] pt-10 pl-40 z-50">
              <img
                src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Slider-1-Mobile-back-Case-1.png"
                alt="Background"
                className="w-full h-full object-cover rounded-xl"
              />

              <img
                src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Slider-1-Mobile-Front-Case-1.png"
                alt="Overlay"
                className="absolute top-48 h-full pl-24"
              />
            </div>
          </div>
        </div>

        <div className=" !inline-flex  pl-36">
          <div className="w-1/2 pt-36">
            <p className="bg-transparent w-28 border-blue-500 border-2 text-blue-500 rounded-3xl font-semibold flex justify-center items-center  text-xs">
              AI FEATURED
            </p>
            <p className="text-6xl font-bold  pt-5 pb-3">5G Pro +</p>
            <p className="text-5xl font-semibold pb-5">8GB RAM, 256GB</p>
            <p className="text-gray-600 text-lg pb-5">
              Ultricies mi quis hendrerit dolor magna eget est lorem. Odio
              pellentesque diam volutpat bibendum enim commodo sed.
            </p>
            <button className="bg-blue-500  hover:bg-gray-700 rounded-full text-lg text-white flex justify-center items-center w-44 h-12 ">
              View Collections
            </button>
          </div>

          <div className="inline-flex">
            <div className="bg-gray-200 absolute w-[672px] h-32 rounded-s-full mt-64 flex items-center">
              <div className=" bg-blue-500 text-white text-2xl rounded-full flex text-center justify-center ml-5 items-center w-24 h-24">
                From $355
              </div>
            </div>
            <div className="relative h-[560px] pt-10 pl-40 z-50">
              <img
                src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/Slider-1-Mobile-back-Case-2.png"
                alt="Background"
                className="w-full h-full object-cover rounded-xl"
              />

              <img
                src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/Slider-1-Mobile-Front-Case-2.png"
                alt="Overlay"
                className="absolute top-48 h-full pl-24"
              />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Slider1
