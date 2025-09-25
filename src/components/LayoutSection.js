import React from "react";
import { useEnquiryModal } from "./EnquiryModal";

const LayoutSection = () => {
  const { openModal } = useEnquiryModal();

  return (
    <section id="site-floor-plans" className="bg-white py-10 px-4 md:px-12">
      {/* Master Plan Section */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-serif text-[#997736] tracking-wide mb-4">
          MASTER PLAN LAYOUT
        </h2>
        <button onClick={openModal} className=" rounded-md border-2 border-[#997736] text-[#997736] px-6 py-2 text-sm hover:bg-[#997736] hover:text-white transition">
          REQUEST MASTER PLAN LAYOUT
        </button>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div className="relative group shadow-md overflow-hidden">
          <img
            src="./Assets/mp.jpg"
            alt="Master Plan"
            className="w-full h-64 md:h-80 object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 text-white font-medium text-sm transition">
            REQUEST MASTER PLAN LAYOUT
          </button>
        </div>

        {/* Right Image */}
        <div className="relative group shadow-md overflow-hidden">
          <img
            src="./Assets/fp.jpg"
            alt="Unit Plan"
            className="w-full h-64 md:h-80 object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-100 text-white font-medium text-sm transition">
            REQUEST UNIT PLAN LAYOUT
          </button>
        </div>
      </div>

      {/* Unit Plan Section */}
      <div className="text-center mt-12">
        <h2 className="text-2xl md:text-3xl font-serif text-[#997736] tracking-wide mb-4">
          UNIT PLAN LAYOUT
        </h2>
        <button onClick={openModal} className="border-2 rounded-md border-[#997736] text-[#997736] px-6 py-2 text-sm hover:bg-[#997736] hover:text-white transition">
          REQUEST UNIT PLAN LAYOUT
        </button>
      </div>
    </section>
  );
};

export default LayoutSection;
