import { mockDeep } from 'jest-mock-extended';
import { prisma } from './prisma';

const prismaMock = mockDeep(prisma); // Mock the prisma instance

beforeEach(() => {
  prismaMock.mockReset(); // Reset the mock before each test
});

export default prismaMock;
