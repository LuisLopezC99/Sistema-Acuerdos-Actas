import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../libs/client"
import { readSessions, createSession, updateSession } from "../../data/session/crud";



export const GET = async ()  =>{
    const tab_session = await readSessions()
    return NextResponse.json(tab_session)
}


export const POST = async (request: NextRequest) => {
    const newInsert = await createSession( await request.json())
    return NextResponse.json(newInsert)
}

export const PUT = async (request: NextRequest) =>{
    const newUpdate = await updateSession(await request.json())
    return NextResponse.json(newUpdate)
}