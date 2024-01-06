import Image from "next/image";
import React from "react";

function AboutPage() {
  return (
    <div className="w-full min-h-screen bg-[#222] text-white p-10">
      <h2 className="text-2xl md:text-4xl font-bold mb-10">About PAGe</h2>

      <p className="text-md leading-6 mb-4">
        I have been trying to develop a good type of client that will allow a
        user quick and easy access to a tool like chatGPT for their AI
        explorations. This is just a basic tool eventually as time goes on will
        be slowly improved into a custom version.{" "}
        <em>Only if nothing spazzezz like it likes to be.</em>
      </p>
      <p className="text-md leading-6 mb-4">
        You are going to be able to communicate with the bot, if you need a
        buddy or helping hand you can always use our <strong>convo</strong> bot.
        There is also going to be a little buisness and photo bot that you can
        use if you need to do anything related in that type of.... niche.
      </p>
      <p className="text-md leading-6 mb-4">
        There will be updates in the future with either an improved bot that or
        a new bot, if you have any improvments that you may reccomend lets be
        friends and check out the repo submit a pull request and ill take a look
        at it.
      </p>
      <p className="text-md leading-6 mb-4">
        You will also be able to either purchase membership or tokens in order
        to use the bot. Tokens which will be connected to the blockchain and
        possibly the membership too.
      </p>

      <div className="w-80 h-80 relative mx-auto">
        <Image src='/DarkHorsev12-v2.png' alt="what logo" fill />
      </div>

    </div>
  );
}

export default AboutPage;
