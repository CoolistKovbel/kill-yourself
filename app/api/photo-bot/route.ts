import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_API_KEY,
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { description, resolution, amount, medium, title } = body;

    if (!description) {
      return new NextResponse("description requiered", { status: 400 });
    }

    if (!resolution) {
      return new NextResponse("resolution requiered", { status: 400 });
    }
    if (!amount) {
      return new NextResponse("amount requiered", { status: 400 });
    }
    if (!medium) {
      return new NextResponse("medium requiered", { status: 400 });
    }

    const status = `Please make the following, ${description} in a ${medium}`;

    const photoChat = await openai.images.generate({
      prompt: status,
      n: parseInt(amount, 10),
      size: resolution,
    });

    console.log(photoChat)

    return NextResponse.json(status, { status: 200 });
  } catch (error) {
    console.log("Sorry there is an error in  a post request for a photo bot");
    return NextResponse.json(error, { status: 500 });
  }
}
