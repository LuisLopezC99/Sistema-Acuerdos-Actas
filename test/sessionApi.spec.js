/* global expect, test */
import prismaMock from '../src/libs/singleton.mjs'
import { POST } from '../src/app/api/session/route'

test('should create new session ', async () => {
  const session = {
    date: "2023-10-26T21:30:00.000Z",
    report: "2023-19",
    type: "VAMOOOOS!",
    facebookUrl: "testing.com"
  }

  prismaMock.tab_session.create.mockResolvedValue(session)

  await expect(POST(session)).resolves.toEqual({
    id: 4,
    date: "2023-10-26T21:30:00.000Z",
    report: "2023-19",
    type: "VAMOOOOS!",
    facebookUrl: "testing.com"
  })
})

