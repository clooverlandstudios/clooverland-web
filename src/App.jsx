import './App.css'

import AppRoutes from './Routes.jsx'

function App() {

  return (
    <>

      <main>

          <header style={{width: `75%`, height: `60px`, display: `flex`, marginTop: `60px`, marginBottom: `80px`, alignItems: `center`, justifyContent: `center`, flexDirection: `column`,
          }}>

            <img src="./images/website_logo.png" alt="Clooverland Studios Logo" style={{width: `100%`, maxWidth: `460px`, height: `auto`, transform: `scale(1.2)`}} />

          </header>

          <AppRoutes />

           <footer style={{width: `75%`, height: `60px`, display: `flex`, marginTop: `60px`, marginBottom: `80px`, alignItems: `center`, justifyContent: `center`, flexDirection: `column`,
          }}>

            <h4>
              © Clooverland Studios 2024 <br/><br />
              <span style={{color:`gold`, fontSize: `0.8em`}}>
                For contact info, use this e-mail <a href="mailto:contact@clooverlandstudios.com" style={{color: `rgba(255, 255, 255, 0.87)`, textDecoration: `underline`, userSelect: `all`, fontSize: `1.2em`}}>contact@clooverlandstudios.com</a>
              </span>
            </h4>

          </footer>

        </main>
    </>
    
  )
}

export default App
