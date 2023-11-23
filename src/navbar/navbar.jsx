import { useState } from 'react'
import "../style/navbar.css"
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Navbar() {

    return (
      <>
        {
            <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">Navbar</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Chat</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Preguntas</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        }
      </>
    )
  }
  
  export default Navbar
  