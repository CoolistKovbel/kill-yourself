import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { UserAuthForm } from "./UserAuthForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import SignInClient from "./SignInClient";
import SignUpClient from "./SignUpClient";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthClient() {
  return (
    <>
      <div className="container my-10 relative h-[800px] flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* Left panel */}
        <div className="relative h-full flex-col p-20 text-white flex">
          
          <div className="absolute inset-0 ">
            <Image
              src="/feature.gif"
              width={1280}
              height={843}
              alt="Authentication"
              className="block h-full rounded-[40px] shadow-lg md:ml-10 "
            />
          </div>

          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            BoredAI
          </div>

          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;In a world where people need to work along as humans
                instead of fight, play mind games, scam, kill.&rdquo;
              </p>
              <footer className="text-sm">lyub</footer>
            </blockquote>
          </div>
        </div>

        <div className="lg:p-8">

            <Tabs defaultValue="sign-in" className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] bg-[#123]">
                
                <TabsList>
                    <TabsTrigger value="sign-in">Sign In</TabsTrigger>
                    <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
                </TabsList>

                <TabsContent value="sign-in">

                    <SignInClient />

                </TabsContent>

                <TabsContent value="sign-up">
                    <SignUpClient />
                </TabsContent>
            </Tabs>

        </div>
      </div>
    </>
  );
}
