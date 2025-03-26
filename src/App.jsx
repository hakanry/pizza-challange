import './App.css'
import Siparis from './pages/Siparis'
import Anasayfa from './pages/Anasayfa'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Sonuc from './pages/Sonuc'

function App() {


  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
        <Redirect to='/anasayfa'/>
        </Route>
        <Route path='/anasayfa'>
        <Anasayfa />
        </Route>
        
        <Route path='/siparis' ><Siparis /></Route>
        <Route path='/sonuc' ><Sonuc /></Route>

        
      </Switch>
    </BrowserRouter>
    
    </>
  )
}

export default App