import './App.css'
import Siparis from './pages/Siparis'
import Anasayfa from './pages/Anasayfa'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Sonuc from './pages/Sonuc'

function App() {


  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route 
        <Siparis/>
      </Switch>
    </BrowserRouter>
    
    </>
  )
}

export default App