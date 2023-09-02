import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import ContactHeroImg from "../assets/contactImg.png";
import mapImg from "../assets/mapImg.png";
import contactPizzaImg from "../assets/contactPizzaImg.png";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const [copiedText, setCopiedText] = useState(null);

  function copyText(textValue) {
    try {
      
      navigator.clipboard
        .writeText(textValue)
        .then(() => {
          setCopiedText(textValue);
          toast.success("Text copied!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
          toast.error("Failed to copy text!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
    } catch (error) {
      
    }
  }

  return (
    <>
      <HeroSection
        img={ContactHeroImg}
        titleFirstLine={"Located in"}
        titleSecondLine={"Krishnapura,"}
        titleLastLine={" Mangalore"}
        position={"40%"}
      />
      <div
        className=" w-full h-[50vh] bg-no-repeat bg-cover lg:h-screen  flex"
        style={{ backgroundImage: `url("${mapImg}")` }}
      >
        <div className="space-y-8 md:space-y-12 px-6 flex flex-col justify-center">
          <div>
            <p className=" font-kronaOne text-sm md:text-base lg:text-xl  md:mb-3">
              phone
            </p>
            <p
              className=" font-kronaOne text-xl md:text-2xl lg:text-4xl hover:text-white transition duration-150 ease-in-out cursor-pointer bg-transparent focus:outline-none "
              onClick={copyText}
            >
              +91 9844234529
            </p>
          </div>
          <div>
            <p className=" font-kronaOne text-sm md:text-base lg:text-xl  md:mb-3">
              Address
            </p>
            <p
              className=" font-kronaOne text-xl md:text-2xl lg:text-4xl hover:text-white transition duration-150 ease-in-out cursor-pointer bg-transparent"
              readOnly
              onClick={copyText}
            >
              6 block krishnapura Manglore,Karnataka
            </p>
          </div>
          <div>
            <p className=" font-kronaOne text-sm md:text-base lg:text-xl  md:mb-3">
              Email
            </p>
            <p
              className=" font-kronaOne text-xl md:text-2xl lg:text-4xl hover:text-white transition duration-150 ease-in-out cursor-pointer bg-transparent focus:outline-none"
              onClick={copyText}
            >
              ZestInfo@gmail.com
            </p>
          </div>
        </div>
        <div className="hidden lg:flex justify-center items-center px-6">
          <img src={contactPizzaImg} className=" w-[100%]" alt="" />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
