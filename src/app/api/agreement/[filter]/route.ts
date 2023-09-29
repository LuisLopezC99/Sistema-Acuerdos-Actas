import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/client"
import { filterAgreement } from "@/app/data/agreement/crud";

export interface Params {
    filter: string
}


export const GET = async (_: any, { params }: { params: Params }) => {
    const agreements = await filterAgreement(params.filter)
    return NextResponse.json(agreements)
}

export default GET