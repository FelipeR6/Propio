import { calculate } from '../test/utils/calculatorUtils';

describe('Prueba de suma', () => {
  it('debería sumar dos números correctamente', () => {
    expect(calculate(2, 3, '+')).toBe(5);
    expect(calculate(-5, 3, '+')).toBe(-2);
    expect(calculate(0, 0, '+')).toBe(0);
    expect(calculate(1.5, 2.5, '+')).toBe(4);
  });
});