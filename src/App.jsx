import { Axios } from 'axios'
import { useRef } from 'react'
import MenuBar from './components/menuBar/MenuBar.jsx'
import CanvasComponent from './components/myCanvas/CanvasComponent.jsx'

function App() {
  const canvas = useRef(null)
  return (
    <>
      <MenuBar canvas={canvas}/>
      <CanvasComponent canvas={canvas}/>
    </>
  )
}

export default App
