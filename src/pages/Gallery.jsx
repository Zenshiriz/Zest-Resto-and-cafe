import React, { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import heroImg from "../assets/galleryHeroImg.png";
import restoImagesImg from "../assets/restoImagesImg.png";
import restaurentVideo from "../assets/restaurent.mp4"
import videoGalleryImg from "../assets/videoGalleryImg.png";
import restaurentImg1 from "../assets/restaurantImg1.png";
import restaurentImg2 from "../assets/restaurantImg2.png";
import restaurentImg3 from "../assets/restaurantImg3.png";
import restaurentImg4 from "../assets/restaurantImg4.png";
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
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Gallery() {
  const [translateValue , setTranslateValue] = useState(0)
  const [intervalId , setIntervalId] = useState(null)
  const [buttonToggleStates , setButtonToggleStates] = useState({
    photoBtnState : false,
    videoBtnState : false
  })
  const restaurantElsLength = document.getElementsByClassName("restaurent-img").length - 1;
  const galleryArr = [
    galleryImg1,
    galleryImg2,
    galleryImg3,
    galleryImg4,
    galleryImg5,
    galleryImg6,
    galleryImg7,
    galleryImg8,
    galleryImg9,
    galleryImg10,
    galleryImg11,
    galleryImg12,
  ];

  const galleryImgEls = galleryArr.map((galleryImg, index) => (
    <div key={index} className=" w-[320px] h-[380px] ">
      <img
        src={galleryImg}
        className=" max-w-[320px] object-cover max-h-[380px]"
        alt=""
        loading="lazy"
      />
    </div>
  ));
  function openClosePhotosFunc(){
    setButtonToggleStates(prevObj => ({ photoBtnState: false, ...prevObj }))
  }

  function togglePhotosFunc(event){
    clearInterval(intervalId)
   if (event.currentTarget.classList.contains("left")){
    setTranslateValue(prevValue => (prevValue === 0 ?restaurantElsLength   : prevValue - 1))
    }else{
      setTranslateValue(prevValue => (prevValue === restaurantElsLength ? 0 : prevValue + 1))
    }
  }
  useEffect(()=>{
    const interval = setInterval(()=>{
      setTranslateValue(prevValue => (prevValue === restaurantElsLength ? 0 : prevValue + 1))
      setIntervalId(interval)
    },2000)
    
    return ()=>{
      clearInterval(interval)
    }
  },[translateValue])
  
 

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
        <div className=" md:flex relative ">
          <div className={`${buttonToggleStates.photoBtnState ? "block": "hidden"} h-screen w-screen absolute bg-[rgba(0,0,0,.8)] transition duration-300 ease-in-out flex items-center justify-center   `}>
            <FaChevronLeft id="left" className="left bg-transparent text-white absolute text-3xl md:h-14 md:w-7 top-[50%] md:top-[45%] left-2 md:left-4 cursor-pointer hover:opacity-50" onClick={togglePhotosFunc} />
            <FaChevronRight className=" bg-transparent text-white absolute   text-3xl md:h-14 md:w-7 right-2 md:right-4 top-[50%] md:top-[45%] cursor-pointer hover:opacity-50" onClick={togglePhotosFunc} />
            <AiOutlineClose className=" absolute text-white right-4 w-9 h-9 top-8 cursor-pointer" onClick={()=> 
              setButtonToggleStates(prevObj => ({  ...prevObj,photoBtnState: false })) }/>    
            <div className="h-[50vh] lg:h-[90vh] md:max-w-[980px] lg:w-auto   max-w-[80vw]  w-[450px] overflow-x-hidden">
            <p className=" absolute text-white  text-lg  bottom-[25%] md:bottom-[10%] left-[45%] md:left-[50%] z-20">{translateValue + 1}/{restaurantElsLength + 1}</p>
              <div style={{transform : `translate(-${translateValue}00%)`}} className={` h-full w-full flex relative transition duration-300 ease-in-out`}>
                <img
                  src={restaurentImg1}
                  loading="lazy"
                  className="restaurent-img w-full md:object-cover  object-contain lg:min-w-[980px] h-full"
                  alt=""
                />
                <img
                  src={restaurentImg2}
                  loading="lazy"
                  className="restaurent-img w-full md:object-cover object-contain h-full lg:min-w-[980px]"
                  alt=""
                />
                <img
                  src={restaurentImg3}
                  loading="lazy"
                  className="restaurent-img w-full md:object-cover object-contain h-full lg:min-w-[980px]"
                  alt=""
                />
                <img
                  src={restaurentImg4}
                  loading="lazy"
                  className="restaurent-img w-full md:object-cover object-contain h-full lg:min-w-[980px]"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className={`${buttonToggleStates.videoBtnState ? "block": "hidden"} h-screen w-screen absolute bg-[rgba(0,0,0,.8)] transition duration-300 ease-in-out  `}>
            <AiOutlineClose className=" absolute text-white right-4 w-9 h-9 top-8 cursor-pointer" onClick={()=> 
              setButtonToggleStates(prevObj => ({  ...prevObj, videoBtnState: false })) }/>    
            <div className=" flex items-center justify-center h-full">
              <video src={restaurentVideo} className="w-[90vw]  aspect-video object-cover lg:max-h-[80vh]" autoplay={true} controls></video>
            </div>
          </div>
          <div
            className="w-[100%] h-[50vh] md:h-[100vh] bg-cover bg-[bottom]"
            style={{ backgroundImage: `url('${restoImagesImg}')` }}
          >
            <div className=" bg-[rgba(0,0,0,.3)] hover:bg-[rgba(0,0,0,.6)] w-full h-full cursor-pointer flex justify-center items-center">
              <div className="flex flex-col items-center">
                <p className=" font-italiana text-white text-2xl md:text-4xl">
                  Resto Images
                </p>
                <button className=" text-center uppercase bg-cream text-black max-w-[135px] py-2 w-full px-2 font-loaMuangDon hover:bg-transparent hover:text-cream hover:outline-cream hover:outline hover:outline-[1px] mt-3" onClick={()=> setButtonToggleStates(prevObj => ({ ...prevObj,photoBtnState : true}))}>
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
                <button className=" uppercase bg-cream text-black min-w-[135px] py-2 w-full px-2 font-loaMuangDon hover:bg-transparent hover:text-cream hover:outline-cream hover:outline hover:outline-[1px] mt-3"  onClick={()=> setButtonToggleStates(prevObj => ({ ...prevObj,videoBtnState : true}))}>
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
          <div className="mb-10 grid justify-items-center gap-y-9  grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {galleryImgEls}
          </div>
        </div>
      </div>
    </>
  );
}
