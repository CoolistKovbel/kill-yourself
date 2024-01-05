"use client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "prompt must be at least 2 characters.",
  }),
  option: z.string(),
});

function BuisnessForm() {
  const router = useRouter();

  const convoCommands = [
    {
      bot: 1,
      command: "Write a mission statement for, ",
      text: "mission statement",
    },
    {
      bot: 2,
      command: "Can you come up with a good brand name for, ",
      text: "Brand Name",
    },
    {
      bot: 3,
      command: "Can you create a brand description for,",
      text: "Brand Description",
    },
    {
      bot: 4,
      command: "Can you give me a good product description for, ",
      text: "product",
    },
    {
      bot: 5,
      command: "Write a buisness plan for,, ",
      text: "Buisness plan",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      option: "",
    },
  });

  let isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);


        const d = await fetch("/api/buisness-chat", {
            method: "POST",
            body: JSON.stringify(values)
        })



    } catch (error: any) {
      console.log(error);
      //   Possible pro model
    } finally {
      router.refresh();
    }
  };

  const options = convoCommands.map((opt) => {
    return (
      <SelectItem key={crypto.randomUUID()} value={opt.command}>
        {opt.text}
      </SelectItem>
    );
  });

  return (
    <div className="">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 bg-[#324] text-black"
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="">
                <FormControl className="m-0 p-0">
                  <textarea
                    className="overflow-auto w-full p-2"
                    placeholder="Let me create your idea into something easier to handle"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="option"
            render={({ field }) => (
              <FormItem className="col-span-12 lg:col-span-10">
                <FormControl className="m-0 p-0">
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a specific bot" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>{options}</SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className=" w-full mt-3" disabled={isLoading}>
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default BuisnessForm;
