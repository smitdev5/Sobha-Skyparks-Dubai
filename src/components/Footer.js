import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useEnquiryModal } from "./EnquiryModal";


const Footer = () => {
  const [showAlert, setShowAlert] = useState(false);
  const { openModal } = useEnquiryModal();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted:", data);
    e.target.reset();
  };
  const [phone, setPhone] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = {
  //     name: e.target.name.value,
  //     phone,
  //   };
  //   console.log("Form Submitted:", formData);
  //   onClose();
  // };

  return (
    <div>
      <footer id="contact" className="w-full bg-[#997736] p-6 sm:p-8 lg:p-10">
        <div className="container mx-auto">
          {/* Desktop Footer Content */}
          <div className="hidden lg:flex flex-col items-center">
            <h2 className="text-white text-2xl font-bold mb-4">ENQUIRE NOW</h2>
            <form
              onSubmit={handleFormSubmit}
              className="flex items-center justify-center space-x-4 w-full max-w-4xl"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 border border-black rounded-lg flex-1 min-w-0"
                required
              />

              <div className="relative flex items-center p-3 rounded-lg border border-black flex-1 min-w-0">
                {/* Country Code Dropdown with Flag */}
                <div className="custom-select-wrapper relative">
                  <div className="custom-select flex items-center">
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
                  </div>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  className="flex-1 border border-black bg-transparent border-none focus:outline-none"
                  required
                />
              </div>

              {/* <input type="email" name="email" placeholder="Email" className="p-3 rounded-lg flex-1 min-w-0" /> */}
              <button
                type="submit"
                className="bg-[#b38e5d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#a07e4d] transition-colors"
              >
                Enquire
              </button>
            </form>
            <p className="text-gray-400 text-sm mt-4 text-center max-w-2xl">
              I Consent to the Processing of Provided Data According to Privacy
              Policy | Terms & Conditions. I Authorize Preferred Partner and its
              representatives to Call, SMS, Email or WhatsApp Us About its
              Products and Offers. This Consent Overrides Any Registration for
              DNC/DNCR.
            </p>
          </div>

          {/* Mobile/Tablet Footer */}
          <div className="lg:hidden flex flex-col items-center space-y-4">
            <h2 className="text-white text-2xl font-bold">ENQUIRE NOW</h2>
            <form
              onSubmit={handleFormSubmit}
              className="w-full space-y-4 pb-20" // <-- padding so buttons don’t overlap
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-3 rounded-lg bg-white"
                required
              />

              {/* Mobile Country Code/Phone Field */}
              <div className="relative flex items-center p-3 rounded-lg bg-white">
                <div className="custom-select-wrapper relative">
                  <div className="custom-select flex items-center">
                    <img
                      src="https://flagcdn.com/in.svg"
                      alt="Indian Flag"
                      className="h-4 w-6 mr-2 flag-icon"
                    />
                    <select
                      name="country_code"
                      className="bg-transparent border-none focus:outline-none"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>
                  </div>
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  className="flex-1 bg-transparent border-none focus:outline-none"
                  required
                />
              </div>

              {/* <input type="email" name="email" placeholder="Email" className="w-full p-3 rounded-lg bg-white" /> */}
              <p className="text-gray-400 text-xs text-center max-w-2xl mt-2">
                I Consent to the Processing of Provided Data According to
                Privacy Policy | Terms & Conditions. I Authorize Preferred
                Partner and its representatives to Call, SMS, Email or WhatsApp
                Us About its Products and Offers. This Consent Overrides Any
                Registration for DNC/DNCR.
              </p>
              <button
                type="submit"
                className="w-full bg-[#b38e5d] text-white px-8 py-3 rounded-lg font-bold hover:bg-[#a07e4d] transition-colors"
              >
                Enquire
              </button>
            </form>
          </div>
        </div>
      </footer>

      {/* Fixed Mobile Footer Buttons */}
      <div className="fixed bottom-0 left-0 w-full bg-[#997736] shadow-md lg:hidden">
        <div className="flex justify-around w-full p-2 space-x-2">
          <button className="flex-1 flex flex-col items-center p-2 rounded-lg bg-[#b38e5d] text-white hover:bg-[#a07e4d] transition-colors">
            <i className="fas fa-phone-alt text-lg"></i>
            <span className="text-sm mt-1">CALL</span>
          </button>
          <button onClick={openModal} className="flex-1 flex flex-col items-center p-2 rounded-lg bg-[#b38e5d] text-white hover:bg-[#a07e4d] transition-colors">
            <i className="fas fa-envelope text-lg"></i>
            <span className="text-sm mt-1">ENQUIRY</span>
          </button>
          <button className="flex-1 flex flex-col items-center p-2 rounded-lg bg-[#b38e5d] text-white hover:bg-[#a07e4d] transition-colors">
            <i className="fab fa-whatsapp text-lg"></i>
            <span className="text-sm mt-1">WHATSAPP</span>
          </button>
        </div>
      </div>

      {showAlert && (
        <div className="alert-modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center max-w-sm">
            <p className="mb-4">
              Thank you for your inquiry! We will get back to you shortly.
            </p>
            <button
              onClick={() => setShowAlert(false)}
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
