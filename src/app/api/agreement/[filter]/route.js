import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma"
import { isNumberObject } from "util/types";


export const GET = async (_, { params }) => {
    const agreements = await prisma.tab_agreement.findMany({
        where: {
            OR: [
                {
                    topic: params.filter
                },
                {
                    description: params.filter
                },
                {
                    asignedTo: params.filter
                },
                
                {
                    state: params.filter
                },
                {
                    agreementId: params.filter
                },
            ]
        },
        take : 100
    })
    return NextResponse.json(agreements)
}

export default GET