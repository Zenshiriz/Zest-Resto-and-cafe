import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logoSrc from "../assets/logo.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instgram.png";
import { Link } from "react-router-dom";
export default function Header(props) {
  const [openNav, setOpenNav] = useState(false);
  const { scrolling } = props;

  function openNavFunc() {
    setOpenNav((prevBool) => !prevBool);
  }

  return (
    <div className=" relative">
      <header
        className={`bg-black h-[72px]
        transition duration-300 ease-in-out
        ${scrolling || openNav ? "md:bg-black" : "md:bg-transparent"}
       
         flex justify-between items-center px-3 py-2 md:relative z-40 sticky top-0`}
      >
        {openNav ? (
          <AiOutlineClose
            className="text-white h-10 w-14 cursor-pointer hidden md:block"
            onClick={openNavFunc}
          />
        ) : (
          <AiOutlineMenu
            className="text-white h-10 w-14 cursor-pointer hidden md:block"
            onClick={openNavFunc}
          />
        )}
        <img
          src={logoSrc}
          alt="logo"
          className={` h-14 transition duration-300 ease-in-out ${
            scrolling || openNav
              ? "md:absolute md:h-16 md:top-1.5 md:left-20"
              : "md:h-28 md:absolute md:top-14 md:left-24"
          } 
     
          
          `}
        />
        {openNav ? (
          <AiOutlineClose
            className="text-white h-7 w-10 cursor-pointer md:hidden"
            onClick={openNavFunc}
          />
        ) : (
          <AiOutlineMenu
            className="text-white h-7 w-10 cursor-pointer md:hidden"
            onClick={openNavFunc}
          />
        )}
        <ul className=" hidden md:flex gap-8  text-xl mr-10 text-cream ">
          <li className=" cursor-pointer  hover:text-gold transition duration-150 ease-in-out font-loaMuangDon">
            <Link to='contact'>
            ORDER
            </Link> 
          </li>
          <li className=" cursor-pointer  hover:text-gold transition duration-150 ease-in-out font-loaMuangDon">
           <Link to='contact'>
           LOCATION
           </Link> 
          </li>
        </ul>
      </header>
      <div
        style={{ height: "calc(100vh - 72px)" }}
        className={` bg-black z-40 h-[calc('100vh - 72px')] w-[100%]  absolute  transition duration-300 ease-in-out flex justify-center   ${
          openNav ? "" : "translate-x-[-100%]"
        } `}
      >
        <div className=" bg-black w-[80px] h-[100vh] hidden md:flex md:flex-col items-center  justify-center space-y-6 absolute left-0">
          <p className=" text-3xl capitalize  font-loaMuangDon ">
            z <br />e <br /> s <br />t
          </p>
        </div>
        <div className="flex justify-center  items-center">
          <div className=" flex gap-8 md:gap-5 items-center flex-col">
            <ul className=" flex flex-col gap-8  md:gap-5 items-center">
              <li
                className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-3xl select-none font-lekton font-bold uppercase"
                onClick={openNavFunc}
              >
                <Link to="/">home</Link>
              </li>

              <li
                className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-3xl select-none font-lekton font-bold uppercase"
                onClick={openNavFunc}
              >
                <Link to="menu">menu</Link>
              </li>

              <li
                className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-3xl select-none font-lekton font-bold uppercase"
                onClick={openNavFunc}
              >
                <Link to="gallery">gallery</Link>
              </li>

              <li
                className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-3xl select-none font-lekton font-bold uppercase"
                onClick={openNavFunc}
              >
                <Link to="about">About</Link>
              </li>

              <li
                className=" text-cream hover:text-gold transition duration-150 ease-in-out cursor-pointer text-3xl select-none font-lekton font-bold uppercase"
                onClick={openNavFunc}
              >
                <Link to="contact">contact us</Link>
              </li>
            </ul>
            <div className="flex gap-2  ">
              <img
                src={facebook}
                className=" h-8 cursor-pointer"
                alt="facebook"
              />
              <img
                src={instagram}
                className=" h-8 cursor-pointer"
                alt="instagram"
              />
            </div>
            <div className=" min-w-[300px]">
              <button className=" uppercase bg-cream text-black py-3 w-full font-loaMuangDon hover:bg-lightBlack hover:text-cream hover:outline-cream hover:outline hover:outline-[1px] mb-3">
                Order
              </button>
              <button className=" uppercase bg-cream text-black py-3 w-full font-loaMuangDon hover:bg-lightBlack hover:text-cream hover:outline-cream hover:outline hover:outline-[1px]">
                Make A reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
