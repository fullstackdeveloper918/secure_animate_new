import React from "react";
import { config } from "../../../../config";
import AboutUsMain from "@/pages/about/about-us";

export const metadata = {
  title: "Secure 365 - About us page",
};

const AboutUsPage = ({ aboutResponse, bannerResponse }) => {
  return (
    <div className="about_usClass">
      <AboutUsMain
        aboutResponse={aboutResponse}
        bannerResponse={bannerResponse}
      />
    </div>
  );
};

// Fetch data at build time using getStaticProps
export async function getStaticProps() {
  try {
    // Fetch about data and banner data
    const data = await fetch(`${config.APP_URL}/secure-plugin/v1/about`, {
      cache: "no-store",
    });
    const bannerData = await fetch(
      `${config.APP_URL}/secure-plugin/v1/banner/about-us`,
      {
        cache: "no-store",
      }
    );

    // Parse the data
    const aboutResponse = await data.json();
    const bannerResponse = await bannerData.json();

    // Return the data as props
    return {
      props: {
        aboutResponse,
        bannerResponse,
      },
      revalidate: 3600, // Optional: Invalidate cache every hour (you can adjust the time)
    };
  } catch (error) {
    console.error("Error fetching data: ", error);

    // Return null for aboutResponse and bannerResponse in case of an error
    return {
      props: {
        aboutResponse: null,
        bannerResponse: null,
      },
    };
  }
}

export default AboutUsPage;
