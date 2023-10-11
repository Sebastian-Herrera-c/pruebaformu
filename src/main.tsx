import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// import NumberCalculator from './Ejercicio-1/ejerciciouno.tsx'
// import Listaa from './ejercicio-3/appp.tsx'
// import Medicion from './ejercicio-2/medicion.tsx'
import { BrowserRouter } from 'react-router-dom'





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    {/* <NumberCalculator />
   <Medicion/>
    <Listaa/> */}
    </BrowserRouter>
  </React.StrictMode>,
)
