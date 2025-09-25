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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81816.20911271714!2d54.98944762273478!3d25.00691894194119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f10f22909222f%3A0xeee8c736a7748d68!2sPalm%20Jebel%20Ali!5e0!3m2!1sen!2sin!4v1758785328493!5m2!1sen!2sin"
                        className="w-full h-full rounded-lg shadow-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Palm Jebel Ali Map"
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
