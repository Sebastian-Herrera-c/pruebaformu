import { Route, Routes } from 'react-router-dom';
import './App.css'
import NumberCalculator from './Ejercicio-1/ejerciciouno';
import Medicion from './ejercicio-2/medicion';
import Listaa from './ejercicio-3/appp';
import Layout from './Layout';



function App() {

  return (

      <div>
          <h1>Menu</h1>
          <Routes>
             <Route path="/" element={<Layout/>} >

                  <Route path="/Ejercicio-1" element={<NumberCalculator/>} />
                  <Route path="/ejercicio-2" element={<Medicion/>} />
                  <Route path="/ejercicio-3" element={<Listaa/>} />
                  



             </Route>

          </Routes>

      </div>


  )



}

export default App;