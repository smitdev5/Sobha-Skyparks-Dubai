// LocationSection.jsx
import React from "react";
import { useEnquiryModal } from "./EnquiryModal";

export default function LocationSection() {
    const { openModal } = useEnquiryModal();

    return (
        <section id="location" className="w-full px-4 py-8 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-[#997736] mb-4">
                    LOCATION ADVANTAGES
                </h2>

                {/* Google Map Embed */}
                <div className="w-full max-w-5xl mx-auto aspect-video">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3610.4785668752875!2d55.2548857!3d25.1870787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69003e62c83b%3A0xa6e786c5f5749e76!2sSobha%20skyparks!5e0!3m2!1sen!2sin!4v1760591627605!5m2!1sen!2sin"
                        className="w-full h-full rounded-lg shadow-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Sobha Skyparks Map"
                    ></iframe>
                </div>

                {/* Button */}
                <div className="mt-6">
                    <button onClick={openModal} className="px-6 py-3 border-2 border-[#997736] text-[#997736] font-semibold rounded-md hover:bg-[#997736] hover:text-white transition">
                        REQUEST LOCATION DETAILS
                    </button>
                </div>
            </div>
        </section>
    );
}
