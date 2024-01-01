import React from "react";
import Head from "next/head";
type Props = {};
import PrivacyPolicyCmp from "@/components/PrivacyPolicy/index";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | NexxonTech",
  openGraph: {
    title: "Privacy Policy for Nexxon Tech",
    siteName: "nexxontech.com",
    images: "https://nexxontech.com/images/favicon.png",
    url: "https://nexxontech.com/privacy-policy",
  },
  robots: "noindex",
  alternates: {
    canonical: "https://nexxontech.com/privacy-policy",
  },
  icons: {
    icon: "https://nexxontech.com/images/favicon.png",
    apple: "https://nexxontech.com/images/favicon.png",
  },
};

const PrivacyPolicy = (props: Props) => {
  return (
    <>
      <PrivacyPolicyCmp />
    </>
  );
};

export default PrivacyPolicy;
