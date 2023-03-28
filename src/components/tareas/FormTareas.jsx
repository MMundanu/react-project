import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
import style from '../stilo.module.css'

export const FormTareas = (props) => {

    const [input, setInput] = useState('');

    const handleCambio = (e) =>{
        setInput(e.target.value)
        console.log(e.target.value);
    }

   const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('hola');
    const nuevaTarea = {
        id: uuidv4(),
        texto: input,
        completado: false
    }
    props.onSubmit(nuevaTarea)
    setInput('')
   } 


  return (
    <Form className={style.formTarea} onSubmit={handleSubmit}>
        <Form.Group >
            <Form.Control
            className={style.inputTarea}
            type='text'
             name='tarea' 
             placeholder='Escribe una tera'
             autocomplete="off"
             onChange={handleCambio}
             value={input}
              />
        </Form.Group>
        <Button type='submit' className={style.reset}>Asignar terea</Button>
    </Form>
  )
}
