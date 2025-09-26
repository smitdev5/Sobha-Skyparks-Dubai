// components/EnquiryModal.jsx
import { useState, useContext, createContext } from "react";
import { X } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "../components/Style/EnquiryModal.css";
import { useLeadForm } from "../hooks/useLeadForm";
import { Link, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const {
    phone,
    setPhone,
    dialCode,
    isoCode,
    loading,
    success,
    setSuccess,
    submitLead,
    setDialCode,
    setIsoCode,
    setNumberWithoutCountryCode
  } = useLeadForm();

   const [consentChecked, setConsentChecked] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consentChecked) return;
    const formData = { name: e.target.name.value };
    const result = await submitLead(formData, e.target);
    if (result) {
      e.target.reset();
      setConsentChecked(false);
      onClose();
      navigate("/thank-you");
    }
  };

  return (
    <>
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

            {/* Phone Input */}
            <PhoneInput
              country={"in"}
              value={phone}
              onChange={(value, country) => {
                setPhone(value);
                setDialCode(`${country.dialCode}`);
                setIsoCode(country.countryCode);
                setNumberWithoutCountryCode(value.replace(country.dialCode, ""));
              }}
              inputProps={{ name: "phone", required: true }}
              containerClass="w-full"
              inputClass="!w-full !bg-transparent !text-white !py-3 !pl-12 !pr-3 !rounded-md !border !border-gray-600 focus:!border-[#997736] !outline-none"
              buttonClass="!bg-gray-800 !border-none !rounded-l-md"
              dropdownClass="!bg-black !text-white"
              searchClass="!bg-black !text-white"
              enableSearch={true}
            />

            {/* Consent Text */}
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                className="mt-1 w-4 h-4 accent-[#997736] cursor-pointer"
                required
              />
              <label
                htmlFor="consent"
                className="text-xs text-gray-400 leading-relaxed cursor-pointer"
              >
                I consent to the processing of provided data according to the{" "}
                <Link
                  to="/privacy-policy"
                  onClick={onClose}
                  className="underline hover:text-white"
                >
                  Privacy Policy | Terms & Conditions
                </Link>{" "}
                . I authorize Nova Capital Real Estate and its representatives
                to call, SMS, email, or WhatsApp me about its products and
                offers. This consent overrides any registration for DNC / DNCR.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#997736] hover:bg-[#997736]/70 text-black font-semibold py-3 rounded-md transition"
              disabled={loading}
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>

      {/* Thank-you popup */}
      {/* {success && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg text-center max-w-sm">
            <p className="mb-4 text-black">
              Thank you for your enquiry! We will get back to you shortly.
            </p>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="bg-[#997736] text-black px-6 py-2 rounded-lg hover:bg-[#997736]/70 transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default EnquiryModal;
