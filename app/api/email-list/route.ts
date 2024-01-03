import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface idk {
    email: string;
    id: string;
}

export async function POST(res: Request) {
  try {
    const { email } = await res.json();
    console.log(email)

    // const exist = await db.mailingList.findUnique({
    //   where: {
    //     email: email
    //   } as idk,
    // });

    // console.log(exist)

    // if (exist) {
    //   return  NextResponse.json("Use another email this one on the list already....", {status: 401})
    // }

    const resp = await db.mailingList.create({
      data: {
        email: email,
      },
    });

    console.log(resp)

    return NextResponse.json({message: "success"}, { status: 200 });

  } catch (error) {
    console.log("Error in email list route");
    return NextResponse.json(error, { status: 500 });
  }
}
