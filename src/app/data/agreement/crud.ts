import prisma from "../../../libs/client"

interface GetAgreement {
    id: number
    topic: string
    description: string
    asignedTo: string
    deadline: Date
    sessionId: number
    state: string
    agreementId: string
}

interface PushAgreement {
    topic: string
    description: string
    asignedTo: string
    deadline: Date
    sessionId: number
    state : string
    agreementId: string
}


export const createAgreement = async (agreement: GetAgreement) => {
    return await prisma.tab_agreement.create({
        data: agreement,
    })
}

export const readAgreement = async () => {
    return await prisma.tab_agreement.findMany()
}

export const updateAgreement = async (agreement: GetAgreement) => {
    const { id, topic, description, asignedTo, deadline, sessionId, state, agreementId } = agreement
    return await prisma.tab_agreement.update({
        where: {
            id
        },
        data: {
            topic,
            description,
            asignedTo,
            deadline,
            sessionId,
            state,
            agreementId
        }
    })
}

export const filterAgreement = async (filter: string) => {
    return await prisma.tab_agreement.findMany({
        where: {
            OR: [
                {
                    topic: filter
                },
                {
                    description: filter
                },
                {
                    asignedTo: filter
                },
                
                {
                    state: filter
                },
                {
                    agreementId: filter
                },
            ]
        },
        take : 30
    })  
}