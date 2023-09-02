import React from "react";
import HeroSection from "../components/HeroSection";
import heroImg from "../assets/aboutHeroImg.png";
import chefsImg from "../assets/chefsImg.png";
export default function About() {
  return (
    <>
      <HeroSection
        img={heroImg}
        titleFirstLine={"About Zest"}
        titleSecondLine={"And Our Chef"}
        position={"70%"}
      />
      <div className=" py-12 lg:pt-32 lg:flex lg:flex-row-reverse md:justify-between">
        <div className=" w-[80%] lg:w-full m-auto lg:m-0 md:max-w-[500px] md:max-h-[800px] ">
          <img src={chefsImg} className="h-full w-full" alt="" />
        </div>
        <div className=" mt-5 mx-4 md:ml-32">
          <div>
            <p className=" font-loaMuangDon text-gold text-2xl uppercase md:text-4xl md:mt-20">
              Executive chef
            </p>
            <p className=" font-loaMuangDon text-gold text-3xl uppercase md:text-5xl">
              Mohammad yahya
            </p>
          </div>
          <div className=" mt-6 max-w-xl">
            <p className=" font-loaMuangDon  text-lg">
              With an impressive culinary journey spanning 7 years, Mohammad
              Yahya is the driving force behind the delectable flavors at Zest.
              His extensive expertise covers a wide array of cuisines, from
              crafting Middle Eastern delights to perfecting Italian pizza,
              burgers, and mouthwatering fried chicken. But his creativity
              doesn't stop at savory dishes; Mohammad's mastery extends to
              crafting refreshing mojito drinks and irresistible dessert ice
              creams. His passion and experience shine through in every dish,
              making dining at Zest a true culinary delight.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-lightBlack px-6 py-6 md:px-12 md:pt-12 md:pb-16">
        <div>
          <p className=" text-white font-loaMuangDon uppercase text-2xl md:text-3xl">
            Restaurant manager
          </p>
          <p className=" text-white font-loaMuangDon uppercase text-4xl md:text-5xl mt-2">
            Salahuddin Ayyubi
          </p>
        </div>
        <div className=" mt-14 lg:flex md:mt-24">
          <div className=" lg:w-[50%]">
            <p className=" text-white font-loaMuangDon text-base uppercase md:text-xl">
              About
            </p>
            <p className=" text-white font-loaMuangDon text-4xl md:text-6xl">Zest</p>
          </div>
          <div className=" lg:w-[50%]">
            <p className=" text-white mt-6 font-loaMuangDon lg:text-base text-sm  uppercase">
              At Zest, we believe in the power of quality ingredients. Our chefs
              meticulously select the finest produce, meats, and spices,
              ensuring that each dish we present is a masterpiece of taste and
              texture. From the sizzle of the grill to the final presentation,
              our commitment to excellence shines through in every single bite.
            </p>
            <p className=" text-white mt-6 font-loaMuangDon lg:text-base text-sm uppercase">
              Fast food doesn't have to mean sacrificing quality. Zest redefines
              fast food by blending the convenience of quick service with the
              sophistication of gourmet cuisine. Whether you're grabbing a quick
              bite on the go or settling in for a leisurely meal, our fast food
              creations are a celebration of authenticity and innovation.
            </p>
            <p className=" text-white mt-6 font-loaMuangDon lg:text-base text-sm  uppercase">
              Step into our inviting space, where modern aesthetics meet the
              warmth of Middle Eastern hospitality. Every corner of Zest is
              designed to create an atmosphere that encourages togetherness,
              making your dining experience not just a meal, but a memory to
              savor.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
