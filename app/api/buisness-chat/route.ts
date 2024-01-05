import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // console.log(body," in the buisness chat")

    const user = body.prompt;
    const analy = body.option;

    const chatsComplete = await openai.chat.completions.create({
      messages: [
        { role: "system", content: analy },
        { role: "user", content: user },
      ],
      model: "gpt-3.5-turbo",
    });

    return NextResponse.json(chatsComplete.choices[0].message, { status: 200 });
  } catch (error) {
    console.log("Error in buisness chat rooute");
    return NextResponse.json(error, { status: 500 });
  }
}
