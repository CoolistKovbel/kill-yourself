"use client";

import BuisnessForm from "@/components/buisnessBot/BuisnessForm";
import BuisnessMessage from "@/components/buisnessBot/BuisnessMessage";


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
      <BuisnessMessage />

    </div>
  );
}

export default BuisnessBot;
