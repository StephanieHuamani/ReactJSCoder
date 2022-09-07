import React from 'react';
import './App.css';

const App = () => {
  return (
    <div>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Cuadernos</a></li>
            <li><a class="dropdown-item" href="#">Artistica</a></li>
            <li><a class="dropdown-item" href="#">Escritura</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacto</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Formas de envio</a>
        </li>
      </ul>
    </div>
  );
}

export default App;
