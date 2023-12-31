import Link from "next/link";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const whatsAppNumber = "9695801074";

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  //   const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[99]">
      {isVisible && (
        <div
          //   onClick={scrollToTop}
          aria-label="scroll to top"
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-green-500 text-white shadow-md transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          <a
            href={`https://wa.me/+91${whatsAppNumber}?text=Hello Nexxon Tech IT Solutions`}
            className="block"
          >
            <FaWhatsapp size={30} />
          </a>
          {/* <span className="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span> */}
        </div>
      )}
    </div>
  );
}
