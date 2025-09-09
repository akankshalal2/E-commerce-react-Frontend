import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

function Footer() {
  return (
    <div className='bg-[#1f1f1f] !w-full h-[900px]   text-white flex pt-10 my-10'>
     <div className='flex pt-10 my-10'>
         <div className='pt-16 pl-14 w-1/3'>
        <img 
        src='https://elektrix.wpengine.com/wp-content/themes/elektrix/assets/images/light-logo.svg'
        className='h-10'>
        </img>
        <p className='text-lg font-semibold pt-8'>Ut eleifend mattis ligula, porta finibus tincidunt urna gravida at. Aenean maecenas vehiculles mattis arcu non mattis Integer</p>
      <p className='text-2xl pt-8 font-semibold'>Follow Us On Social Media</p>
     <ul className='text-blue-500 flex gap-4 text-2xl pt-6'>
        <li><button onClick={() => window.open("https://www.instagram.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaInstagram/></button></li>
        <li><button onClick={() => window.open("https://www.threads.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><BsThreads/></button></li>
        <li><button onClick={() => window.open("https://www.facebook.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaSquareFacebook/></button></li>
        <li><button onClick={() => window.open("https://www.meta.com/in/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaMeta/></button></li>
        <li><button onClick={() => window.open("https://x.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaXTwitter/></button></li>
     </ul>
     <p className='text-2xl pt-8 font-semibold'>Download Our App</p>
     <div className='flex  gap-3 pt-6 '>
       <button onClick={() => window.open("https://play.google.com/store/apps")}> <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Google-Play.png" alt="" className='rounded-full h-14'/></button>
        <button onClick={() => window.open("https://www.apple.com/in/app-store/")}><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/App-Store.png" alt="" className='rounded-full h-14'/></button>
     </div>
      </div>

     <div className='inline-flex'>
         <div className=' bg-[#373737] w-[440px] h-56 mt-16 ml-11 rounded-3xl inline-flex'>
       <div className=' pt-16'>
        <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Footer-Info-Image.png" alt="" className='h-28 w-72 '/>
       </div>
       <div className='pt-6 '>
        <p className='text-2xl font-semibold'>Want To Repair Gadget ? </p>
        <p className='text-lg pt-4 pb-4 '>Donec sit amet turpis tincidunt eros, nam massa leo porta maecenas reque.</p>
        <button><span className=' underline font-semibold text-lg'>Contact Us</span></button>
       </div>
      </div>

      <div className='pt-7 pl-8'>
        <p className='text-2xl pt-8 font-semibold'>Stay On Top Of The Latest Trends</p>
         <div className="flex flex-col items-start gap-3  py-6 rounded-lg">
      {/* Input and Button */}
      <div className="flex rounded-full overflow-hidden border border-blue-500">
        <input
          type="email"
          placeholder="Enter Your Mail Id"
          className="px-6 py-4 w-72 text-white bg-[#383838] placeholder-gray-400 focus:bg-transparent  transition"
        />
        <button className="bg-blue-500 text-white px-8 font-semibold text-xl hover:bg-white hover:text-black transition  ">
          Submit
        </button>
      </div>

      {/* Checkbox */}
      <label className="flex items-center gap-2 text-lg">
        <input type="checkbox" className="accent-blue-500 " />
        I agree with the terms &amp; conditions
      </label>
    </div>
      </div>
     </div>
     </div>

     <div className='pl-[560px] pt-5'>
        <h1 className='text-2xl'>Pages</h1>
        <ul className='text-[#bfbfbf] space-y-3 pt-9'>
            <li className='cursor-pointer hover:text-white'>Company Overview</li>
            <li className='cursor-pointer hover:text-white'>Mission And Values</li>
            <li className='cursor-pointer hover:text-white'>Case Studies</li>
            <li className='cursor-pointer hover:text-white'>HelpCenter</li>
            <li className='cursor-pointer hover:text-white'>Contact Us</li>
        </ul>
     </div>
    </div>
  )
}

export default Footer
