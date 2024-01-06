import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-white   pt-6 p-y-[20px] flex items-center justify-between flex-col md:flex-row">
      <div className="flex flex-col gap-[14px] p-4 w-full">
        <div className="flex items-center gap-[10px]">
          <Image src="/smile.png" alt="ghostieve" width={80} height={80} />
          <h1 className="text-[24px] md:text-[48px] font-bold">BoredAI</h1>
        </div>
        <p className="font-semibold">
          Trying to make life easier slow and steady.. Please support our
          future:
          <span className="text-[12px]">
            0x1C352E8F3e035c524F2385818b44859906d3c705
          </span>
        </p>
        <div className="mt-[10px] flex gap-[10px]">
          <Github />
          <Instagram />
          <Twitter />
        </div>
      </div>

      <div className="flex justify-between gap-[100px] p-4 text-right">

        <div className=" flex flex-col gap-[10px] font-semibold">
          <span className="bg-emerald-500 p-2 text-center rounded-md font-bold ">
            Links
          </span>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/">Contact</Link>
        </div>

        <div className=" flex flex-col gap-[10px] font-semibold">
          <span className="bg-emerald-500 p-2 text-center rounded-md font-bold">
            Social
          </span>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
