import { useState } from 'react'
import './App.css'

function App() {

  const [currentProgress, setCurrentProgress] = useState(66)

  return (
    <>
      <h1>Hi!</h1>
      <p>This is a placeholder website because the new one is still being made.<br />Sorry for it taking so long, I was taking a break from coding.</p>

      <h1 style={{color: `gold`, marginTop: `90px`}}>!!!PROGRESS BAR!!!</h1>
      <p style={{transform: `translateY(-40px)`}}>Below will be a funny progress bar for the next games in the meantime.</p>

      <h2 style={{color: `gold`}}>Lights Out: Relight <br /><span style={{color: `white`, fontSize: `3rem`, lineHeight: `1`}}>{currentProgress}%</span></h2>
      <progress style={{transform:`translateY(-20px)`, accentColor: `red`}} value={currentProgress} max="100"></progress>
    </>
  )
}

export default App
