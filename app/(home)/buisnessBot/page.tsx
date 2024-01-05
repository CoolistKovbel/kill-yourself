"use client";

import BuisnessForm from "@/components/buisnessBot/BuisnessForm";

function BuisnessBot() {
  return (
    <div className="w-full h-screen bg-[#222] text-white">
      <header>
        <h2 className="text-2xl md:text-4xl font-bold">Buisness Bot Chat</h2>
        <p className="text-sm mt-2">
          If you need help with buisness or generating an idea for a store this
          is the perfect tool for your use case.
        </p>
      </header>

      {/* Form */}
      <BuisnessForm />
    </div>
  );
}

export default BuisnessBot;
