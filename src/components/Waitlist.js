// WaitlistHero.jsx
import React from "react";
import { useEnquiryModal } from "./EnquiryModal";

const Waitlist = () => {
    const { openModal } = useEnquiryModal();
    return (
        <div className="bg-[#0d1b2a] pb-24 pt-24 flex items-center justify-center px-4">
            <div className="text-center max-w-6xl">
                <h1 className="text-white text-3xl sm:text-4xl md:text-7xl font-serif mb-6">
                    EOI's Have Started.<br />
                    <span className="underline ">Get On the Waitlist</span><br/>
                    <span classname="">for Early Premium Units.</span>
                </h1>
                <p className="text-white text-sm sm:text-base md:text-xl mb-8">
                    Book a call with our directors to have a full understanding and make an informed decision
                </p>
                <button onClick={openModal} className="font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">
                    GET AHEAD ON THE WAITLIST
                </button>
            </div>
        </div>
    );
};

export default Waitlist;
