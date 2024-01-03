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

function SignUpClient() {
  const form = useForm();
  return (
    <div className="p-4 text-white">
      {/* Header? */}
      <div className="mb-4">
        <h2 className="text-2xl md:text-5xl font-bold mb-2">Sign Up</h2>
        <p className="text-sm">Remeber your details when signing up</p>
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

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="email@gg.com" {...field} />
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
                  <Input placeholder="0x123" {...field} />
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
