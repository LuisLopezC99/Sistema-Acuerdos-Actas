import { NextResponse } from "next/server";
import {prisma} from "../../../libs/prisma"



export const GET = async ()  =>{
    const tab_session = await prisma.tab_session.findMany()
    return NextResponse.json(tab_session)

}