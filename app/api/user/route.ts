
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { db } from "@/lib/db";
// import { writeFile } from "fs/promises";

interface UserCreateData {
  username: string;
  email: string;
  password: string;
  MetaAddress: string; 
  image: string; 
  membership: boolean
}

export async function POST(req: Request) {
  try {

    const body = await req.formData();

    console.log(body);

    const username = body.get("username")?.toString() as string;
    let password: string = body.get("password")?.toString() as string;
    const email = body.get("email")?.toString() as string;
    const MetaAddress = body.get("MetaAddress")?.toString() as string;

   
    const existingUserbyEmail = await db.user.findUnique({
      where: { email },
    });

    const existingUserbyUsername = await db.user.findUnique({
      where: { username: username },
    });

    const existingEdress = await db.user.findUnique({
      where: { MetaAddress: MetaAddress },
    });

    if (existingUserbyEmail || existingUserbyUsername) {
      return NextResponse.json("need a better name buddy", { status: 409 });
    }

    if (existingEdress) {
      return NextResponse.json("Need another address", { status: 409 });
    }

    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
        MetaAddress: MetaAddress,
        membership: false
      } as UserCreateData,
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(rest, { status: 200 });
    
  } catch (error) {
    console.log(error);
  }
}
