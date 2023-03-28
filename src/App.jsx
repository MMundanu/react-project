import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Index } from "./components";
import { Inicio } from "./components/Inicio";
import {Calculadora} from './components/Calculadora'
import { Contador } from "./components/Contador";
import { Tareas } from "./components/Tareas";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}>
        <Route index element={<Inicio/>}/>
        <Route path='calculadora' element={<Calculadora />} />
        <Route path='contador' element={<Contador/>} />
        <Route path="tareas" element={<Tareas />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
