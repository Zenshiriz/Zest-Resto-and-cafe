import React from "react";
import HeroSection from "../components/HeroSection";
import menuImg from "../assets/menuImg.png";
import menuImg1 from "../assets/menuImg1.png";
import menuImg2 from "../assets/menuImg2.png";
import menuImg3 from "../assets/menuImg3.png";
import menuImg4 from "../assets/menuImg4.png";

export default function Menu() {
  const menuBox = {
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    aspectRatio: "1",
    backgroundPosition: "center/bottom",
  };

  const boxObject = [
    { img: menuImg1, title: "starters", Animation: "lg:animate-beatBox" },
    { img: menuImg2, title: "Main course", Animation: "lg:animate-beatBoxSecond" },
    { img: menuImg3, title: "Drinks", Animation: "lg:animate-beatBoxThird" },
    { img: menuImg4, title: "Dessert", Animation: "lg:animate-beatBoxForth" },
  ];

  const boxEls = boxObject.map(boxEl =>(
    <div
            style={{...menuBox, backgroundImage: `url("${boxEl.img}")`}}
            className={` w-[250px] h-[450px] cursor-pointer ${boxEl.Animation}`}
          >
            <div className="h-full w-full bg-[rgba(0,0,0,.3)] hover:bg-transparent flex justify-center items-end">
              <p className=" text-white uppercase font-loaMuangDon text-xl text-center mb-8">
                {boxEl.title}
              </p>
            </div>
          </div>
  ))
  return (
    <>
      <HeroSection titleFirstLine={"Our Menu"} img={menuImg} position={"60%"} />
      <div className=" bg-cream pb-10">
        <div className=" text-center">
          <h2 className="font-italianno text-[60px] md:text-[90px] lg:text-[120px] text-gold">
            Our Menu
          </h2>
        </div>
        <div
          className="flex gap-x-10 px-10 overflow-x-auto lg:justify-center md:pb-24"
          style={{  scrollbarWidth: "none",
          /* Hide the scrollbar track */
          WebkitScrollbarWidth: "none", }}
        >
          {boxEls}
        </div>
      </div>
    </>
  );
}
