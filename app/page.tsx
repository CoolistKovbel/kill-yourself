import AuthClient from "@/components/authentication/AuthClient";
import Hero from "@/components/landingPage/Hero";
import { Separator } from "@/components/ui/separator";


export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#222] overflow-hidden w-full min-h-screen">
      
      {/* hEro */}
      <Hero />
      <Separator className="bg-orange-200 rounded-md my-2" />

      {/* Authentication client */}
      <AuthClient />

    </main>
  )
}
