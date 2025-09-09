import React from 'react'
 import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header3() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6
  };
  return (
    <div className=''>
     <nav className='shadow-slate-300 shadow-sm bg-white'>
        <ul className='flex items-center gap-16 px-10 py-7'>
            <li className='relative group'>
                <button className='flex items-center gap-1 font-medium text-black hover:text-blue-500'>Home 
                </button>
               
            </li>

              <li className='relative group'>
                <button className='flex items-center gap-1 font-medium text-black hover:text-blue-500'>Pages 
                    <span>▼</span>
                </button>
                {/* DropDown List */}
                 <ul className='absolute z-50 invisible group-hover:visible left-0 mt-9 w-48 bg-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>About Us</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Frequent QA’s</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Our Teams</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Store Locations</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Pricing Plan</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>404 Error</li>
                </ul>
            </li>

           <li className="relative group">
              <button className="flex items-center gap-1 font-medium text-black hover:text-blue-500">
                         Categories <span>▼</span>
                                        </button>

  
  <div
    className="absolute top-full left-[495px] -translate-x-1/2 w-screen
      bg-white shadow-lg ring-1 ring-black/5 z-50 mt-5
      opacity-0 invisible duration-200 rounded-3xl gap-8
      group-hover:opacity-100 group-hover:visible">
    <div className=" mx-auto px-6 py-6">
      <Slider {...settings}>
       
      <div className="px-3">
          <div className="bg-pink-100 h-52 w-52 rounded-2xl flex items-center justify-center">
            <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-16-02.png" alt="Camera" className="w-36 h-36" />
          </div>
          <p className="text-lg font-semibold mt-3 text-center">Camera</p>
        </div>

        <div className="px-3">
          <div className="bg-yellow-100 h-52 w-52 rounded-2xl flex items-center justify-center">
            <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/elektrix-appliences-1.png" alt="Appliances" className="w-36 h-36" />
          </div>
          <p className="text-lg font-semibold mt-3 text-center">Appliances</p>
        </div>

        <div className="px-3">
          <div className="bg-green-100 h-52 w-52 rounded-2xl flex items-center justify-center">
            <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/shop-9-03.png" alt="Gadgets" className="w-36 h-36" />
          </div>
          <p className="text-lg font-semibold mt-3 text-center">Gadgets</p>
        </div>

        <div className="px-3">
          <div className="bg-blue-100 h-52 w-52 rounded-2xl flex items-center justify-center">
            <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-5-02.png" alt="Gaming Accessories" className="w-36 h-36" />
          </div>
          <p className="text-lg font-semibold mt-3 text-center">Gaming Accessories</p>
        </div>

        <div className="px-3">
          <div className="bg-purple-100 h-52 w-52 rounded-2xl flex items-center justify-center">
            <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-12-03.png" alt="Home Audio" className="w-36 h-36" />
          </div>
          <p className="text-lg font-semibold mt-3 text-center">Home Audio</p>
        </div>

        <div className="px-3">
          <div className="bg-red-100 h-52 w-52 rounded-2xl flex items-center justify-center">
            <img src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/shop-15-02.png" alt="Smart Watches" className="w-36 h-36" />
          </div>
          <p className="text-lg font-semibold mt-3 text-center">Smart Watches</p>
        </div>
      </Slider>
    </div>
  </div>
</li>



       

              <li className='relative group'>
                <button className='flex items-center gap-1 font-medium text-black hover:text-blue-500'>Shop 
                    <span>▼</span>
                </button>
                      
         <div>
                <div className='absolute z-50 invisible group-hover:visible w-[1071px] bg-white p-6 mt-9 rounded-2xl opacity-0 group-hover:opacity-100 duration-200 flex gap-6 shadow-lg'>
                   <div className='w-1/2 flex justify-between'>
                     <div>
                      <h1 className='text-2xl shadow-sm mb-5 font-bold'>Shop Page Layout</h1>
                      <ul className='space-y-4'>
                        <li className='hover:text-blue-500 cursor-pointer'>#With Left Sidebar (Default)</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#With Right Sidebar</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Without Sidebar</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Registration & Login</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Cart Page</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Checkout Page</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Wishlist Page</li>
                      </ul>
                    </div>
                     <div>
                      <h1 className='text-2xl shadow-sm mb-5 font-bold'>Shop Single Layout</h1>
                      <ul className='space-y-4'>
                        <li className='hover:text-blue-500 cursor-pointer'>#Thumbnails Left (Default)</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Thumbnails Right</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Thumbnails Bottom</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Gallery Grid</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Variable Product</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Simple Product</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Grouped Product</li>
                       
                      </ul>
                    </div>
                    <div className='mt-24'>
                      <ul className='space-y-4'>
                        <li className='hover:text-blue-500 cursor-pointer'>#With Left Sidebar</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#With Right Sidebar</li>
                        <li className='hover:text-blue-500 cursor-pointer'>3Without Sidebar</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#In Stock</li>
                        <li className='hover:text-blue-500 cursor-pointer'>#Out Of Stock</li>
                        
                      </ul>
                    </div>
                   </div>

                </div>
               </div>
            </li>

              <li className='relative group'>
                <button className='flex items-center gap-1 font-medium text-black hover:text-blue-500'>Blog </button>
            </li>

              <li className='relative group'>
                <button className='flex items-center gap-1 font-medium text-black hover:text-blue-500'>Help Center 
                    <span>▼</span>
                </button>
                  <ul className='absolute invisible group-hover:visible left-0 mt-9 w-48 bg-white rounded-2xl shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-200'>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Contact Us</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Shipping Information</li>
                    <li className='px-4 py-2 hover:text-blue-500 cursor-pointer'>Terms and Conditions</li>
                </ul>
            </li>
        </ul>
     </nav>
    </div>
  )
}

export default Header3
