import React, { useState, useEffect, useRef } from 'react';

const carouselItems = [
  { id: 1, text1: '2 Mins', text2: 'Sheikh Zayed Road' },
  { id: 2, text1: '15 Mins', text2: 'UAE Exchange Metro Station' },
  { id: 3, text1: '20 Mins', text2: 'Al Maktoum International Airport' },
  { id: 4, text1: '25 Mins', text2: 'Dubai Downtown' },
  { id: 5, text1: '25 Mins', text2: 'Palm Jumeirah' },
  { id: 6, text1: '25 Mins', text2: 'Dubai Marina' },
];

const Invest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef([]);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  // Function to determine which items to display based on screen size
  const getVisibleItems = () => {
    const width = window.innerWidth;
    let itemsToShow;
    if (width >= 1024) { // Desktop
      itemsToShow = 3;
    } else if (width >= 768) { // Tablet
      itemsToShow = 2;
    } else { // Mobile
      itemsToShow = 1;
    }

    const start = activeIndex;
    const end = (start + itemsToShow);
    
    // Handle wrapping around the array
    if (end <= carouselItems.length) {
      return carouselItems.slice(start, end);
    } else {
      const firstPart = carouselItems.slice(start, carouselItems.length);
      const secondPart = carouselItems.slice(0, end - carouselItems.length);
      return [...firstPart, ...secondPart];
    }
  };

  const visibleItems = getVisibleItems();

  return (
    <div className="relative w-full py-44 flex flex-col justify-center items-center font-inter text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('../Assets/g3.webp')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Carousel Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-light text-center mb-12 uppercase tracking-wide">
          LOCATION CONNECTIVITY
        </h2>
        <div className="relative flex items-center justify-center">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-0 -ml-4 z-20 p-2 rounded-full bg-[#997736] bg-opacity-50 hover:bg-opacity-75 transition-colors duration-300 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Carousel Items */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleItems.map((item, index) => (
              <div
                key={item.id}
                ref={el => itemsRef.current[index] = el}
                className="relative p-6 bg-transparent rounded-lg shadow-2xl text-center text-[#997736] transform transition-transform duration-500 ease-in-out"
              >
                {/* bg-transparent */}
                {/* <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-black text-xs uppercase font-light tracking-widest rounded-full">
                  CONNECTIVITY
                </div> */}
                <div className="mt-8">
                  <h3 className="text-4xl sm:text-5xl font-bold mb-2">{item.text1}</h3>
                  <p className="text-sm uppercase font-light tracking-wider">{item.text2}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-0 -mr-4 z-20 p-2 rounded-full bg-[#997736] bg-opacity-50 hover:bg-opacity-75 transition-colors duration-300 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invest;