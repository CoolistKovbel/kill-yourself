import { db } from "@/lib/db"
import { NextResponse } from "next/server"


export async function GET(req:Request) {
    try {
        

        // const data = await db.transactions.findMany()



    } catch (error) {
        console.log(error)
        return NextResponse.json(error, {status:500})
    }
}