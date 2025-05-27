export function calculate(a, b, operacion) {
  switch (operacion) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b === 0 ? NaN : a / b;
    default:
      return b;
  }
}