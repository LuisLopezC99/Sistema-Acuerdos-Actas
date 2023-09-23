import { NextResponse } from "next/server";
import {prisma} from "../../../libs/prisma"



const GET = async ()  =>{
    const insert = await prisma.tab_agreement.create({
        data: {
            session_date: '20/20/1996',
            report: 'Picha',
            session_type: 'Joder',
            facebook_link: 'pelos.com'
        }
    })
    const tab_agreement = await prisma.tab_agreement.findMany()
    
    return NextResponse.json(tab_agreement)
}