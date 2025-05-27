import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Calculadora', () => {
  test('renderiza la calculadora correctamente', () => {
    render(<App />);
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('0');
  });

  test('puede agregar dígitos al display', () => {
    render(<App />);
    
    // Presionar algunos botones numéricos
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    
    // Verificar que el display muestre los números presionados
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('123');
  });

  test('puede realizar una suma básica', () => {
    render(<App />);
    
    // Realizar la operación 2 + 3 = 5
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    // Verificar el resultado
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('5');
  });

  test('puede realizar una resta', () => {
    render(<App />);
    
    // Realizar la operación 8 - 3 = 5
    fireEvent.click(screen.getByText('8'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    
    // Verificar el resultado
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('5');
  });

  test('puede realizar una multiplicación', () => {
    render(<App />);
    
    // Realizar la operación 4 × 5 = 20
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('×'));
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('='));
    
    // Verificar el resultado
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('20');
  });

  test('puede realizar una división', () => {
    render(<App />);
    
    // Realizar la operación 10 / 2 = 5
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('/'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    
    // Verificar el resultado
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('5');
  });

  test('el botón C limpia el display', () => {
  render(<App />);
  
  // Agregar algunos números - seleccionar el botón 5 (primer elemento con texto '5')
  const buttons5 = screen.getAllByText('5');
  fireEvent.click(buttons5[0]); // El botón 5
  fireEvent.click(buttons5[0]); // El botón 5 de nuevo
  
  // Verificar que el display muestre 55
  const displayElement = screen.getByTestId('display');
  expect(displayElement).toHaveTextContent('55');
  
  // Presionar el botón C
  fireEvent.click(screen.getByText('C'));
  
  // Verificar que el display se haya limpiado a 0
  expect(displayElement).toHaveTextContent('0');
});

  test('puede cambiar el signo de un número', () => {
    render(<App />);
    
    // Agregar un número
    fireEvent.click(screen.getByText('5'));
    
    // Cambiar el signo
    fireEvent.click(screen.getByText('+/-'));
    
    // Verificar que el número sea negativo
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('-5');
    
    // Cambiar el signo nuevamente
    fireEvent.click(screen.getByText('+/-'));
    
    // Verificar que el número sea positivo nuevamente
    expect(displayElement).toHaveTextContent('5');
  });

  test('puede convertir un número a porcentaje', () => {
    render(<App />);
    
    // Agregar un número
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('0'));
    
    // Convertir a porcentaje
    fireEvent.click(screen.getByText('%'));
    
    // Verificar que el número se haya convertido a 0.5 (50%)
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('0.5');
  });

  test('puede agregar un punto decimal', () => {
    render(<App />);
    
    // Agregar un número y un punto decimal
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    
    // Verificar que el display muestre el número decimal
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('5.2');
  });

  test('no permite agregar múltiples puntos decimales', () => {
    render(<App />);
    
    // Agregar un número y puntos decimales
    fireEvent.click(screen.getByText('5'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('.'));
    fireEvent.click(screen.getByText('2'));
    
    // Verificar que solo se haya agregado un punto decimal
    const displayElement = screen.getByTestId('display');
    expect(displayElement).toHaveTextContent('5.2');
  });
});
