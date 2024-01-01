import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Mobile App Development | NexxonTech",
  description:
    "Custom Web Application Development Company - Mobile App & Web Development Services Company",
  icons: {
    icon: "https://nexxontech.com/images/favicon.png",
    apple: "https://nexxontech.com/images/favicon.png",
  },
};

const MobileAppDevelopment = (props: Props) => {
  return (
    <div>
      <Breadcrumb
        pageName="Mobile App Development Page"
        description="Page is under development"
      />
    </div>
  );
};

export default MobileAppDevelopment;
