"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  description: z.string().min(2, {
    message: "description must be at least 2 characters.",
  }),
  amount: z.string().min(1),
  resolution: z.string().min(1),
  medium: z.string(),
  title: z.string(),
});

function PhotoBot() {
  const router = useRouter();

  const amountOptions = [
    {
      value: "1",
      label: "1 Photo",
    },
    {
      value: "2",
      label: "2 Photos",
    },
    {
      value: "3",
      label: "3 Photos",
    },
    {
      value: "4",
      label: "4 Photos",
    },
    {
      value: "5",
      label: "5 Photos",
    },
  ];

  const resolutionOptions = [
    {
      value: "256x256",
      label: "256x256",
    },
    {
      value: "512x512",
      label: "512x512",
    },
    {
      value: "1024x1024",
      label: "1024x1024",
    },
  ];

  const mediumOptions = [
    {
      value: "anime style content",
      label: "amime",
    },
    {
      value: "3d style content",
      label: "3d",
    },
    {
      value: "photo style content",
      label: "photo",
    },
    {
      value: "realistic style content",
      label: "realistic",
    },
    {
      value:
        "Make sure this is going to look professional and like a real svg logo",
      label: "logo",
    },
  ];

  // Form Validation Schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: "",
      amount: "1",
      resolution: "512x512",
      medium: "",
    },
  });

  let isLoading = form.formState.isSubmitting;

  const optionx = amountOptions.map((opt) => {
    return (
      <SelectItem key={crypto.randomUUID()} value={opt.value}>
        {opt.label}
      </SelectItem>
    );
  });

  const optiony = resolutionOptions.map((opt) => {
    return (
      <SelectItem key={crypto.randomUUID()} value={opt.value}>
        {opt.label}
      </SelectItem>
    );
  });

  const optionz = mediumOptions.map((opt) => {
    return (
      <SelectItem key={crypto.randomUUID()} value={opt.value}>
        {opt.label}
      </SelectItem>
    );
  });


  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {

     console.log(values)

      
    } catch (err: any) {
      console.log(err);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <header>
        <h2>Photo Bot </h2>
        <p>Generate a few images based on your input</p>
      </header>

      {/* ÷Forms  */}
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <FormControl className="m-0 p-0">
                    <Input placeholder="description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="resolution"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an resolution" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>{optiony}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select an amount" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>{optionx}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="medium"
              render={({ field }) => (
                <FormItem className="col-span-12 lg:col-span-10">
                  <Select
                    disabled={isLoading}
                    onValueChange={field.onChange}
                    value={field.value}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select style" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>{optionz}</SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="col-span-12 lg:col-span-10 w-full m-0"
              disabled={isLoading}
            >
              generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}

export default PhotoBot;
