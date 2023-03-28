import React from 'react'
import { Outlet } from "react-router-dom"
import { Header } from './Header'

export const Index = () => {
  return (
    <div>
        <header>
            <Header/>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
