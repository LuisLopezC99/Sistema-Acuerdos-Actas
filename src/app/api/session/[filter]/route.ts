import { NextResponse } from "next/server";
import prisma from "../../../../libs/client"
import { Params } from "../../agreement/[filter]/route";
import { readFilterSession } from "../../../data/session/crud";


const GET = async (_:any, { params } : {params : Params}) => {
    const sessions = await readFilterSession(params.filter)
    return NextResponse.json(sessions)
}

export default GET