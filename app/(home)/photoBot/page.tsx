import PhotoBotForm from "@/components/photoBot/PhotoBotForm";
import React from "react";


function PhotoBot() {


  return (
    <div className="w-full h-screen bg-[#121] text-white">
      <header className="p-4">
        <h2 className="text-2xl md:text-4xl font-bold">Photo Bot </h2>
        <p className="font-bold text-sm">Generate a few images based on your input</p>
      </header>

      {/* ÷Forms  */}
      <PhotoBotForm />

    </div>
  );
}

export default PhotoBot;
