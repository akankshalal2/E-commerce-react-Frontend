import React from 'react'
import { BsCreditCard } from "react-icons/bs";
import { TbBuildingStore } from "react-icons/tb";
// import { BiSolidOffer } from "react-icons/bi";

function Ads() {
  return (
   <div className='pt-16 px-8 flex justify-between'>
         <div className='border-2 w-[712px] h-80 rounded-2xl  border-gray-300 inline-flex items-center pl-8 gap-5 bg-green-50 justify-around'>
           <div className='border-gray-300 '>
              <div className='hover:text-blue-500 cursor-pointer'>
                 <span className='text-4xl font-bold  pb-3'>Smart Watch</span>
               <p className='text-2xl font-bold pb-6'>With Motion Tracking</p>
              </div>
                <p className='text-lg text-gray-600  pb-8'>Habitasse platea dictumst quisque sagittis purus sit volutpat.</p>
                <p className='underline text-md font-semibold hover:text-blue-500 cursor-pointer'>Start From - $290 </p>
          </div>

          <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/home1-Imagebox-01.png" 
          alt=""
          className='h-72 motion-safe:hover:scale-110' />
         </div>

         <div className='border-2 w-[712px] h-80 rounded-2xl  border-gray-300 inline-flex items-center justify-around pl-8 pr-6 gap-5 bg-pink-50 '>
           <div className='border-gray-300 '>
              <div className='hover:text-blue-500 cursor-pointer '>
                 <span className='text-4xl font-bold pb-3'>Mac Book</span>
               <p className='text-2xl font-bold pb-6'>Audio Supported</p>
              </div>
                <p className='text-lg text-gray-600  pb-8'>Lobortis scelerisque fermentum dui odio ut enim faucibus ornare. </p>
                <p className='underline text-md font-semibold hover:text-blue-500 cursor-pointer '>Start From - $375 </p>
          </div>

          <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/home1-Imagebox-2.png" 
          alt=""
          className='h-72 motion-safe:hover:scale-110' />
         </div>
   
    
       </div>
  )
}

export default Ads
