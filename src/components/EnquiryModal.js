// components/EnquiryModal.jsx
import { useState, useContext, createContext } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/Style/EnquiryModal.css"
// Context for global modal access
const EnquiryModalContext = createContext();

export const useEnquiryModal = () => useContext(EnquiryModalContext);

export const EnquiryModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EnquiryModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {isOpen && <EnquiryModal onClose={closeModal} />}
    </EnquiryModalContext.Provider>
  );
};

const EnquiryModal = ({ onClose }) => {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      phone,
    };
    console.log("Form Submitted:", formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="bg-black text-white p-8 rounded-xl w-full max-w-md relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold mb-6 tracking-wide text-[#997736]">
          ENQUIRE NOW
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Input */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full px-4 py-3 rounded-md bg-transparent border border-gray-600 focus:border-[#997736] outline-none"
            required
          />

          {/* Phone Input with Country Selector */}
        <PhoneInput
  country={"in"}
  value={phone}
  onChange={setPhone}
  inputProps={{
    name: "phone",
    required: true,
  }}
  containerClass="w-full" // makes it responsive
  inputClass="!w-full !bg-transparent !text-white !py-3 !pl-12 !pr-3 !rounded-md !border !border-gray-600 focus:!border-[#997736] !outline-none"
  buttonClass="!bg-gray-800 !border-none !rounded-l-md"
  dropdownClass="!bg-black !text-white"
  searchClass="!bg-black !text-white"
  enableSearch={true} // optional: search inside dropdown
/>


          {/* Consent Text */}
          <p className="text-xs text-gray-400 leading-relaxed">
            I Consent To The Processing of Provided Data According To Privacy
            Policy | Terms & Conditions. I Authorize Preferred Partner and its
            representatives to Call, SMS, Email or WhatsApp Me About Its
            Products and Offers. This Consent Overrides Any Registration For
            DNC/NDNC.
          </p>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#997736] hover:bg-[#997736]/70 text-black font-semibold py-3 rounded-md transition"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
