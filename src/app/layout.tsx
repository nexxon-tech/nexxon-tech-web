"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import { Providers } from "./providers";
import "react-toastify/dist/ReactToastify.css";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <ToastContainer position="top-center" className={"z-[9999]"} />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
