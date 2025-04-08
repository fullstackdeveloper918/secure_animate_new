import React from "react";
import ContactMain from "@/pages/contact/contact";
import { config } from "../../../../config";

export const metadata = {
  title: "Secure 365 - Contact page",
};

const ContactPage = async () => {
  try {
    // Fetch the contact data
    const data = await fetch(`${config.APP_URL}/secure-plugin/v1/contact`, {
      cache: "no-store",
    });

    // Parse JSON response
    let response = await data.json();
    let contactData = response?.data;

    // Provide default values if contactData is missing
    if (!contactData) {
      contactData = { message: "Contact data not available" }; // Default message
    }

    return <ContactMain contactData={contactData} />;
  } catch (error) {
    // Handle any fetch errors or unexpected issues
    console.error("Error fetching contact data:", error);

    // Provide fallback data if there's an error
    const fallbackContactData = { message: "Error fetching Contact data" };

    return <ContactMain contactData={fallbackContactData} />;
  }
};

export default ContactPage;
