import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeaderWithSliderDropdown() {
  const [open, setOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <header
      className="relative z-50"
      onMouseLeave={() => setOpen(false)}
    >
      {/* Navbar */}
      <div className="bg-white border-b">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">
          <a href="#" className="text-blue-600 font-semibold">Home</a>
          <a href="#" className="font-medium">Pages</a>

          {/* Categories with hover */}
          <button
            onMouseEnter={() => setOpen(true)}
            className="font-medium inline-flex items-center gap-1"
          >
            Categories
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Full-width slick slider dropdown */}
      {open && (
        <div className="absolute inset-x-0 top-full bg-white shadow-lg ring-1 ring-black/5">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <Slider {...settings}>
              {/* Camera */}
              <div className="px-3">
                <div className="bg-pink-100 rounded-2xl h-36 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2920/2920040.png" alt="Camera" className="w-16 h-16" />
                </div>
                <p className="mt-3 font-semibold text-center">Camera</p>
              </div>

              {/* Appliances */}
              <div className="px-3">
                <div className="bg-green-100 rounded-2xl h-36 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Appliances" className="w-16 h-16" />
                </div>
                <p className="mt-3 font-semibold text-center">Appliances</p>
              </div>

              {/* Gadgets */}
              <div className="px-3">
                <div className="bg-pink-100 rounded-2xl h-36 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/870/870910.png" alt="Gadgets" className="w-16 h-16" />
                </div>
                <p className="mt-3 font-semibold text-center">Gadgets</p>
              </div>

              {/* Gaming Accessories */}
              <div className="px-3">
                <div className="bg-blue-100 rounded-2xl h-36 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/833/833314.png" alt="Gaming" className="w-16 h-16" />
                </div>
                <p className="mt-3 font-semibold text-center">Gaming Accessories</p>
              </div>

              {/* Home Audio */}
              <div className="px-3">
                <div className="bg-orange-100 rounded-2xl h-36 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2991/2991061.png" alt="Home Audio" className="w-16 h-16" />
                </div>
                <p className="mt-3 font-semibold text-center">Home Audio</p>
              </div>

              {/* Smartwatches */}
              <div className="px-3">
                <div className="bg-pink-100 rounded-2xl h-36 flex items-center justify-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Smartwatches" className="w-16 h-16" />
                </div>
                <p className="mt-3 font-semibold text-center">Smartwatches</p>
              </div>
            </Slider>
          </div>
        </div>
      )}
    </header>
  );
}
