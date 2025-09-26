// components/ThankYouPage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f9f6f1] px-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-xl text-center">
        <h1 className="text-3xl font-bold text-[#997736] mb-4">
          Thank you for your enquiry!
        </h1>
        <p className="text-gray-700 mb-6">
          We appreciate your interest in finding your next home with us. 
          Our expert will call you shortly.
        </p>
        <p className="text-gray-700 mb-6">
          Book a free, no-obligation property viewing with our team.{" "}
          {/* <Link
            to="/schedule-viewing"
            className="text-[#997736] font-semibold underline hover:text-[#b38e5d]"
          >
            Click here
          </Link>{" "} */}
          Click here to schedule your preferred date and time.
        </p>
        <p className="text-gray-700 mb-8">
          Thank you again for registering—let’s make your property journey a success!
        </p>

        <Link
          to="/"
          className="inline-block bg-[#997736] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b38e5d] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;
