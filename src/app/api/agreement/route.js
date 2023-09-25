import { NextResponse } from "next/server";
import {prisma} from "../../../libs/prisma"



export const GET = async ()  =>{
    const tab_agreement = await prisma.tab_agreement.findMany()
    return NextResponse.json(tab_agreement)
}


export const POST = async (request) => {
    const {topic, description, asignedTo, deadline, session, state, agreementId} = await request.json()
    const sessionId = Number(session)
    const newInsert = await prisma.tab_agreement.create({
        data: {
            topic,
            description,
            asignedTo,
            deadline,
            sessionId,
            state,
            agreementId
        }
    })
    return NextResponse.json(newInsert)
}

export const PUT = async (request) => {
    const {id, topic, description, asignedTo, deadline, sessionId, state, agreementId} = await request.json()
    const newUpdate = await prisma.tab_agreement.update({
        where: {
            id
        },
        data: {
            topic,
            description,
            asignedTo,
            deadline,
            sessionId,
            state,
            agreementId
        }
    })
    return NextResponse.json(newUpdate)
}



