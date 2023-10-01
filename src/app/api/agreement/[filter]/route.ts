import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../libs/client"
import { filterAgreement } from "@/app/data/agreement/crud";

export interface Params {
    filter: string
}


export const GET = async (_: any, { params }: { params: Params }) => {
    try{
        
        const agreements = await filterAgreement(params.filter)
        return NextResponse.json(agreements)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}

export default GET