import React, { useState } from 'react'
import { FormTareas } from './FormTareas'
import { Tarea } from './Tarea';
import style from '../stilo.module.css'


export const ListaDeTareas = () => {

    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        console.log(tarea);
        if(tarea.texto.trim()){
            tarea.texto = tarea.texto.trim()
            const tareaActualizada = [tarea, ...tareas]
            setTareas(tareaActualizada)
            console.log(tareaActualizada);
        }
    }

    const eliminarTarea = (id) => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas)
    } 

    const completarTarea = (id) => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id) {
                tarea.completada = !tarea.completada
            }
            return tarea
        })
        setTareas(tareasActualizadas)
    }


  return (
    < >
    <FormTareas onSubmit={agregarTarea}/>

    <div>
        {
           tareas.map((tarea) =>
            <Tarea 
                key={tarea.id}
                id={tarea.id} 
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
            />)
        }
    </div>

    </>
  )
}
