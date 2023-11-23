import { useState } from 'react'
import "../style/app.css"
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const card = {

  }
  return (
    <>
      {<div className="container mt-5 text-white">
        <header className="pb-3 mb-4 border-bottom">
          <h1>Hackaton 2023</h1>     
        </header>
        <main>
          <section className="mb-4">
            <h2>¡Bienvenido a tu asistente!</h2>
            <div className="herobg-dark">
              <h1 className="text-reveal">
                <span>FINNY</span>
                <span aria-hidden="true">FINNEY</span>
              </h1>
            </div>
            <Link to={'/chat'}><button className="boton">Chatear ahora! </button></Link>
            <p>
              Tu solucion para un futuro financiero solido
            </p>
          </section>

          <section className="mb-4 text-white">
          <h2 className="text-white">By ERROR 404</h2>
            {/* Add your featured content here*/}
          </section>
        </main>

        <footer className="pt-3 mt-4 border-top">
          <p>&copy; Creado en 2023</p>
        </footer>
      </div>}
    </>
  )
}

export default App

