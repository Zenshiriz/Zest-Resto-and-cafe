import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import footerLine from "../assets/Rectangle 1.png";
export default function Footer() {
  return (
    <footer className=" bg-black py-2 md:py-6 relative" style={{zIndex:''}}>
        <div className="flex justify-center ">
          <img src={logo} alt="" className="h-20" />
        </div>
        <div className="z-50">
            <ul className=" flex flex-col md:flex-row gap-2 justify-center md:gap-x-16 lg:gap-x-32 items-center mt-6 z-40">
              <Link to="/">
                {" "}
                <li className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-base select-none font-lekton  uppercase md:text-xl lg:text-2xl">
                  home
                </li>
              </Link>
              <Link to="menu">
                <li className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-base select-none font-lekton  uppercase md:text-xl lg:text-2xl">
                  menu
                </li>
              </Link>
              <Link to="gallery">
                <li className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-base select-none font-lekton  uppercase md:text-xl lg:text-2xl">
                  gallery
                </li>
              </Link>
              <Link to="about">
                <li className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-base select-none font-lekton  uppercase md:text-xl lg:text-2xl">
                  About
                </li>
              </Link>
              <Link to="contact">
                <li className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-base select-none font-lekton  uppercase md:text-xl lg:text-2xl">
                  contact us
                </li>
              </Link>
            </ul>
            <div className="md:flex justify-center items-center md:space-x-10 z-40">
              <p className=" text-cream hidden lg:block font-lekton ">
                6 block Krishnapura | 575014,mangalore | Copyright 2023
              </p>
              <div className=" min-w-[200px] md:min-w-[400px]  flex px-3 mt-4">
                <button className=" uppercase bg-transparent text-cream py-2 w-full font-loaMuangDon hover:bg-cream hover:text-black  outline-cream outline outline-[1px] text-sm mr-3">
                <Link to="contact">Order</Link>  
                </button>
                <button className=" uppercase bg-transparent text-cream py-2 w-full font-loaMuangDon hover:bg-cream hover:text-black  outline-cream outline outline-[1px] text-sm">
                 <Link to="contact">Make A reservation</Link> 
                </button>
              </div>
            </div>
         
        </div>
      <div className=" flex flex-col items-center mt-5 mb-3 font-lekton">
        <p className=" text-cream text-base">
          Monday-Friday;4;30pm-11am|
          <br className="md:hidden" />
          Saturday-Sunday:4;30pm-3am{" "}
        </p>
        <p className=" text-cream text-center mt-3 text-base flex">
          Copyright2023 <span className="hidden md:block">|</span>
          <br className="block md:hidden" />
          Designed by Mohammad riza
        </p>
      </div>
        <div className=" w-[80%] m-auto ">
          <div className="z-10">
        <img
            src={footerLine}
            style={{ zIndex: "0", pointerEvents: "none"}}
            className="hidden md:block absolute z-[0]  top-[70px] left-[] w-[80%] m-auto h-60"
            alt=""
          />
          </div>
      </div>
    </footer>
  );
}
