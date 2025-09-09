import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { BsThreads } from "react-icons/bs";
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsCreditCard } from "react-icons/bs";
import { TbGiftCard } from "react-icons/tb";

function Footer1() {
  return (
   <div className='bg-[#1f1f1f] !w-full h-[840px]   text-white'>
     <div className=" flex pt-10 my-10">
      <div className="pt-16 pl-14 w-3/5">
        <div>
          <img
            src="https://elektrix.wpengine.com/wp-content/themes/elektrix/assets/images/light-logo.svg"
            className="h-10"
          ></img>
          <p className="text-lg font-semibold pt-8">
            Ut eleifend mattis ligula, porta finibus tincidunt urna gravida at.
            Aenean maecenas vehiculles mattis arcu non mattis Integer
          </p>
        </div>
        <div>
             <p className='text-2xl pt-8 font-semibold'>Follow Us On Social Media</p>
                 <ul className='text-blue-500 flex gap-4 text-2xl pt-6'>
                    <li><button onClick={() => window.open("https://www.instagram.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaInstagram/></button></li>
                    <li><button onClick={() => window.open("https://www.threads.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><BsThreads/></button></li>
                    <li><button onClick={() => window.open("https://www.facebook.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaSquareFacebook/></button></li>
                    <li><button onClick={() => window.open("https://www.meta.com/in/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaMeta/></button></li>
                    <li><button onClick={() => window.open("https://x.com/", "_blank")} className='bg-[#373737] p-2 rounded-xl'><FaXTwitter/></button></li>
                 </ul>
        </div>
        <div>
            <p className='text-2xl pt-8 font-semibold'>Download Our App</p>
           <div className='flex  gap-3 pt-6 '>
                <button onClick={() => window.open("https://play.google.com/store/apps")}> <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Google-Play.png" alt="" className='rounded-full h-14'/></button>
                <button onClick={() => window.open("https://www.apple.com/in/app-store/")}><img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/App-Store.png" alt="" className='rounded-full h-14'/></button>
           </div>
        </div>
      </div>
      <div className='inline-block'>
        <div className='inline-flex'>
            <div className=' bg-[#373737] w-[440px] h-56 mt-14 ml-11 rounded-3xl inline-flex'>
             <div className=' pt-16'>
                <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Footer-Info-Image.png" alt="" className='h-28 w-72 '/>
             </div>
             <div className='pt-6 '>
                <p className='text-2xl font-semibold'>Want To Repair Gadget ? </p>
                <p className='text-lg pt-4 pb-4 '>Donec sit amet turpis tincidunt eros, nam massa leo porta maecenas reque.</p>
                <button><span className=' underline font-semibold text-lg'>Contact Us</span></button>
             </div>
            </div>
             <div className='pt-7 pl-10'>
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
        <div className='pt-10 inline-flex gap-14 pl-16'>
            <div>
                 <h1 className='text-2xl'>Pages</h1>
                 <ul className='text-[#bfbfbf] space-y-3 pt-9 font-medium'>
                    <li className='cursor-pointer hover:text-white'>CompanyOverview</li>
                    <li className='cursor-pointer hover:text-white'>MissionAndValues</li>
                    <li className='cursor-pointer hover:text-white'>CaseStudies</li>
                    <li className='cursor-pointer hover:text-white'>HelpCenter</li>
                    <li className='cursor-pointer hover:text-white'>ContactUs</li>
                 </ul>
            </div>
            <div>
                 <h1 className='text-2xl'>Inner Pages</h1>
               <ul className='text-[#bfbfbf] space-y-3 pt-9 font-medium'>
                    <li className='cursor-pointer hover:text-white'>News Letter</li>
                    <li className='cursor-pointer hover:text-white'>SpecialOffers</li>
                    <li className='cursor-pointer hover:text-white'>BecomeaPartner</li>
                    <li className='cursor-pointer hover:text-white'>UpcomingEvents</li>
                    <li className='cursor-pointer hover:text-white'>TestimonialGallery</li>
                     <li className='cursor-pointer hover:text-white'>Portfolio</li>
              </ul>
            </div>
              <div>
                 <h1 className='text-2xl'>Payment</h1>
               <ul className='text-[#bfbfbf] space-y-3 pt-9  inline-block font-bold'>
                    <li className='cursor-pointer hover:text-white '>
                     <span className='inline-flex gap-3'>
                       <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Mastercard-Icon-1.svg" alt="" 
                        className='bg-[#373737] p-1 rounded-lg h-7' />
                              Master Card</span></li>
                    <li className='cursor-pointer hover:text-white'>
                     <span className='inline-flex gap-3'>
                       <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Skrill-Icon-1.svg" alt="" 
                      className='bg-[#373737] p-1 rounded-lg h-7'/>
                            Skrill</span></li>
                     <li className='cursor-pointer hover:text-white '>
                     <span className='inline-flex gap-3'>
                       <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Gpay-Icon-1.svg" alt="" 
                        className='bg-[#373737] p-1 rounded-lg h-7' />
                              Apple Pay</span></li>
                    <li className='cursor-pointer hover:text-white'>
                     <span className='inline-flex gap-3'>
                       <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Visa-Icon-1.svg" alt="" 
                      className='bg-[#373737] p-1 rounded-lg h-7'/>
                            Visa</span></li>
                     <li className='cursor-pointer hover:text-white'>
                     <span className='inline-flex gap-3'>
                       <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Paypal-Icon-1.svg" alt="" 
                      className='bg-[#373737] p-1 rounded-lg h-7'/>
                            Paypal</span></li>        
              </ul>
            </div>
            <div>
                <h1 className='text-2xl'>Shipping</h1>
                <ul className='text-[#bfbfbf] space-y-5 pt-9 font-medium inline-block '>
                    <li className='cursor-pointer hover:text-white '>
                     <span className='inline-flex gap-4'>
                       <BsCreditCard className='bg-[#373737] p-2 rounded-lg text-5xl'/>
                          <span className='gap-3'>
                          <p className='text-2xl text-white'>Express Shipping</p>
                          <p>3-6 Business Days</p>
                          </span>
                          </span></li>
                      <li className='cursor-pointer hover:text-white '>
                       <span className='inline-flex gap-4'>
                       <TbGiftCard className='bg-[#373737] p-2 rounded-lg text-5xl'/>
                          <span className='gap-3'>
                          <p className='text-2xl text-white'>Standard Shipping</p>
                          <p>10+Business Days</p>
                          </span>
                          </span></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
     <div className="w-11/12 h-[1px] bg-gray-300 mt-20 ml-14 "></div>
     <div className='pt-10 flex justify-between text-lg'>
      <p className='pl-14 '>©Designthemes all rights Reserved</p>
      <div>
        <ul className='flex gap-6 pr-16 '>
          <li className='border-r-2 pr-5'>Terms & Conditions</li>
          <li className='border-r-2 pr-5'>Privacy Policy</li>
          <li className='border-r-2 pr-5'>About Us</li>
          <li>Contact Us</li>
        </ul>
      </div>
     </div>
   </div>
  );
}

export default Footer1
