import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TextCarousel from "./components/TextCarousel";
import LuxuryPage from "./components/LuxuryPage";
import AmenitiesCarousel from "./components/Amenity";
import GalleryCarousel from "./components/Gallery";
import Invest from "./components/Invest";
import { EnquiryModalProvider } from "./components/EnquiryModal";
import LocationSection from "./components/Location";
import LayoutSection from "./components/LayoutSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import "./App.css";

// DemoButton to test modal anywhere
// function DemoButton() {
//   const { openModal } = useEnquiryModal();
//   return (
//     <button
//       onClick={openModal}
//       className="px-4 py-2 bg-yellow-600 text-black rounded-md hover:bg-yellow-500 transition"
//     >
//       Open Enquiry Modal
//     </button>
//   );
// }

function AppContent() {
  return (
    <div className="font-sans">
      <Navbar />
      <Banner />
      <TextCarousel />
      <LuxuryPage />
      <LayoutSection />
      <AmenitiesCarousel />
      <GalleryCarousel />
      <LocationSection />
      <Invest />
      <Footer />

      {/* Example Demo Button for testing modal anywhere */}
      {/* <div className="fixed bottom-4 right-4 z-50">
        <DemoButton />
      </div> */}
    </div>
  );
}

function App() {
  return (
    <EnquiryModalProvider>
      {/* <AppContent /> */}
      {/* <Router> */}
        <Routes>
          <Route path="/" element={<AppContent />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          {/* <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> */}
        </Routes>
      {/* </Router> */}
    </EnquiryModalProvider>
  );
}

export default App;
