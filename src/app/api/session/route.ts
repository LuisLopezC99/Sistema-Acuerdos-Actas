import { NextRequest, NextResponse } from "next/server";
import { readSessions, createSession, updateSession } from "../../data/session/crud";



export const GET = async ()  =>{
    try{

        const tab_session = await readSessions()
        return NextResponse.json(tab_session)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}


export const POST = async (request: NextRequest) => {
    try{
        const requestData = await request.json();
        console.log('Datos recibidos:', requestData);
        const newInsert = await createSession( requestData)
        
        return NextResponse.json(newInsert)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}

export const PUT = async (request: NextRequest) =>{
    try{
        
        const newUpdate = await updateSession(await request.json())
        return NextResponse.json(newUpdate)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }

}