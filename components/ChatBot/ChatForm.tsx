"use client";

import React from "react";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import * as z from "zod";

interface ChatFormProps {
  convoSetMessage: any;
}

const formSchema = z.object({
  prompt: z.string().min(2, {
    message: "prompt must be at least 2 characters.",
  }),
  option: z.string(),
});

function ChatForm({ convoSetMessage }: ChatFormProps) {
  const router = useRouter();

  const convoCommands = [
    {
      bot: 1,
      command:
        "A helpful study partner who is ready to help and solve any problem, question, or topic,",
      text: "NORM",
    },
    {
      bot: 2,
      command:
        "Act as a stand-up comedian. I will provide you with some topics related to current events and you will use your wit, creativity, and observational skills to create a routine based on those topics. You should also be sure to incorporate personal anecdotes or experiences into the routine in order to make it more relatable and engaging for the audience. My first request is “I want an humorous take on politics.",
      text: "joker",
    },
    {
      bot: 3,
      command:
        "Act as a motivational coach. I will provide you with some information about someone’s goals and challenges, and it will be your job to come up with strategies that can help this person achieve their goals. This could involve providing positive affirmations, giving helpful advice or suggesting activities they can do to reach their end goal. My first request is I need help motivating myself to stay disciplined while studying for an upcoming exam",
      text: "Motovation Coach",
    },
    {
      bot: 4,
      command:
        "Act as a research assistant and gather information on a specific topic for me:",
      text: "Virtual Research Assistant",
    },
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      option: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const options = convoCommands.map((opt) => {
    return (
      <SelectItem key={crypto.randomUUID()} value={opt.command}>
        {opt.text}
      </SelectItem>
    );
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      //   Sending message

      const userMessage = {
        role: "user",
        content: values.prompt,
      };

      const botMessage = {
        role: "system",
        content: values.option,
      };

      const newMessages = [botMessage, userMessage];

      const res = await fetch("/api/chat-message", {
        method: "POST",
        body: JSON.stringify({
          newMessages,
        }),
      });

      if (res.ok) {
        const responseJson = await res.json(); // Extract response data
        console.log(responseJson, "Thisistheresponse from api in chat form")
        
        convoSetMessage((current: any) => [
          ...current,
          userMessage,
          responseJson,
        ]);
        form.reset();
      } else {
        // Handle non-successful responses, e.g., show an error message
        console.error("Request failed with status: " + res.status);
      }
    } catch (error: any) {
      console.log(error);
      //   Possible pro model
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="p-4 bg-[#334] text-black"
        >
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <textarea
                    className="overflow-auto w-full h-20 resize-none p-2"
                    placeholder="give me message"
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

          <Button type="submit" className="w-full mt-2" disabled={isLoading}>
            generate
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default ChatForm;
