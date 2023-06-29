import './App.css'
import Cooki from './components/Cooki'
import { useState } from 'react'


function App() {
  const [number, setNumber] = useState(1)

  const imgRanmdom = () => {
    setNumber(Math.floor(Math.random() * 4) + 1) 
  }

  const bgStyle = {
    backgroundImage: `url(/Fondo${number}.jpg)`
  } 

  return (
    <>
    <div className='bg' style={bgStyle}>
      <h1 className='title'>Galleta de la furtuna</h1>
    <button className='switch' onClick={imgRanmdom}>probar mi suerte</button>
        <Cooki number={number}/>
    </div>
    </>
  )
}

export default App
