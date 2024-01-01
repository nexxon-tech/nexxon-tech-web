"use client";
import React, { useState } from "react";
import { Poppins } from "next/font/google";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";
import Image from "next/image";
import { toast } from "react-toastify";

type Props = {};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const PopupModel = (props: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [messageInfo, setMessageInfo] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
  });
  const [isQueryLoading, setIsQueryLoading] = useState<boolean>(false);

  const webMailHandler = async () => {
    if (
      messageInfo.name &&
      messageInfo.email &&
      messageInfo.phone &&
      messageInfo.text
    ) {
      setIsQueryLoading(true);
      let formData = new FormData();
      const myHeaders = new Headers();
      myHeaders.append(
        "Content-Type",
        "multipart/form-data; boundary=<calculated when request is sent>",
      );

      formData.append("name", messageInfo.name);
      formData.append("email", messageInfo.email);
      formData.append("phone", messageInfo.phone);
      formData.append("text", messageInfo.text);

      let res = await fetch("api/mail", {
        method: "POST",
        body: formData,
      });
      if (res.status > 300) {
        toast.warning("Server Error 😥");
      } else {
        toast.success(
          "Your Query submitted successfully, we will contact you shortly 😊",
        );
        onClose();
      }
      setIsQueryLoading(false);
    } else {
      toast.warning("Please fill all details");
    }
  };

  return (
    <>
      <Button
        onPress={onOpen}
        className="rounded-md bg-primary px-4 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80 md:px-8 md:py-7 dark:bg-purple-700"
      >
        Discuss Your Project
      </Button>
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className={`${poppins.className}`}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-2">
                <div className="flex flex-col md:flex-row">
                  <div className=" to-yellow-500 hidden w-[45%] justify-center rounded-md bg-gradient-to-tr  from-pink-500 to-blue-500 text-white shadow-lg md:flex">
                    <div className="p-6 text-white ">
                      <h2 className="text-2xl font-bold ">
                        We’re Eager To Discuss Your Project!
                      </h2>
                      <p className="pt-5 text-sm font-light leading-6">
                        Our Resource is prepared to adapt to your requirements
                        to smoothly transform your idea to reality
                      </p>
                      <Image
                        src={"/images/PopupModel/popup-image.jpg"}
                        width={140}
                        height={30}
                        className="mt-5 w-full rounded-md opacity-60"
                        alt="nexxontech"
                      />
                    </div>
                  </div>
                  <div className=" to-yellow-500 w-full justify-center rounded-md bg-gradient-to-tr from-pink-500 to-blue-500 p-6 text-white shadow-lg md:hidden dark:from-slate-800 dark:to-gray-700 dark:text-slate-300">
                    <h2 className="text-2xl font-bold ">
                      We’re Eager To Discuss Your Project!
                    </h2>
                    <p className="pt-5 text-sm font-light leading-6">
                      Our Resource is prepared to adapt to your requirements to
                      smoothly transform your idea to reality
                    </p>
                  </div>
                  <div className="w-full space-y-1 p-1 md:w-[55%] md:space-y-4 md:p-6">
                    <Input
                      isRequired
                      variant="underlined"
                      size="md"
                      type="text"
                      label="Your Name"
                      onChange={(e) =>
                        setMessageInfo((old) => {
                          return { ...old, name: e.target.value };
                        })
                      }
                    />
                    <Input
                      variant="underlined"
                      size="md"
                      type="email"
                      label="Business Email"
                      onChange={(e) =>
                        setMessageInfo((old) => {
                          return { ...old, email: e.target.value };
                        })
                      }
                    />
                    <Input
                      isRequired
                      variant="underlined"
                      size="md"
                      type="number"
                      label="Phone Number"
                      onChange={(e) =>
                        setMessageInfo((old) => {
                          return { ...old, phone: e.target.value };
                        })
                      }
                    />
                    <Textarea
                      isRequired
                      variant="underlined"
                      size="md"
                      type="text"
                      maxRows={4}
                      label="About Project"
                      onChange={(e) =>
                        setMessageInfo((old) => {
                          return { ...old, text: e.target.value };
                        })
                      }
                    />
                    <Button
                      size="md"
                      radius="sm"
                      className="rounded-md bg-black px-8 py-4 text-base  text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                      onClick={() => webMailHandler()}
                      isLoading={isQueryLoading}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </ModalBody>
              {/* <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter> */}
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default PopupModel;
