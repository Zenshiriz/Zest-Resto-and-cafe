import React from "react";
import HomeBgSrc from "../assets/bg-home.png";
import Header from "../components/Header";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instgram.png";
import pizzaImg from "../assets/pizza-img.png";
import pizzaImg2 from "../assets/pizza-img2.png";

import containerImg from "../assets/our-container-img.png";
import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";



export default function Home(props) {

  
  return (
    <>
    <div>
   
     <HeroSection img={HomeBgSrc} titleFirstLine={" Welcome to the "} titleSecondLine={"World"} titleLastLine={"of Flavor"} position={"70%"}/>
      <div className=" bg-black px-4 py-7 md:py-12 md:w-5/6 relative">
        <h3 className="text-white font-lancelot text-center text-3xl pb-7 md:pb-12 md:text-5xl">Our promises</h3>
        <p className=" text-white font-lekton text-lg md:text-2xl  pb-10 md:pb-14">At Zest, we've curated a culinary journey that takes your taste buds on an exhilarating adventure through the heart of Middle Eastern, American, Italian, and Turkish cuisines. Our mission is simple yet bold: to redefine the fast food experience by offering a symphony of authentic flavors that resonate with food lovers from all walks of life.</p>
        <Link to="menu" className=" cursor-pointer text-white font-lekton hover:text-gold transition ease-in-out duration-150 text-base md:text-xl">View Menu</Link>
        <img src={containerImg} alt="" className=" absolute right-0 hidden md:block max-w-screen-[70%] w-[70%] lg:max-w-[750px] md:max-w-[480px] lg:max-h-[380px] top-[75%] aspect-video" />
      </div>
      <div>
        <div className=" flex items-center  md:items-center flex-col px-auto">
        <div className="flex gap-x-3 px-3 py-2">
        <p className={` font-italianno text-[60px] md:text-[120px] lg:text-[180px] text-gold`}><span className="lg:mr-[33rem] ">The</span>  <br className="hidden md:block" /> <span className=" md:ml-28">Stylish </span> </p>
        <img src={pizzaImg} className=" w-40  md:mt-52 md:w-80 lg:mt-72 lg:max-w-[26rem] "  alt="" />
        </div>
        <div className="flex gap-x-3 px-3 pb-3">
          <img src={pizzaImg2} className=" w-20  md:mt-30 md:w-40 lg:w-60" alt="" />
          <p className=" font-italianno text-[60px] md:text-[120px] lg:text-[180px] text-gold">And <span className="">Flavorful</span></p>
        </div>
        </div>
      </div>
      </div>
    </>
  );
}
