import React from "react";
import ContactMain from "@/pages/contact/contact";
import { config } from "../../../../config";

export const metadata = {
  title: "Secure 365 - Contact page",
};

const ContactPage = ({ contactData }) => {
  return (
    <div className="contact-page">
      <ContactMain contactData={contactData} />
    </div>
  );
};

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch contact data
    const data = await fetch(`${config.APP_URL}/secure-plugin/v1/contact`, {
      cache: "no-store", // Prevent caching for fresh data
    });

    // Parse the response
    const response = await data.json();
    const contactData = response?.data || null;

    // Return the data as props
    return {
      props: {
        contactData,
      },
      revalidate: 3600, // Optional: Invalidate cache every hour (adjust as needed)
    };
  } catch (error) {
    console.error("Error fetching contact data: ", error);

    return {
      props: {
        contactData: null, // In case of error, return null
      },
    };
  }
}

export default ContactPage;
