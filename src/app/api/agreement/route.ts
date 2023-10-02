import { NextRequest, NextResponse } from "next/server";
import { readAgreement, createAgreement, updateAgreement } from "@/app/data/agreement/crud";

export const GET = async ()  =>{
    try{
        const tab_agreement = await readAgreement()
        return NextResponse.json(tab_agreement)

    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}

export const POST = async (request: NextRequest) => {
    try{
        const newInsert = await createAgreement( await request.json())
        return NextResponse.json(newInsert)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}

export const PUT = async (request: NextRequest) => {
    try{
        const newUpdate = await updateAgreement(await request.json())
        return NextResponse.json(newUpdate)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}



