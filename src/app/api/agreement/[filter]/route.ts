import { NextRequest, NextResponse } from "next/server";
import { filterAgreement } from "@/app/data/agreement/crud";

export interface Params {
    filter: string
}


export const GET = async (_: NextRequest, { params }: { params: Params }) => {
    try{
        
        const agreements = await filterAgreement(params.filter)
        return NextResponse.json(agreements)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}
