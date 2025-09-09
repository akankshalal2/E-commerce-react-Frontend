import React from 'react'
import { FaCirclePlay } from "react-icons/fa6";

function Work() {
  return (
    <div className="bg-pink-100 rounded-3xl !max-w-full h-[612px] border-2 pt-10 mx-10 my-10 text-5xl font-bold">
        <div className='flex justify-center items-center '>
         <p className="bg-transparent w-52 border-blue-500 border-2 text-blue-500 rounded-3xl font-bold flex justify-center items-center text-xs h-8">
        EXPLORE TECH INNOVATION
      </p>
      </div>
      <p className=" pt-10 pl-40">
        Discover A World Where Technological Innovation
      </p>

      <div className="inline-flex pt-5">
        <img
          src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/elektrix-text-with-img4.png"
          alt=""
          className="pl-52"
        />
        <span className="pt-5 px-4">And Ease Collide To Provide The</span>
        <img
          src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/elektrix-text-with-img2.png"
          alt=""
          className="h-16 mt-5"
        />
      </div>

      <div className="inline-flex pt-5 pl-36">
        <span>Newest Trends Flawlessly And Enhance</span>
        <FaCirclePlay className="text-blue-500 mx-4 text-6xl" />
        <span>Your Living.</span>
      </div>

      <div className="w-full h-[1px] bg-gray-300 mt-16"></div>
      <div class="flex justify-evenly items-center">
        <div>
          <span className="text-6xl ">77K</span>
          <p className="text-xl font-semibold">Licenced Products</p>
        </div>
        <div className="w-px h-48 bg-gray-300 "></div>
        <div>
          <span className="text-6xl ">9/10</span>
          <p className="text-xl font-semibold">Satisfied Customers</p>
        </div>
        <div className="w-px h-48 bg-gray-300 "></div>
        <div>
          <span className="text-6xl ">82M</span>
          <p className="text-xl font-semibold">Products Sold</p>
        </div>
        <div className="w-px h-48 bg-gray-300 "></div>
        <div>
          <span className="text-6xl ">4.85</span>
          <p className="text-xl font-semibold">Top Rated Reviews</p>
        </div>
        <div className="w-px h-48 bg-gray-300 "></div>
        <div>
          <span className="text-6xl ">482+</span>
          <p className="text-xl font-semibold">Global Stores</p>
        </div>
      </div>

      
    </div>
  );
}

export default Work
 