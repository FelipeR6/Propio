/**
 * Realiza operaciones matemáticas básicas entre dos números.
 * @param a Primer operando
 * @param b Segundo operando
 * @param operation Operación a realizar ('+', '-', '*', '/')
 * @returns El resultado de la operación o NaN en caso de división por cero
 */
export function calculate(a: number, b: number, operation: string): number {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      if (b === 0) {
        return NaN; // Devuelve NaN al dividir por cero
      }
      return a / b;
    default:
      return b; // Devuelve el segundo operando si la operación es desconocida
  }
}