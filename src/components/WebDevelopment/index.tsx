import React from "react";
import { Poppins } from "next/font/google";
import { Input, Textarea, Button } from "@nextui-org/react";

type Props = {};
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const WebDevComp = (props: Props) => {
  return (
    <div
      className={`overflow-hidden py-16 md:py-20 lg:py-28 ${poppins.className}`}
    >
      <div className="container mt-10 lg:mt-0">
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex items-center justify-start lg:col-span-7">
            <div className="">
              <h1 className="track text-md mb-4 font-semibold uppercase leading-5 -tracking-tighter text-[#f13624] lg:pr-24 lg:text-xl lg:font-bold">
                Custom Web Development Services
              </h1>
              <h2 className="text-3xl font-extrabold leading-tight lg:pr-24 lg:text-5xl">
                Transform Your Business With A Custom Web Development Company
              </h2>
              <p className="mt-8 text-base lg:text-2xl font-light text-[#444]">
                Agile, full-service engineering capabilities — everything you
                need for your next project under one roof.
              </p>
            </div>
          </div>
          <div className="hidden items-end lg:col-span-5 lg:block">
            <div className="float-right w-full max-w-[460px] bg-[#f9d94e] px-12 pb-10 pt-10 shadow-[2px_20px_30px_8px_rgba(0,0,0,.21)]">
              <p className="text-4xl font-extrabold">
                Need Help with Web App Development?
              </p>
              <form className="my-10">
                <div className="mb-6">
                  <Input
                    radius="none"
                    type="text"
                    variant="flat"
                    label="Your Name"
                  />
                </div>
                <div className="mb-6">
                  <Input
                    radius="none"
                    type="email"
                    variant="flat"
                    label="Business Email"
                  />
                </div>
                <div className="mb-6">
                  <Input
                    radius="none"
                    type="number"
                    variant="flat"
                    label="Phone Number"
                  />
                </div>
                <div className="mb-6">
                  <Textarea
                    radius="none"
                    type="text"
                    variant="flat"
                    label="About Project"
                  />
                </div>
                <div className="mb-6">
                  <Button
                    className="bg-[#f23524ff] text-xl font-bold text-white"
                    size="lg"
                    fullWidth
                    radius="none"
                  >
                    Get In Touch
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevComp;
