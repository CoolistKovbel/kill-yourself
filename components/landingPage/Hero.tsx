"use client";

import Image from "next/image";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  email: z.string().min(2).max(50),
});

function Hero() {
  const { toast } = useToast()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    try {
      const res = await fetch("/api/email-list", {
        method: "POST",
        body: JSON.stringify(values)
      })

      const gg =  await  res.json()

      console.log(gg)

      toast({
        title: "Alert 🌋",
        description: "Account listed succesfullly"
      })

      form.reset()

    } catch (error) {
      console.log(error)
    }


  }

  return (
    <div className="w-full h-[720px] bg-[#111] text-white">
      <div className="flex items-center justify-around flex-col md:flex-row">
        <div className="w-[300px] md:w-[600px] bg-[#122] p-5 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-5xl font-bold mb-2">One Of a Kind AI</h2>
          <p className="text-sm">The perfect tool for your everyday activities</p>
        </div>

        <div className="w-[300px] h-[300px] relative mt-5">
          <Image src="/DarkHorsev12-v2.png" alt="smile" fill />
        </div>
      </div>

      <div className="w-[60%] mx-auto text-center mt-10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-1xl md:text-3xl font-bold uppercase">Email List: </FormLabel>
                  <FormControl>
                    <Input placeholder="bab@gg.com" {...field} className="text-black"/>
                  </FormControl>
                  <FormDescription>
                    You will be provided with a weekly news letter covering an
                    updates with site, bots, or future events
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[85%]">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default Hero;
