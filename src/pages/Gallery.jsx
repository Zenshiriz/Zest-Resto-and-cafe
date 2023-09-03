import React from "react";
import HeroSection from "../components/HeroSection";
import heroImg from "../assets/galleryHeroImg.png";
import restoImagesImg from "../assets/restoImagesImg.png";
import videoGalleryImg from "../assets/videoGalleryImg.png";
import galleryImg1 from "../assets/Gallery Images/galleryImg1.png";
import galleryImg2 from "../assets/Gallery Images/galleryImg2.png";
import galleryImg3 from "../assets/Gallery Images/gelleryImg3.png";
import galleryImg4 from "../assets/Gallery Images/gelleryImg4.png";
import galleryImg5 from "../assets/Gallery Images/gelleryImg5.png";
import galleryImg6 from "../assets/Gallery Images/gelleryImg6.png";
import galleryImg7 from "../assets/Gallery Images/gelleryImg7.png";
import galleryImg8 from "../assets/Gallery Images/gelleryImg8.png";
import galleryImg9 from "../assets/Gallery Images/gelleryImg9.png";
import galleryImg10 from "../assets/Gallery Images/gelleryImg10.png";
import galleryImg11 from "../assets/Gallery Images/gelleryImg11.png";
import galleryImg12 from "../assets/Gallery Images/gelleryImg12.png";
export default function Gallery() {

const galleryArr = [galleryImg1, galleryImg2, galleryImg3, galleryImg4, galleryImg5, galleryImg6, galleryImg7, galleryImg8, galleryImg9, galleryImg10, galleryImg11, galleryImg12]

const galleryImgEls = galleryArr.map( galleryImg =>(
  <div className=" w-[330px] h-[399px] bg-[#808080]">
    <img src={galleryImg} className=" max-w-[330px] max-h-[399px]" alt="" loading="lazy" />
  </div>

))

  return (
    <>
      <HeroSection
        img={heroImg}
        titleFirstLine={"Experience"}
        titleSecondLine={"Mangalore’s"}
        titleLastLine={"Best Restaurant Flavor"}
        position={"40%"}
      />
      <div>
        <div className=" md:flex">
          <div
            className="w-[100%] h-[50vh] md:h-[100vh] bg-cover bg-[bottom]"
            style={{ backgroundImage: `url('${restoImagesImg}')` }}
          >
            <div className=" bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.6)] w-full h-full cursor-pointer flex justify-center items-center">
              <div className="flex flex-col items-center">
                <p className=" font-italiana text-white text-2xl md:text-4xl">
                  Resto Images
                </p>
                <button className=" text-center uppercase bg-cream text-black max-w-[135px] py-2 w-full px-2 font-loaMuangDon hover:bg-transparent hover:text-cream hover:outline-cream hover:outline hover:outline-[1px] mt-3">
                  Explore
                </button>
              </div>
            </div>
          </div>
          <div
            className="w-[100%] h-[50vh] md:h-[100vh] bg-cover bg-[bottom]"
            style={{ backgroundImage: `url('${videoGalleryImg}')` }}
          >
            <div className=" bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.6)] w-full h-full cursor-pointer flex justify-center items-center">
              <div className="flex flex-col items-center">
                <p className=" font-italiana text-white text-2xl md:text-4xl">
                  Video
                </p>
                <button className=" uppercase bg-cream text-black min-w-[135px] py-2 w-full px-2 font-loaMuangDon hover:bg-transparent hover:text-cream hover:outline-cream hover:outline hover:outline-[1px] mt-3">
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h2 className="font-italianno text-center text-[60px] md:text-[90px] lg:text-[120px] text-gold">
            Food & Drinks{" "}
          </h2>
          <div className="mb-6 grid justify-items-center gap-y-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {galleryImgEls}
          </div>
        </div>
      </div>
    </>
  );
}
