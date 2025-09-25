import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TextCarousel from "./components/TextCarousel";
import LuxuryPage from "./components/LuxuryPage";
import AmenitiesCarousel from "./components/Amenity";
import GalleryCarousel from "./components/Gallery";
import Invest from "./components/Invest";
import { EnquiryModalProvider } from "./components/EnquiryModal";
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
      <AmenitiesCarousel />
      <GalleryCarousel />
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
      <AppContent />
    </EnquiryModalProvider>
  );
}

export default App;
