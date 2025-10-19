// hooks/useLeadForm.js
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { getUserIP } from "../utils";
import { EMAIL_JS_PUBLIC_KEY, EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, PROJECT_NAME } from "../constants";

// Initialize EmailJS
emailjs.init("-SU1cSsz3-T2DV9yD");

export const useLeadForm = (projectName = PROJECT_NAME) => {
  const [phone, setPhone] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [isoCode, setIsoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [numberWithoutCountryCode, setNumberWithoutCountryCode] = useState('')

  // 🔹 Detect user country from IP and set default iso/dialCode
  useEffect(() => {
    const detectCountry = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/"); // or ipinfo.io/json
        const data = await res.json();
        if (data?.country_code && data?.country_calling_code) {
          setIsoCode(data.country_code.toLowerCase()); // e.g. "ae"
          setDialCode(data.country_calling_code.replace("+", "")); // e.g. "971"
        }
      } catch (err) {
        console.error("Country detection failed", err);
        // fallback → India
        setIsoCode("in");
        setDialCode("91");
      }
    };
    detectCountry();
  }, []);

  const submitLead = async (formData) => {
    setLoading(true);
    try {
      const userIP = await getUserIP();

      // Tracking params from URL or localStorage
      const trackingParams = [
        "gclid",
        "utm_source",
        "utm_medium",
        "device",
        "keyword",
        "ads_group_id",
        "ads_set_name",
        "campaign_id",
        "campaign_name",
        "keyword_type",
        "physical_location",
        "location_name",
        "location_pincode",
        "ad_strategy",
        "source_form_name",
        "platform",
      ];

      const trackingData = {};
      trackingParams.forEach((param) => {
        const value =
          new URLSearchParams(window.location.search).get(param) ||
          localStorage.getItem(param);
        if (value) {
          localStorage.setItem(param, value);
          trackingData[param] = value;
        }
      });
      trackingData.url = window.location.href;

      // Payload for backend API (keep as is)
      const payload = {
        ...formData,
        mobile_number: numberWithoutCountryCode,
        iso_code: isoCode,
        dial_code: dialCode,
        project_name: projectName,
        source: "website",
        user_ip: userIP,
        organization_name: "org_1",
        email: formData?.email ?? "N/A",
        ...trackingData,
      };
      console.log("📦 Lead Payload Sent to Backend:", formData);

      // 1. Send lead to backend API
      const backendResponse = await fetch("https://backend-0w4b.onrender.com/api/leads/create_lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const backendData = await backendResponse.json();
      console.log("✅ Backend Lead Response:", backendData);

      // 2. Send lead to EmailJS in fixed format
      const emailResponse = await emailjs.send(
        EMAIL_JS_SERVICE_ID, // service_id
        EMAIL_JS_TEMPLATE_ID, // template_id
        {
          from_name: formData?.name || "testing",
          mobile_number: numberWithoutCountryCode,
          mobile_number_iso_code: isoCode,
          mobile_number_dial_code: dialCode,
          user_ip: userIP,
          to_name: PROJECT_NAME,
          email: formData?.email ?? 'N/A',
          lib_version: "2.6.4",
          service_id: EMAIL_JS_SERVICE_ID,
          template_id: EMAIL_JS_TEMPLATE_ID,
          user_id: EMAIL_JS_PUBLIC_KEY,
          // email: formData?.email ?? "N/A",
        },
        EMAIL_JS_PUBLIC_KEY // public key
      );
      console.log("📧 EmailJS Response:", emailResponse);

      // Save locally
      localStorage.setItem("user_phone", phone);

      setSuccess(true);

      // Reset phone fields
      setPhone("");
      setDialCode("");
      setIsoCode("");

      return true;
    } catch (err) {
      console.error("Lead submission failed:", err);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
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
  };
};
