import React from 'react'
import { BsCreditCard } from "react-icons/bs";
import { TbBuildingStore } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

function KeyPoints() {
  return (
    <div className='pt-10 px-5 flex justify-between'>
      <div className='border-2 w-[470px] h-28 rounded-2xl  border-gray-300 inline-flex items-center px-10 gap-5 bg-white'>
       <BsCreditCard className=' text-7xl hover:text-blue-500 text-black ' />
       
       <div className='flex '>
        <div className='border-gray-300 border-l-2 pl-5 pt-2 h-20 '>
            <p className='text-xs text-gray-600 font-bold pb-2'>TRUSTED PARTNERS</p>
            <span className='text-2xl font-bold hover:text-blue-500'>Secured Payment</span>
        </div>
       </div>
      </div>

      <div className='border-2 w-[470px] h-28 rounded-2xl  border-gray-300 inline-flex items-center px-10 gap-5 bg-white'>
       <TbBuildingStore className=' text-7xl hover:text-blue-500 text-black ' />
       
       <div className='flex '>
        <div className='border-gray-300 border-l-2 pl-5 pt-2 h-20 '>
            <p className='text-xs text-gray-600 font-bold pb-2'>PURCHASE AT EASE</p>
            <span className='text-2xl font-bold hover:text-blue-500'>In-Store Pickup</span>
        </div>
       </div>
      </div>

       <div className='border-2 w-[470px] h-28 rounded-2xl  border-gray-300 inline-flex items-center px-10 gap-5 bg-white'>
       <BiSolidOffer className=' text-7xl hover:text-blue-500 text-black ' />
       
       <div className='flex '>
        <div className='border-gray-300 border-l-2 pl-5 pt-2 h-20 '>
            <p className='text-xs text-gray-600 font-bold pb-2'>SPECIALS DEALS WEEKLY</p>
            <span className='text-2xl font-bold hover:text-blue-500'>Limited Time Offers</span>
        </div>
       </div>
      </div>
    </div>
  )
}

export default KeyPoints
