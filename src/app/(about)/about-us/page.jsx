import React from "react";
import { config } from "../../../../config";
import AboutUsMain from "@/pages/about/about-us";

export const metadata = {
  title: "Secure 365 - About us page",
};

const AboutUsPage = async () => {
  try {
    // Fetch the 'about' data
    const data = await fetch(`${config.APP_URL}/secure-plugin/v1/about`, {
      cache: "no-store",
    });

    // Fetch the banner data
    const bannerData = await fetch(
      `${config.APP_URL}/secure-plugin/v1/banner/about-us`,
      {
        cache: "no-store",
      }
    );

    // Parse JSON responses
    const aboutResponse = await data.json();
    const bannerResponse = await bannerData.json();

    // Provide default values if data is missing
    if (!aboutResponse) {
      aboutResponse = { message: "About Us data not available" }; // Default message
    }
    if (!bannerResponse) {
      bannerResponse = { message: "Banner data not available" }; // Default message
    }

    return (
      <div className="about_usClass">
        <AboutUsMain
          aboutResponse={aboutResponse}
          bannerResponse={bannerResponse}
        />
      </div>
    );
  } catch (error) {
    // Handle any fetch errors or unexpected issues
    console.error("Error fetching data:", error);

    // Provide fallback data if there's an error
    const fallbackAboutResponse = { message: "Error fetching About Us data" };
    const fallbackBannerResponse = { message: "Error fetching Banner data" };

    return (
      <div className="about_usClass">
        <AboutUsMain
          aboutResponse={fallbackAboutResponse}
          bannerResponse={fallbackBannerResponse}
        />
      </div>
    );
  }
};

export default AboutUsPage;
