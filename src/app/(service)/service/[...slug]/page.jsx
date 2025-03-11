import React from "react";
import ServiceDetailsMain from '@/pages/service/service-details'
import { config } from "../../../../../config";

export const metadata = {
  title: "Secure 365 - Service Details page",
};

const ServiceDetailsPage = async({params}) => {


   
    const bannerData = await fetch(
        `${config.APP_URL}/secure-plugin/v1/service/${params?.slug}`,
        {
          cache: "no-store",
        }
      );

      const response = await bannerData.json();
      const serviceBannerData = response?.data ;


  return (
    <ServiceDetailsMain serviceBannerData={serviceBannerData}/>
  );
};

export default ServiceDetailsPage;
