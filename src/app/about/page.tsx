import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | NexxonTech",
  description:
    "Custom Web Application Development Company - Mobile App & Web Development Services Company",
  icons: {
    icon: "https://nexxontech.com/images/favicon.png",
    apple: "https://nexxontech.com/images/favicon.png",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Custom Web Application & Mobile App Development Company - Elevate your digital experience with Nexxon Tech — where
        technology meets intuitive design for optimal performance.
        Choose Nexxon Tech for a future-ready web app that takes your
        business to new heights!"
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
