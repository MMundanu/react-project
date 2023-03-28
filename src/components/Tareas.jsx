import React from 'react'
import { ListaDeTareas } from './tareas/ListaDeTareas'
import style from './stilo.module.css'


export const Tareas = () => {
  return (
    <div>
        <div className={style.conteinerTask}>
            <h1>Mis tareas</h1>
            <ListaDeTareas />
        </div>

    </div>
  )
}
