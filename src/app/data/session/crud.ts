import prisma from "../../../libs/client"


interface CreateSession {
    id: number
    date: Date
    report: string
    type: string
    facebookUrl: string
}


export const createSession = async (session: CreateSession) => {
    return await prisma.tab_session.create({
        data: session,
    })
}

export const readSessions = async () => {
    return await prisma.tab_session.findMany()
}

export const readFilterSession = async (filter: string) => {
    const sessions = await prisma.tab_session.findMany({
        where: {
            OR: [
                {
                    report: filter
                },
                {
                    type: filter
                },
                {
                    facebookUrl: filter
                },
            ]
        },
        take: 30
    })
    return sessions
}

export const updateSession = async (session: CreateSession) => {
    const { id, date, report, type, facebookUrl } = session
    return await prisma.tab_session.update({
        where: {
            id
        },
        data: {
            date,
            report,
            type,
            facebookUrl
        }
    })
}