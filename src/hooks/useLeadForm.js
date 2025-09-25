import { useState } from "react";
import { getUserIP } from "../utils";
import { PROJECT_NAME } from "../constants";

// Custom hook
export const useLeadForm = (projectName =PROJECT_NAME) => {
  const [phone, setPhone] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [isoCode, setIsoCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

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

      await fetch("https://backend-0w4b.onrender.com/api/leads/create_lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

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
    setIsoCode
  };
};
