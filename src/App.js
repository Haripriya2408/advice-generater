
import PAUSEMOBILE from "./images/mobile.svg"
import pauseDesktop from "./images/desktop.svg"
import dice from "./images/dice.svg"
import { useEffect, useState } from "react"
function App() {

  const [text,setText]=useState(null)
 

  const advice=async()=>{
    const res=await fetch("https://api.adviceslip.com/advice")
    const data=await res.json()
    setText(data)
  }

  useEffect(()=>{
    advice()
  },[]) 
  return (
    <div className="container">
      <h1>Advice #117
        
      </h1>
      <p>it is easy to sit up and take notice,what's difficult is getting up and and taking action.
      </p>
      {/* {text.slip.advice} */}
     
      <picture>
        <source media="(min-width:768px)" srcSet={pauseDesktop}></source>
        <img src={PAUSEMOBILE}/>
      </picture>
      <div>
        <button>
          <img src={dice}/>
        </button>
      </div>

    </div>
  )
}
export default App;
