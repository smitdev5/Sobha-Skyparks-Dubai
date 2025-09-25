import React from "react";

export default function Banner() {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="../Assets/banner2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for text clarity */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center text-center space-y-6 px-4">
        {/* Logo / Image 1 */}
        {/* <img
          src="../Assets/test-1.png"
          alt="Banner Logo"
          className="w-48 md:w-64 lg:w-72 object-contain"
        /> */}

        {/* Image / Text 2 */}
        {/* <img
          src="../Assets/ctc.png"
          alt="Banner Tagline"
          className="w-56 md:w-72 lg:w-96 object-contain"
        /> */}

        {/* Optional Heading/Text */}
        <h1 className="
            text-xl 
            md:text-3xl 
            lg:text-6xl 
            font-extrabold 
            uppercase 
            tracking-widest
            bg-gradient-to-r from-white/80 via-white/60 to-white/20
            bg-clip-text 
            text-transparent
            drop-shadow-[2px_2px_10px_rgba(0,0,0,0.8)]
          ">
          Introducing <br/> PALM JEBEL ALI
        </h1>
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#about"
        className="absolute items-center justify-center bottom-6 -translate-x-1/2 animate-bounce z-10"
      >
        <i className="ri-arrow-down-circle-fill text-[#997736] text-5xl"></i>
      </a>
    </section>
  );
}
