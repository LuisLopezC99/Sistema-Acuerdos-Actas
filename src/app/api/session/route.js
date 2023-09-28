import { NextResponse } from "next/server";
import {prisma} from "../../../libs/prisma"



export const GET = async ()  =>{
    const tab_session = await prisma.tab_session.findMany()
    return NextResponse.json(tab_session)
}


export const POST = async (request) =>{
    console.log(request)
    const {date, report, type, facebookUrl} = await request.json()
    const newInsert = await prisma.tab_session.create({
        data: {
            date,
            report,
            type,
            facebookUrl
        }
    })
    return NextResponse.json(newInsert)
}

export const PUT = async (request) =>{
    const {id, date, report, type, facebookUrl} = await request.json()
    const newUpdate = await prisma.tab_session.update({
        where: {
            id
        },
        data: {
            date,
            report,
            type,
            facebookUrl
        }
    })
    return NextResponse.json(newUpdate)
}