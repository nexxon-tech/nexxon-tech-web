import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | NexxonTech",
  description:
    "Custom Web Application Development Company - Mobile App & Web Development Services Company",
  icons: {
    icon: "https://nexxontech.com/images/favicon.png",
    apple: "https://nexxontech.com/images/favicon.png",
  },
};


const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
