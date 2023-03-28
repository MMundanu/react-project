import React from 'react'
import style from './stilo.module.css'
import logo from '../../public/tarea.png'

export const Inicio = () => {
  return (
    <div>
      <h1>App React</h1>
        <div className={style.logoInicio} >
          <img src={logo} alt="" />
        </div>
    </div>
  )
}
