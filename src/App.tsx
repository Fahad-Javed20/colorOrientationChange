
import './App.css'
import Flag from './components/FlagsComponents'


export type flagsOrientation = {
  name : string,
  color1: string,
  color2: string,
  color3: string,
  horizontal:boolean
}

function App() {
  
  const flag1:flagsOrientation = {
    name:"Germany",
    color1:"bg-black",
    color2:"bg-red-700",
    color3:"bg-yellow-400",
    horizontal:false,
  }

  return (
    <>
      <Flag name = {flag1.name} color1 = {flag1.color1} color2={flag1.color2} color3={flag1.color3} horizontal = {flag1.horizontal}/>
    </>
  )
}

export default App
