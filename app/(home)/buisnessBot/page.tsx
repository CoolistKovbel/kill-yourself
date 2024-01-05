"use client";

import BuisnessForm from "@/components/buisnessBot/BuisnessForm";
import Image from "next/image";

function BuisnessBot() {
  return (
    <div className="w-full h-screen bg-[#222] text-white">
      
      <header className="p-4 bg-[#322]">
        <h2 className="text-2xl text-5xl font-bold mb-4">Buisness Bot Chat</h2>
        <p className="text-sm mt-2">
          If you need help with buisness or generating an idea for a store this
          is the perfect tool for your use case.
        </p>
      </header>

      {/* Form */}
      <BuisnessForm />

      {/* Results */}
      <div>
        <h2 className="text-xl md:text-2xl my-2">Results:</h2>

        <div className="flex items-center gap-4 flex-col ">
        
        {/* Messages */}

        <div
          key={crypto.randomUUID()}
          className="p-4 w-full flex flex-col md:flex-row items-start gap-x-8 rounded-lg bg-[#222] shadow-lg "
        >
          <div className="flex items-center justify-around w-[80%] md:w-[30%] mx-auto gap-2">
            <h4 className="text-md md:text-2xl font-bold underline">KillYourselfLyub</h4>

            <div className="w-20 h-20 relative">
              <Image src="/tenuki2.jpeg" alt="fuck my life" fill className="rounded-lg"/>
            </div>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            magni id temporibus quidem cum quasi veniam quisquam aut
            consequuntur, illo facilis natus, ducimus necessitatibus? Magnam
            natus quam vel! Expedita, quos?
          </p>
        </div>

        <div
          key={crypto.randomUUID()}
          className="p-4 w-full flex flex-col md:flex-row items-start gap-x-8 rounded-lg bg-[#222] shadow-lg "
        >
          <div className="flex items-center justify-around w-[80%] md:w-[30%] mx-auto">
            <h4 className="text-md md:text-2xl font-bold underline">DeBot</h4>

            <div className="w-20 h-20 relative">
              <Image src="/smile.png" alt="fuck my life" fill />
            </div>
          </div>

          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            magni id temporibus quidem cum quasi veniam quisquam aut
            consequuntur, illo facilis natus, ducimus necessitatibus? Magnam
            natus quam vel! Expedita, quos?
          </p>
        </div>


      </div>

      </div>

    </div>
  );
}

export default BuisnessBot;
