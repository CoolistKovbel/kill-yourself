import PhotoBotForm from "@/components/photoBot/PhotoBotForm";
import React from "react";


function PhotoBot() {


  return (
    <div className="w-full h-screen bg-[#121] text-white">
      <header className="p-4 bg-[#321]">
        <h2 className="text-2xl text-5xl font-bold mb-4 ">Photo Bot </h2>
        <p className="font-bold text-sm">Generate a few images based on your input</p>
      </header>

      {/* ÷Forms  */}
      <PhotoBotForm />

      {/* Createi guess a slide show */}

      <div>
        <h2>Image carosal</h2>
      </div>

    </div>
  );
}

export default PhotoBot;
