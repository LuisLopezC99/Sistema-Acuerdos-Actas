import { NextResponse } from "next/server";
import prisma from "../../../../libs/client"
import { Params } from "../../agreement/[filter]/route";
import { readFilterSession } from "../../../data/session/crud";


const GET = async (_:any, { params } : {params : Params}) => {
    try{
        
        const sessions = await readFilterSession(params.filter)
        return NextResponse.json(sessions)
    }catch(error){
        return NextResponse.json({ error: "Hubo un error al procesar la solicitud" }, { status: 500 });
    }
}

export default GET