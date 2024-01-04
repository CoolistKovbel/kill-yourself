import Image from "next/image";

function ChatMessage() {
  return (
    <div className="bg-[#341] text-white p-4 w-full h-full">
      <h2 className="text-2xl md:text-4xl font-bold">M3ssages</h2>

      <div className="flex items-center justify-center gap-4 flex-col">
        <div
          key={crypto.randomUUID()}
          className="p-8 w-full flex flex-col md:flex-row items-start gap-x-8 rounded-lg"
        >
          <div className="flex items-center  w-[30%]">
            <h4 className="text-xl md:text-2xl font-bold">KillYourSelfLyub</h4>

            <div className="w-20 h-20 relative">
              <Image src="/smile.png" alt="fuck my life" fill />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            magni id temporibus quidem cum quasi veniam quisquam aut
            consequuntur, illo facilis natus, ducimus necessitatibus? Magnam
            natus quam vel! Expedita, quos?
          </p>
        </div>

        <div
          key={crypto.randomUUID()}
          className="p-8 w-full flex flex-col md:flex-row items-start gap-x-8 rounded-lg"
        >
          <div className="flex items-center  w-[30%]">
            <h4 className="text-xl md:text-2xl font-bold">KillYourSelfLyub</h4>

            <div className="w-20 h-20 relative">
              <Image src="/smile.png" alt="fuck my life" fill />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            magni id temporibus quidem cum quasi veniam quisquam aut
            consequuntur, illo facilis natus, ducimus necessitatibus? Magnam
            natus quam vel! Expedita, quos?
          </p>
        </div>

        <div
          key={crypto.randomUUID()}
          className="p-8 w-full flex flex-col md:flex-row items-start gap-x-8 rounded-lg"
        >
          <div className="flex items-center  w-[30%]">
            <h4 className="text-xl md:text-2xl font-bold">KillYourSelfLyub</h4>

            <div className="w-20 h-20 relative">
              <Image src="/smile.png" alt="fuck my life" fill />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            magni id temporibus quidem cum quasi veniam quisquam aut
            consequuntur, illo facilis natus, ducimus necessitatibus? Magnam
            natus quam vel! Expedita, quos?
          </p>
        </div>

        <div
          key={crypto.randomUUID()}
          className="p-8 w-full flex flex-col md:flex-row items-start gap-x-8 rounded-lg"
        >
          <div className="flex items-center  w-[30%]">
            <h4 className="text-xl md:text-2xl font-bold">deBot</h4>

            <div className="w-30 h-30 relative">
              <Image src="/feature.gif" alt="fuck my life" fill />
            </div>
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            magni id temporibus quidem cum quasi veniam quisquam aut
            consequuntur, illo facilis natus, ducimus necessitatibus? Magnam
            natus quam vel! Expedita, quos?
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatMessage;

// message.role === "user"
// ? "bg-[#123] border-white/10"
// : "bg-[#321]"
