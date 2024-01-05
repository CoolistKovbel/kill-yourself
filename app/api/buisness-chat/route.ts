import { NextResponse } from "next/server"


export function POST(req:Request) {
    try {


        return NextResponse.json("Here we are again.", {status: 200})


        
    } catch (error) {
        console.log("Error in buisness chat rooute")
        return NextResponse.json(error, {status: 500})
    }
}