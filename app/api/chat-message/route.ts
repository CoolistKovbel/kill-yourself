import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});


export async function GET(req: Request) {
  try {
    // const data = await db.transactions.findMany()
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 500 });
  }
}


export async function POST(req: Request) {
  try {
    const da = await req.json();

    const { newMessages } = da;

    console.log(da.newMessages[0], 'what is life')

    console.log(da.newMessages[1])


    const chatsComplete = await openai.chat.completions.create({
      messages: newMessages,
      model: "gpt-3.5-turbo",
    });

    console.log(chatsComplete.choices[0].message);
    

    return NextResponse.json(newMessages, { status: 200 });

  } catch (error) {

    console.log(error);
    return NextResponse.json(error, { status: 200 });
  }
}
