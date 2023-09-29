/* global expect, test */

import { prismaMock } from '../../src/libs/singleton'
import {createSession, readFilterSession, readSessions, updateSession} from '../../src/app/data/session/crud'


test('should create new session ', async () => {
  const session = {
    id: 1,
    date: new Date('2023-10-26T21:30:00.000Z'),
    report: "2023-19",
    type: "VAMOOOOS!",
    facebookUrl: "testing.com"
  }

  prismaMock.tab_session.create.mockResolvedValue(session)
  

  await expect(createSession(session)).resolves.toEqual({
    id: 1,
    date: new Date('2023-10-26T21:30:00.000Z'),
    report: "2023-19",
    type: "VAMOOOOS!",
    facebookUrl: "testing.com"
  })
})


test('should read all session ', async () => {
  const session = [{
    id: 1,
    date: new Date('2023-10-26T21:30:00.000Z'),
    report: "2023-19",
    type: "VAMOOOOS!",
    facebookUrl: "testing.com"
  },
  {
    id: 2,
    date: new Date('2023-09-26T21:30:00.000Z'),
    report: "2023-20",
    type: "FUNCIONANDO!",
    facebookUrl: "testing2.com"
  }]

  prismaMock.tab_session.findMany.mockResolvedValue(session)
  
  const sessions = await readFilterSession("VAMOOOOS!")

  expect(sessions).toEqual(session)
})

test('should read filter sessions ', async () => {
  const session = [{
    id: 1,
    date: new Date('2023-10-26T21:30:00.000Z'),
    report: "2023-19",
    type: "VAMOOOOS!",
    facebookUrl: "testing.com"
  },
  {
    id: 2,
    date: new Date('2023-09-26T21:30:00.000Z'),
    report: "2023-20",
    type: "FUNCIONANDO!",
    facebookUrl: "testing2.com"
  }]

  prismaMock.tab_session.findMany.mockResolvedValue(session)
  
  const sessions = await readSessions()

  expect(sessions).toEqual(session)
})

test('should update a session ', async () => {
    const session = {
      id: 1,
      date: new Date('2023-10-26T21:30:00.000Z'),
      report: "2023-19",
      type: "VAMOOOOS!",
      facebookUrl: "testing.com"
    };
    
    prismaMock.tab_session.update.mockResolvedValue(session)

    await expect(updateSession(session)).resolves.toEqual({
      id: 1,
      date: new Date('2023-10-26T21:30:00.000Z'),
      report: "2023-19",
      type: "VAMOOOOS!",
      facebookUrl: "testing.com"
    })
})