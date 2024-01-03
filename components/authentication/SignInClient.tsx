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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";


const FormSchema = z.object({
  username: z.string().min(4, { message: "Must be 4 or more characters long" }),
  password: z.string().min(4, { message: "Must be 4 or more characters long" }),
})


function SignInClient() {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {

      console.log(values);

      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false
      });

      console.log('result form sign in', res)
      
      if(res?.ok){
        router.push("/profile")
      }

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="p-4 text-white">
      {/* Header? */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-2">Sign In</h2>
        <p className="text-sm">Provide your credentials to login</p>
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
                  <Input placeholder="my user" {...field} className="text-black"/>
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
                  <Input type="password" placeholder="password" {...field} className="text-black" />
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

export default SignInClient;
