import React from 'react'
import { Link } from 'react-router-dom'
import style from './stilo.module.css'
import logo from '../../public/tarea.png'

export const Header = () => {
  return (
    <div className={style.header} >
        <div className={style.logo}>
          <Link
          to='/'
          >
          <img src={logo} alt="" />
          </Link>
        </div>
        <div className={style.navBar}>
            <Link
            to='/calculadora'
            className={style.link}
            >Calculadora
            </Link>
            <Link
            className={style.link}
            to='/contador'
            >
                Contador
            </Link>
            <Link 
            className={style.link}
            to='/tareas'
            >
              Tarea
            </Link>
        </div>
    </div>
  )
}
