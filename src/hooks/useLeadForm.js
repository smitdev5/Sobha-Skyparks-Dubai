// hooks/useLeadForm.js
import { useState } from "react";
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
  const [numberWithoutCountryCode,setNumberWithoutCountryCode] = useState('')

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
        mobile_number: phone,
        iso_code: isoCode,
        dial_code: dialCode,
        project_name: projectName,
        source: "website",
        user_ip: userIP,
        organization_name: "org_1",
        ...trackingData,
      };

      // 1. Send lead to backend API
      await fetch("https://backend-0w4b.onrender.com/api/leads/create_lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // 2. Send lead to EmailJS in fixed format
      await emailjs.send(
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
        },
        EMAIL_JS_PUBLIC_KEY // public key
      );

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
