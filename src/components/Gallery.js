import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEnquiryModal } from "./EnquiryModal";
import "../App.css";

const images = [
  "../Assets/g1.webp", // cricket ground
  "../Assets/g2.webp", // kids play area
  "../Assets/g3.webp", // swimming pool
  "../Assets/g4.webp", // badminton
  "../Assets/g5.webp", // badminton
  "../Assets/g6.webp", // badminton
  "../Assets/g7.webp", // badminton
  "../Assets/g8.webp", // badminton
];

export default function GalleryCarousel() {
  const { openModal } = useEnquiryModal();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div id="gallery" className="w-full bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 px-4">
        {/* Text Section */}
        <div className="space-y-4 text-center md:text-left md:order-1 order-2">
          <h2 className="luxury-text text-2xl text-[#997736]">Gallery</h2>
          <p className="text-gray-600">
            Explore the exquisite gallery of Luxury Launch, showcasing stunning visuals of our
            exclusive amenities, including an infinity pool, gym, yoga deck, landscaped gardens,
            and more – all crafted to offer unmatched comfort, elegance, and everyday indulgence.
          </p>
          <button onClick={openModal} className="btn-download border border-gray-400 px-6 py-2 hover:bg-gray-100">
            DOWNLOAD GALLERY
          </button>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full overflow-hidden rounded-2xl shadow-lg md:order-2 order-1">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="amenity"
              className="w-full h-64 md:h-[400px] object-cover"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>

          {/* Arrows only in mobile view */}
          {isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Text Section */}
        {/* <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl font-semibold text-gray-800">Gallery</h2>
          <p className="text-gray-600">
            Explore the exquisite gallery of Luxury Launch, showcasing stunning visuals of our
            exclusive amenities, including an infinity pool, gym, yoga deck, landscaped gardens,
            and more – all crafted to offer unmatched comfort, elegance, and everyday indulgence.
          </p>
          <button className="border border-gray-400 px-6 py-2 rounded-lg hover:bg-gray-100">
            DOWNLOAD GALLERY
          </button>
        </div> */}
      </div>
    </div>
  );
}