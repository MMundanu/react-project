import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import style from './stilo.module.css'

export const Contador = () => {

  const [click, setClick] = useState(0);

  const handleClick = () => {
    setClick(click + 1);
  }

  const resetContador = () => {
    setClick(0);
  }

  return (
    <div>
       <h1>Contador</h1> 
       <div>
        <div className={style.contador}>
          {click}
        </div>


        <div className={style.clickers} >
            <Button className={style.click}onClick={handleClick} >Click</Button>
            <Button className={style.reset} onClick={resetContador} >Reiniciar</Button>
        </div>
       </div>

    </div>
  )
}
