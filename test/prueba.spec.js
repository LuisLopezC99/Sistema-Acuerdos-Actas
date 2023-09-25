import { sum } from '../src/app/prueba.js';


test('adds 1 + 2 to equal 3', () => {
    const suma = sum
    expect(suma(1, 2)).toBe(3);
});