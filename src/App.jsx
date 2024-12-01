
import { useRef, useState} from 'react'
import MenuBar from './components/menuBar/MenuBar.jsx'
import CanvasComponent from './components/myCanvas/CanvasComponent.jsx'

function App() {
  const canvas = useRef(null)
  const [selectedShape, setSelectedShape] = useState(null); // Track the selected shape
  const [properties, setProperties] = useState({
    width: 0,
    height: 0,
    radius: 0,
    side:0 ,
    rx:0 ,
    ry:0 ,
    strokeWidth: 3,
    fill: "#FFFFFF",
  });
  return (
    <>
      <MenuBar canvas={canvas} selectedShape={selectedShape} setSelectedShape={setSelectedShape} properties={properties} setProperties={setProperties}/>
      <CanvasComponent canvas={canvas} setSelectedShape={setSelectedShape} setProperties={setProperties}/>
    </>
  )
}

export default App
