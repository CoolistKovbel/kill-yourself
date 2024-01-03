"use client";
import React from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function SignInClient() {
  const form = useForm();
  return (
    <div className="p-4 text-white">
      {/* Header? */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-2">Sign In</h2>
        <p className="text-sm">Provide your credentials to login</p>
      </div>

      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="my user" {...field} />
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
                  <Input type="password" placeholder="password" {...field} />
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
