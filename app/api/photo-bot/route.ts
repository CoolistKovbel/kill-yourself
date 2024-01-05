import { NextResponse } from "next/server"


export async function POST(req:Request) {
    try {
        
        const body = await req.json()
        

        


        return NextResponse.json(body,{status: 200})
    } catch (error) {
        console.log("Sorry there is an error in  a post request for a photo bot")
        return NextResponse.json(error, {status:500})
    }
}


