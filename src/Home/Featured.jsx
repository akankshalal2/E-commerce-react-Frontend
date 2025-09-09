import React from "react";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { LuTvMinimal } from "react-icons/lu";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbToolsKitchen3 } from "react-icons/tb";
import { IoHeartCircleSharp } from "react-icons/io5";
import { IoSearchCircleSharp } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";

function Featured() {
  return (
    <>
      <div className="bg-white rounded-3xl !max-w-full h-[1369px] border-2 my-10 mx-10 pt-20">
        <div>
          <div className="flex justify-center items-center ">
            <p className="bg-transparent w-52 border-blue-500 border-2 text-blue-500 rounded-3xl font-bold flex justify-center items-center text-xs h-8">
              EXCLUSIVE PRODUCTS
            </p>
          </div>
          <div className="w-full h-5"></div>
          <div className="flex justify-center items-center ">
            <p className=" text-black text-5xl font-bold">
              Our Featured Products
            </p>
          </div>
          <div className="w-full h-8"></div>
          <div className="flex items-center justify-center gap-8 ">
            <div className=" group border-2 rounded-full w-60 h-16 inline-flex justify-start gap-8 items-center pl-3  hover:text-white hover:cursor-pointer transition hover:bg-blue-500">
              <HiClipboardDocumentList className="text-5xl rounded-full border-2 p-2  group-hover:text-black group-hover:bg-white" />
              <span className="font-semibold text-xl">All Products</span>
            </div>
            <div className="group border-2 rounded-full w-60 h-16 inline-flex justify-start gap-8 items-center pl-3  hover:text-white hover:cursor-pointer transition hover:bg-blue-500">
              <LuTvMinimal className="text-5xl rounded-full border-2 p-2  group-hover:text-black group-hover:bg-white" />
              <span className="font-semibold text-xl">Gadgets</span>
            </div>
            <div className="group border-2 rounded-full w-60 h-16 inline-flex justify-start gap-8 items-center pl-3  hover:text-white hover:cursor-pointer transition hover:bg-blue-500">
              <IoGameControllerOutline className="text-5xl rounded-full border-2 p-2  group-hover:text-black group-hover:bg-white" />
              <span className="font-semibold text-xl">Accessories</span>
            </div>
            <div className="group border-2 rounded-full w-60 h-16 inline-flex justify-start gap-8 items-center pl-3  hover:text-white hover:cursor-pointer transition hover:bg-blue-500">
              <TbToolsKitchen3 className="text-5xl rounded-full border-2 p-2  group-hover:text-black group-hover:bg-white" />
              <span className="font-semibold text-xl">Appliances</span>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-300 mt-16"></div>
        </div>
        <div>
          <div className="flex flex-wrap ">
          {/* <div className="grid grid-cols-4"> */}
            <div className="group cursor-pointer border-gray-300  border-r-2 w-1/4">
              <div className="flex  absolute gap-52 ">
                <p className="text-xl font-semibold relative pl-5">Camera</p>
                <div className="hidden group-hover:flex flex-col  text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-16-03.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-16-02.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>

              <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full pl-5 py-4">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  SALE
                </p>

                <p className="text-xl font-bold">Digital Camera</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹129.30-₹129.70</p>
              </div>
            </div>

            {/* <div className="w-px h-96 bg-gray-300 "></div> */}
            <div className="group cursor-pointer border-gray-300 border-r-2 w-1/4">
              <div className="flex gap-24 absolute">
                <p className="text-xl font-semibold relative pl-5">
                  Gaming Accessories
                </p>
                <div className="hidden group-hover:block justify-end text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-21-1.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-2-03.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>
              <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  TRENDING
                </p>

                <p className="text-xl font-bold">VR Headset</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹30.00-₹42.00</p>
              </div>
            </div>

            {/* <div className="w-px h-96 bg-gray-300 "></div> */}
            <div className="group cursor-pointer  border-gray-300  border-r-2 w-1/4">
              <div className="flex gap-44 absolute">
                <p className="text-xl font-semibold relative pl-5">Appliances</p>
                <div className="hidden group-hover:block justify-end text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/Product-Image-4.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/05/shop-9-01.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>
              <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  TRENDING
                </p>
                <p className="text-xl font-bold">12S Slim Pro Laptop</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹80.70-₹252.40</p>
              </div>
            </div>
            {/* <div className="w-px h-96 bg-gray-300 "></div> */}
            <div className="group cursor-pointer">
              <div className="flex gap-40 absolute">
                <p className="text-xl font-semibold relative pl-5">Home Audio</p>
                <div className="hidden group-hover:block justify-end text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-12-03.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-12-01.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>
              <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  SALE
                </p>

                <p className="text-xl font-bold">In-Ear Headset</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹18.00-₹80.72</p>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-300 "></div>

            <div className="group cursor-pointer border-gray-300  border-r-2 w-1/4  ">
              <div className=" absolute flex gap-28">
                <p className="text-lg font-semibold  ">Gaming Accessories</p>
                <div className=" hidden group-hover:block  text-5xl  ">
                  <IoHeartCircleSharp className=" hover:text-blue-500 transition " />
                  <IoSearchCircleSharp className=" hover:text-blue-500 transition" />
                </div>
              </div>

              <div className="">
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-21-1.png"
                  alt=""
                  className="h-80 group-hover:hidden "
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-2-03.png"
                  alt=""
                  className="h-80 hidden group-hover:flex "
                />
              </div>
               <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  NEW
                </p>
                <p className="text-xl font-bold">Gaming CPU</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹121.70-₹152.40</p>
              </div>
            </div>
            <div className="w-px  bg-gray-300 "></div>
            <div className="group cursor-pointer">
              <div className="flex gap-28 absolute">
                <p className="text-lg font-semibold relative ">
                  Gaming Accessories
                </p>
                <div className="hidden group-hover:block justify-end text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-11-02.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-11-01-1.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>
               <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  SALE
                </p>
                <p className="text-xl font-bold">Wireless Headset</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹49.70-₹49.40</p>
              </div>
            </div>
            <div className="w-px h-[528px] bg-gray-300 "></div>
            <div className="group cursor-pointer">
              <div className="flex gap-24 absolute">
                <p className="text-xl font-semibold relative">
                  Gaming Accessories
                </p>
                <div className="hidden group-hover:block justify-end text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-3-03-1.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-3-02.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>
               <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  NEW
                </p>
                <p className="text-xl font-bold">Play Station Remote</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹28.50-₹29.40</p>
              </div>
            </div>
            <div className="w-px h-[528px] bg-gray-300 "></div>
            <div className="group">
              <div className="flex gap-24 absolute">
                <p className="text-xl font-semibold relative">
                  Gaming Accessories
                </p>
                <div className="hidden group-hover:block justify-end text-5xl ">
                  <IoHeartCircleSharp className=" hover:text-blue-500  " />
                  <IoSearchCircleSharp className=" hover:text-blue-500" />
                </div>
              </div>
              <div>
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-1-02.png"
                  alt=""
                  className="h-80 group-hover:hidden"
                />
                <img
                  src="https://elektrix.wpengine.com/wp-content/uploads/2024/06/shop-1-01.png"
                  alt=""
                  className="h-80 hidden group-hover:flex"
                />
              </div>
               <div className="flex flex-col gap-3 text-left border-gray-200 border-t-2 w-full py-4 pl-5">
                <p className="bg-blue-500 w-20 border-blue-500 border-2 text-white rounded-3xl font-bold flex justify-center items-center text-xs h-8">
                  9.1% OFF
                </p>
                <p className="text-xl font-bold">Portable Speaker</p>
                <div className="inline-flex text-yellow-400 text-2xl">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p>₹115.70-₹252.40</p>
              </div>
            </div>
          </div>
          {/* <div className="w-full h-[1px] bg-gray-300 "></div> */}
        </div>
      </div>
    </>
  );
}

export default Featured;
