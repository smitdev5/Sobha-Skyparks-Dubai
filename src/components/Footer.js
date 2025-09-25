// components/Footer.jsx
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEnquiryModal } from "./EnquiryModal";
import { useLeadForm } from "../hooks/useLeadForm";
import { Link } from "react-router-dom";

const Footer = () => {
  const { openModal } = useEnquiryModal();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!consentChecked) return;
    const formData = {
      name: e.target.name.value,
    };
    const result = await submitLead(formData, e?.target);
    if (result) {
      e.target.reset();
      setConsentChecked(false);
    }
  };

  return (
    <div>
      <footer id="contact" className="w-full bg-[#997736] p-6 sm:p-8 lg:p-10">
        <div className="container mx-auto">
          {/* Desktop Footer */}
          <div className="hidden lg:flex flex-col items-center">
            <h2 className="text-white text-2xl font-bold mb-4">ENQUIRE NOW</h2>
            <form
              onSubmit={handleFormSubmit}
              className="flex items-end justify-center space-x-4 w-full max-w-4xl"
            >
              {/* Name input */}
              <div className="flex-1 flex flex-col">
                <label className="text-white mb-1 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="h-[48px] p-3 rounded-lg bg-white border border-gray-300 focus:border-[#997736] outline-none w-full"
                  required
                />
              </div>

              {/* Phone input */}
              <div className="flex-1 flex flex-col">
                <label className="text-white mb-1 text-sm font-medium">
                  Phone Number
                </label>
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
                  inputClass="!w-full !h-[48px] !pl-12 !pr-3 !rounded-lg !bg-white !text-black !border !border-gray-300 focus:!border-[#997736] !outline-none placeholder:!text-gray-400"
                  buttonClass="!h-[48px] !flex !items-center !justify-center !bg-gray-200 !border-none !rounded-l-lg "
                  dropdownClass="!bg-white !text-black"
                  searchClass="!bg-white !text-black"
                  enableSearch={true}
                  placeholder="Enter phone number"
                />
              </div>

              <button
                type="submit"
                className="bg-[#b38e5d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#a07e4d] transition-colors h-fit"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Enquire"}
              </button>
            </form>

            <div className="flex items-start space-x-2 text-gray-200 text-sm mt-4 text-center max-w-2xl">
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
                className="text-xs text-gray-200 leading-relaxed cursor-pointer"
              >
                I consent to the processing of provided data according to the{" "}
                <Link
                  to="/privacy-policy"
                  // onClick={onClose}
                  className="underline hover:text-white"
                >
                  Privacy Policy | Terms & Conditions
                </Link>{" "}
                . I authorize Nova Capital Real Estate and its representatives
                to call, SMS, email, or WhatsApp me about its products and
                offers. This consent overrides any registration for DNC / DNCR.
              </label>
            </div>
          </div>

          {/* Mobile/Tablet Footer */}
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <h2 className="text-white text-2xl font-bold">ENQUIRE NOW</h2>
            <form onSubmit={handleFormSubmit} className="w-full space-y-4 pb-20">
              <div className="flex flex-col">
                <label className="text-white mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="h-[48px] w-full p-3 rounded-lg bg-white border border-gray-300 focus:border-[#997736] outline-none"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label className="text-white mb-1 text-sm font-medium">Phone Number</label>
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
                  containerClass="w-full relative"   // ✅ relative so dropdown positions properly
                  inputClass="!w-full !h-[48px] !pl-12 !pr-3 !rounded-lg !bg-white !text-black !border !border-gray-300 focus:!border-[#997736] !outline-none placeholder:!text-gray-400"
                  buttonClass="!h-[48px] !flex !items-center !justify-center !bg-gray-200 !border-none !rounded-l-lg !px-1"
                  dropdownClass="!bg-white !text-black !z-[9999] !absolute"   // ✅ keep dropdown above
                  searchClass="!bg-white !text-black"
                  enableSearch={true}
                  placeholder="Enter phone number"
                  dropdownStyle={{ position: "absolute", zIndex: 9999 }}  // ✅ important
                />

              </div>

              <div className=" flex items-start space-x-1 text-gray-200 text-xs text-center max-w-2xl mt-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consentChecked}
                  onChange={(e) => setConsentChecked(e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#997736] cursor-pointer"
                  required
                />
                <label
                  htmlFor="consent"
                  className="text-xs text-gray-200 leading-relaxed cursor-pointer"
                >
                  I consent to the processing of provided data according to the{" "}
                  <Link
                    to="/privacy-policy"
                    // onClick={onClose}
                    className="underline hover:text-white"
                  >
                    Privacy Policy | Terms & Conditions
                  </Link>{" "}
                  . I authorize Nova Capital Real Estate and its representatives
                  to call, SMS, email, or WhatsApp me about its products and
                  offers. This consent overrides any registration for DNC / DNCR.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#b38e5d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#a07e4d] transition-colors"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Enquire"}
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Fixed Mobile Footer Buttons */}
      <div className="fixed bottom-0 left-0 w-full bg-[#997736] shadow-md lg:hidden">
        <div className="flex justify-around w-full p-2 space-x-2">
          <button onClick={openModal} className="flex-1 flex flex-col items-center p-2 rounded-lg bg-[#b38e5d] text-white hover:bg-[#a07e4d] transition-colors">
            <i className="fas fa-phone-alt text-lg transform rotate-90"></i>
            <span className="text-sm mt-1">CALL</span>
          </button>
          <button onClick={openModal} className="flex-1 flex flex-col items-center p-2 rounded-lg bg-[#b38e5d] text-white hover:bg-[#a07e4d] transition-colors">
            <i className="fas fa-envelope text-lg"></i>
            <span className="text-sm mt-1">ENQUIRY</span>
          </button>
          <button onClick={openModal} className="flex-1 flex flex-col items-center p-2 rounded-lg bg-[#b38e5d] text-white hover:bg-[#a07e4d] transition-colors">
            <i className="fab fa-whatsapp text-lg"></i>
            <span className="text-sm mt-1">WHATSAPP</span>
          </button>
        </div>
      </div>

      {success && (
        <div className="alert-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center max-w-sm">
            <p className="mb-4">Thank you for your enquiry! We will get back to you shortly.</p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-[#b38e5d] text-white px-6 py-2 rounded-lg hover:bg-[#a07e4d] transition-colors"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
