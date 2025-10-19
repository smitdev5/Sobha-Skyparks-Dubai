// LuxuryPage.jsx
import React from "react";
// import "./LuxuryPage.css";
import "../App.css";
import { useEnquiryModal } from "./EnquiryModal";

const LuxuryPage = () => {
  const { openModal } = useEnquiryModal();
  return (
    <div id="about" className="luxury-page">
      {/* ----------- Section 1: Luxury Launch ----------- */}
      <section className="luxury-section">
        <div className="luxury-image">
          <img
            src="../Assets/banner1.webp"
            alt="Luxury View"
          />
        </div>
        <div className="luxury-text">
          <h2 className="font-semibold">
            Sobha SkyParks 
          </h2>
          <p>
            Rising 450 meters above Sheikh Zayed Road, SkyParks by Sobha Realty is a 109-storey architectural marvel redefining luxury living in Dubai. Featuring 684 residences, including 1–3 bed apartments and exclusive duplexes, Sobha Sky Parks offers breathtaking views of the Arabian Gulf, Palm Jumeirah, and Downtown Dubai. Designed around Sobha’s Art of Detail philosophy, its sleek glass façade and interconnected sub-towers embody modern elegance. Sobha Skyparks four themed SkyParks, a 350-meter-high infinity pool, cinema, family BBQ zones, and wellness areas. Merging sophistication, innovation, and vertical urban living, Sobha SkyParks stands as a new icon on Dubai’s most prestigious corridor.
          </p>
          <button onClick={openModal} className="mt-4 font-semibold border-2 rounded-md border-[#997736] text-[#997736] hover:text-white px-6 py-2 hover:bg-[#997736] transition">DOWNLOAD BROCHURE</button>
        </div>
      </section>
    </div>
  );
};

export default LuxuryPage;
