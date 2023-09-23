import { NextResponse } from "next/server";
import {prisma} from "../../../libs/prisma"



export const GET = async ()  =>{
    const tab_agreement = await prisma.tab_agreement.findMany()
    return NextResponse.json(tab_agreement)
}


