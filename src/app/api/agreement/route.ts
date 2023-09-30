import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../libs/client"
import { readAgreement, createAgreement, updateAgreement } from "@/app/data/agreement/crud";

export const GET = async ()  =>{
    const tab_agreement = await readAgreement()
    return NextResponse.json(tab_agreement)
}

export const POST = async (request: NextRequest) => {
    const newInsert = await createAgreement( await request.json())
    return NextResponse.json(newInsert)
}

export const PUT = async (request: NextRequest) => {
    const newUpdate = await updateAgreement(await request.json())
    return NextResponse.json(newUpdate)
}



