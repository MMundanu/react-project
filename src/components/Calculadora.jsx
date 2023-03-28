import { evaluate } from 'mathjs';
import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import style from './stilo.module.css';


export const Calculadora = () => {


  const [input, setInput] = useState('');
  const [ultimoBotonOperacionPresionado, setUltimoBotonOperacionPresionado] = useState(null);


  const agregarInput = (valor) =>{

    if(ultimoBotonOperacionPresionado && isNaN(valor)){
      return
    }
     setInput(input + valor)
     if(!isNaN(valor)){
      setUltimoBotonOperacionPresionado(null)
     }else{
      setUltimoBotonOperacionPresionado(valor)
     }
  }

  const resultado = () => {
     input && setInput(evaluate(input))
  }

  const clear = () => {
    setInput('')
    setUltimoBotonOperacionPresionado(null)
  }

  return (
    <div >
      <h1>Calculadora</h1>
      <div className={style.calculadora}>
        <div className={style.input} >
          {input}
        </div >
        <div className={style.filaDeBotones} >
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('1')} >1</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('2')} >2</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('3')} >3</Button></div>
          <div className='fila'><Button className={style.botonOperador} onClick={() => agregarInput('-')} >-</Button></div>
        </div>
        <div className={style.filaDeBotones}>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('4')} >4</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('5')} >5</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('6')} >6</Button></div>
          <div className='fila'><Button className={style.botonOperador} onClick={() => agregarInput('*')} >*</Button></div>
        </div>
        <div className={style.filaDeBotones}>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('7')} >7</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('8')} >8</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('9')} >9</Button></div>
          <div className='fila'><Button className={style.botonOperador} onClick={() => agregarInput('/')} >/</Button></div>
        </div>
        <div className={style.filaDeBotones}>
          <div className='fila'><Button className={style.botonOperador} onClick={resultado} >=</Button></div>
          <div className='fila'><Button className={style.boton} onClick={() => agregarInput('0')} >0</Button></div>
          <div className='fila'><Button className={style.botonOperador} onClick={() => agregarInput('.')} >.</Button></div>
          <div className='fila'><Button className={style.botonOperador} onClick={() => agregarInput('+')} >+</Button></div>
        </div>
        <div className='w-100' >
          <Button className={style.clear} onClick={clear}>Clear</Button>
        </div>
      </div>
    </div>
  )
}
