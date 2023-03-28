import React from 'react'
import style from '../stilo.module.css'
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const Tarea = ({id, texto, completada, completarTarea, eliminarTarea }) => {
  return (
    <div className={completada ? style.tareaCompleted : style.tareaIncompleted}>
        <div className={style.tareaTexto}
        onClick={() => completarTarea(id)}
        >
            {texto}
        </div>
        <div className={style.tareaIcon}
        onClick={() => eliminarTarea(id)}
        >
            <AiOutlineCloseCircle  />
        </div>
    </div>
  )
}
