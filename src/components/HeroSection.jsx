import React from 'react'
import facebook from "../assets/facebook.png";
import instagram from "../assets/instgram.png";
export default function HeroSection(props) {
    const {img,titleFirstLine,titleSecondLine,titleLastLine,position} = props
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        // height: '80vh', // Set the container's height to 90% of the viewport height
      };
      
      
      const divStyle = {
        background: `url("${img}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundWidth: "100vw",
        aspectRatio: "16/9",
        backgroundPosition: position,
        flex: 1, // Allow the inner div to grow and occupy remaining space
        color: "white",
      };
  return (
    <div style={containerStyle} className=" h-[90vh] md:h-screen relative">
        <div
          style={divStyle}
          className=" bg-cover bg-no-repeat  bg-home  md:aspect-video md:bg-auto"
        >
       
          <div className=" bg-black w-[80px] h-[100vh] hidden lg:flex md:flex-col items-center justify-between space-y-6 absolute top-0">
            <p></p>
            <p className=" text-3xl capitalize  font-loaMuangDon">
              z <br />e <br /> s <br />t
            </p>
            <div className=" justify-self-end mb-4">
              <img src={facebook} className=" h-10 mb-3" alt="facebook" />
              <img src={instagram} className=" h-10 mb-3" alt="instagram" />
            </div>
          </div>
          <div className=" md:ml-32 flex max-w-fit md:mt-32 mx-auto ">
            <p className=" text-3xl  md:text-4xl text-center font-kronaOne mt-24 leading-10">
             {titleFirstLine}<br className="md:hidden" />{" "} {titleSecondLine} <br />{" "}
              <span className=" text-center">{titleLastLine}</span>
            </p>
          </div>
        </div>
      </div>
  )
}
