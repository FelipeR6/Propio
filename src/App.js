import React, { useState } from 'react';
import './App.css';
import { calculate } from './utils/calculatorUtils';

function App() {
  const [display, setDisplay] = useState('0');
  const [operacion, setOperacion] = useState(null);
  const [valorPrevio, setValorPrevio] = useState(null);
  const [reiniciarDisplay, setReiniciarDisplay] = useState(false);

  const agregarDigito = (digito) => {
    if (display === '0' || reiniciarDisplay) {
      setDisplay(digito);
      setReiniciarDisplay(false);
    } else {
      setDisplay(display + digito);
    }
  };

  const agregarDecimal = () => {
    if (reiniciarDisplay) {
      setDisplay('0.');
      setReiniciarDisplay(false);
      return;
    }
    
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const limpiar = () => {
    setDisplay('0');
    setOperacion(null);
    setValorPrevio(null);
    setReiniciarDisplay(false);
  };

  const manejarOperacion = (op) => {
    const valor = parseFloat(display);
    
    if (valorPrevio === null) {
      setValorPrevio(valor);
    } else if (operacion) {
      const resultado = calcular(valorPrevio, valor, operacion);
      setDisplay(String(resultado));
      setValorPrevio(resultado);
    }
    
    setOperacion(op);
    setReiniciarDisplay(true);
  };

  const calcular = (a, b, operacion) => {
    return calculate(a, b, operacion);
  };

  const calcularResultado = () => {
    if (!operacion || valorPrevio === null) return;
    
    const valorActual = parseFloat(display);
    const resultado = calcular(valorPrevio, valorActual, operacion);
    
    setDisplay(String(resultado));
    setOperacion(null);
    setValorPrevio(null);
    setReiniciarDisplay(true);
  };

  const cambiarSigno = () => {
    setDisplay(String(-parseFloat(display)));
  };

  const convertirPorcentaje = () => {
    setDisplay(String(parseFloat(display) / 100));
  };

  return (
    <div className="calculadora">
      <div className="display" data-testid="display">{display}</div>
      <div className="botones">
        <button className="operador" onClick={limpiar}>C</button>
        <button className="operador" onClick={cambiarSigno}>+/-</button>
        <button className="operador" onClick={convertirPorcentaje}>%</button>
        <button className="operador" onClick={() => manejarOperacion('/')}>/</button>
        
        <button onClick={() => agregarDigito('7')}>7</button>
        <button onClick={() => agregarDigito('8')}>8</button>
        <button onClick={() => agregarDigito('9')}>9</button>
        <button className="operador" onClick={() => manejarOperacion('*')}>×</button>
        
        <button onClick={() => agregarDigito('4')}>4</button>
        <button onClick={() => agregarDigito('5')}>5</button>
        <button onClick={() => agregarDigito('6')}>6</button>
        <button className="operador" onClick={() => manejarOperacion('-')}>-</button>
        
        <button onClick={() => agregarDigito('1')}>1</button>
        <button onClick={() => agregarDigito('2')}>2</button>
        <button onClick={() => agregarDigito('3')}>3</button>
        <button className="operador" onClick={() => manejarOperacion('+')}>+</button>
        
        <button className="doble" onClick={() => agregarDigito('0')}>0</button>
        <button onClick={agregarDecimal}>.</button>
        <button className="operador" onClick={calcularResultado}>=</button>
      </div>
    </div>
  );
}

export default App;