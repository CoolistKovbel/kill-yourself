import AuthClient from "@/components/authentication/AuthClient";
import Hero from "@/components/landingPage/Hero";


export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[#222] overflow-hidden w-full min-h-screen">
      
      {/* hEro */}
      <Hero />

      {/* Authentication client */}
      <AuthClient />

    </main>
  )
}
