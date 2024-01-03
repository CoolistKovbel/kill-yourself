"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "../ui/use-toast";



const FormSchema = z.object({
  username: z.string().min(4, { message: "Must be 4 or more characters long" }),
  email: z.string().min(4, { message: "Must be 4 or more characters long" }),
  password: z.string().min(4, { message: "Must be 4 or more characters long" }),
  metaAddress: z.string().min(4, { message: "Must be 4 or more characters long" }),
})


function SignUpClient() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      metaAddress: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const formD = new FormData();
      formD.append("username", values.username);
      formD.append("email", values.email);
      formD.append("password", values.password);
      formD.append("MetaAddress", values.metaAddress);

      const res = await fetch("/api/user", {
        method: "post",
        body: formD
      });

      form.reset()


      if(res.status === 200) {
        toast({
          title: "Noice",
          description: "Account created sign in to access site"
        })
      } else {
        toast({
          title: "Noice",
          description: "Something failed try again"
        })
      }

    } catch (error: any) {
      console.log(error?.response?.data);
      //   toast(`💀 ${error?.response?.data}`);
    }
  };


  return (
    <div className="p-4 text-white">

      {/* Header? */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-2">Sign Up</h2>
        <p className="text-sm">Remeber your details when signing up</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="my user" {...field}  className="text-black"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" {...field} className="text-black"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@gg.com" {...field} className="text-black"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="metaAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Meta Address</FormLabel>
                <FormControl>
                  <Input placeholder="0x123" {...field} className="text-black"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="mt-5 w-full">Submit</Button>
        </form>
      </Form>
    </div>
  );
}

export default SignUpClient;
