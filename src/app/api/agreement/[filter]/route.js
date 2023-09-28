import { NextResponse } from "next/server";
import { prisma } from "../../../../libs/prisma"


export const GET = async (_, { params }) => {
    const regexDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;

    let whereClause = {};

    if (Number(params.filter)) {
        whereClause.id = Number(params.filter);
    } else if (params.filter) {
        whereClause = {
            OR: [
                { topic: params.filter },
                { description: params.filter },
                { asignedTo: params.filter },
                { sessionId: Number(params.filter) ? params.filter : -1 },
                { state: params.filter },
                { agreementId: params.filter },
            ],
        };
        if (regexDate.test(params.filter)) {
            whereClause.deadline = params.filter;
        }
    }

    const agreements = await prisma.tab_agreement.findMany({
        where: whereClause,
    });
}

export default GET