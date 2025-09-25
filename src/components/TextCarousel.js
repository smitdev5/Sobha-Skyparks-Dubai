import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const texts = [
  "Twice the size of Palm Jumeirah",
  "Last chance to invest in Palm Jebel Ali",
  "Luxury Island Living",
  "Panoramic View of the Beaches & Sea",
];

export default function TextCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <section id="luxury" className="bg-gray-100 py-6 relative">
      <div className="container mx-auto px-6 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
          onSwiper={setSwiperInstance}
        >
          {texts.map((text, i) => (
            <SwiperSlide key={i}>
              <div className="p-8 sm:p-6 md:p-8 text-center text-[#997736] text-lg sm:text-base md:text-lg font-medium">
                {text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button
          ref={prevRef}
          className="custom-prev absolute left-1 sm:left-2 md:left-3 top-1/2 -translate-y-1/2 z-10
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                     bg-[#997736] text-white hover:opacity-80 transition"
        >
          <i className="ri-arrow-left-s-line text-sm sm:text-lg md:text-xl"></i>
        </button>

        <button
          ref={nextRef}
          className="custom-next absolute right-1 sm:right-2 md:right-3 top-1/2 -translate-y-1/2 z-10
                     w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
                     bg-[#997736] text-white hover:opacity-80 transition"
        >
          <i className="ri-arrow-right-s-line text-sm sm:text-lg md:text-xl"></i>
        </button>
      </div>
    </section>
  );
}
