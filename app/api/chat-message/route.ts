import { db } from "@/lib/db";
import { NextResponse } from "next/server";

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

    console.log(da)
    

    return NextResponse.json(newMessages, { status: 200 });

  } catch (error) {

    console.log(error);
    return NextResponse.json(error, { status: 200 });
  }
}
