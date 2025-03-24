

import './App.css'
import Anasayfa from '../pages/Anasayfa'
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min' 
import Siparis from '../pages/Siparis'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <BrowserRouter>
      <Siparis />
    </BrowserRouter>
  )
}

export default App
