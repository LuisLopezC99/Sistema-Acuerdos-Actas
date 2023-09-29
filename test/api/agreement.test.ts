import { prismaMock } from '../../src/libs/singleton'
import { createAgreement, readAgreement, updateAgreement, filterAgreement } from '../../src/app/data/agreement/crud'

test('should create new agreement ', async () => {
    const agreement = {
        id : 1,
        topic: "Calles",
        description: "Terminando",
        asignedTo: "Juan@gmail.com",
        deadline: new Date('2023-10-26T21:30:00.000Z'),
        sessionId: 1,
        state: "Pendiente",
        agreementId: "001"
    }
  
    prismaMock.tab_agreement.create.mockResolvedValue(agreement)
  
    await expect(createAgreement(agreement)).resolves.toEqual({
        id : 1,
        topic: "Calles",
        description: "Terminando",
        asignedTo: "Juan@gmail.com",
        deadline: new Date('2023-10-26T21:30:00.000Z'),
        sessionId: 1,
        state: "Pendiente",
        agreementId: "001"
    })
  })

  test('should update new agreement ',async () => {
    const agreement = {
      id : 1,
      topic: "Calles",
      description: "Terminando",
      asignedTo: "Juan@gmail.com",
      deadline: new Date('2023-10-26T21:30:00.000Z'),
      sessionId: 1,
      state: "Pendiente",
      agreementId: "001"
   };
    
    prismaMock.tab_agreement.update.mockResolvedValue(agreement)

    await expect(updateAgreement(agreement)).resolves.toEqual({
      id : 1,
      topic: "Calles",
      description: "Terminando",
      asignedTo: "Juan@gmail.com",
      deadline: new Date('2023-10-26T21:30:00.000Z'),
      sessionId: 1,
      state: "Pendiente",
      agreementId: "001"
    })
  })


  test('should get all agreements', async () => {
    const agreement = {
        id : 1,
        topic: "Calles",
        description: "Terminando",
        asignedTo: "Juan@gmail.com",
        deadline: new Date('2023-10-26T21:30:00.000Z'),
        sessionId: 1,
        state: "Pendiente",
        agreementId: "001"
    }

    prismaMock.tab_agreement.create.mockResolvedValue(agreement)   
    
    const agreements = await readAgreement() 
  
    await expect(readAgreement()).resolves.toEqual(agreements)})


    test('should get all agreements', async () => {
        const agreement = {
            id : 1,
            topic: "Calles",
            description: "Terminando",
            asignedTo: "Juan@gmail.com",
            deadline: new Date('2023-10-26T21:30:00.000Z'),
            sessionId: 1,
            state: "Pendiente",
            agreementId: "001"
        }
    
        prismaMock.tab_agreement.create.mockResolvedValue(agreement)   
        
        const agreements = await filterAgreement("")
      
        await expect(readAgreement()).resolves.toEqual(undefined)})