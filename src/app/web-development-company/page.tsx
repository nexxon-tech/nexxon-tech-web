import WebDevComp from "@/components/WebDevelopment";
import { Metadata } from "next";
import React from "react";

type Props = {};

export const metadata: Metadata = {
  title: "Web Development Company | NexxonTech",
  description:
    "Custom Web Application Development Company - Mobile App & Web Development Services Company",
  icons: {
    icon: "https://nexxontech.com/images/favicon.png",
    apple: "https://nexxontech.com/images/favicon.png",
  },
};

const WebDevelopmentCompany = (props: Props) => {
  return <WebDevComp />;
};

export default WebDevelopmentCompany;
