import { NextResponse, NextRequest } from "next/server";
import { Params } from "../../agreement/[filter]/route";
import { readFilterSession } from "../../../data/session/crud";


export const GET = async (_: NextRequest, { params } : {params : Params}) => {
    try{
        
        const sessions = await readFilterSession(params.filter)
        return NextResponse.json(sessions)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}
