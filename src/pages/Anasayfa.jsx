import { Link } from 'react-router-dom'
import './Anasayfa.css'
import Siparis from './Siparis'

export default function Anasayfa(){
    return (
        <>
            <div className='anasayfa'>
            <h1 className="barlow-black-italic">Teknolojik Yemekler</h1>
            <p className='barlow-medium-anasayfa'>KOD ACIKTIRIR</p>
            <p className='barlow-medium-anasayfa'>PİZZA, DOYURUR</p>

            <Link to={'./Siparis'}><button className='anasayfa-button'>ACIKTIM</button></Link>
            
           </div>
        </>
    )
}