import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useEnquiryModal } from "./EnquiryModal";
import "../App.css";

const villas = [
  {
    id: 1,
    title: "1 Bedroom Apartments",
    // description: "5 & 6 Bedroom Villas",
    size: "684 - 870 Sqft",
    price: "From: 2.86M AED",
    img: "../Assets/gallery4.webp",
  },
  {
    id: 2,
    title: "2 Bedroom Apartments",
    // description: "5 to 7 Bedroom Villas",
    size: "1188 - 1605 Sqft",
    price: "On Request",
    img: "../Assets/gallery5.webp",
  },
  {
    id: 3,
    title: "3 Bedroom Apartments",
    // description: "5 to 7 Bedroom Villas",
    size: "2267 - 2271 Sqft",
    price: "On Request",
    img: "../Assets/gallery6.webp",
  },
];

const PriceSection = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="price" className="bg-[#0d1b2a] py-10 pb-24">
      <h2 className="text-center text-[#997736] text-2xl font-bold mb-8">
        Price Overview
      </h2>

      {/* Desktop View - Grid */}
      <div className="hidden md:grid grid-cols-3 gap-8 max-w-6xl mx-auto">
        {villas.map((villa) => (
          <div
            key={villa.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src={villa.img}
              alt={villa.title}
              className="w-full h-72 object-cover hover:scale-110 transition-transform duration-300"
            />
            <div className="p-6 text-center">
              <h3 className="text-[#997736] font-bold text-lg mb-2">
                {villa.title}
              </h3>
              {/* <p className="text-gray-600">{villa.description}</p> */}
              <p className="text-gray-600">{villa.size}</p>
              <p className="text-gray-800 font-semibold">{villa.price}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View - Carousel */}
      <div className="md:hidden px-4 overflow-hidden">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {villas.map((villa) => (
            <SwiperSlide key={villa.id}>
              <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={villa.img}
                  alt={villa.title}
                  className="w-full h-72 object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6 text-center">
                  <h3 className="text-[#997736] font-bold text-lg mb-2">
                    {villa.title}
                  </h3>
                  <p className="text-gray-600">{villa.description}</p>
                  <p className="text-gray-600">{villa.size}</p>
                  <p className="text-gray-800 font-semibold">{villa.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Center Button */}
      <div className="flex justify-center mt-10">
        <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">
          Browse Sobha Skyparks Apartments
        </button>
      </div>
    </div>
  );
};

export default PriceSection;
