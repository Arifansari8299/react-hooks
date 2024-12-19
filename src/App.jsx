import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import State1 from './component/State1'
import State2 from './component/State2'



function App() {
  
   return(

  <>
  <p> method 1: useState is (isme ek stateVariable aur ek setfunction lete hai )</p>
  <State1/>
  <h3> state2</h3>
  <State2/>
 
  
  </>
  )
}

export default App
