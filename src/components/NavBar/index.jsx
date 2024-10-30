import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faEnvelope, faSearch, faBullseye, faUserCircle } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-[#004ba2] shadow-lg fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
          <div className="flex justify-between items-center">
              {/* Logo de la página con fuente Roboto */}
               <img className='logo' src="https://static.vecteezy.com/system/resources/thumbnails/015/082/037/small_2x/movie-clapper-board-png.png" alt="" />
            <a href="/" className="text-white text-3xl font-extrabold" style={{ fontFamily: 'Roboto' }}>
               Cinemanía-Plus
            </a>
            </div>
            
            {/* Sección de enlaces de navegación */}
            <ul className="flex space-x-4 md:space-x-8 items-center">
              <li>
                <Link to="/busqueda" className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center" style={{ fontFamily: 'Roboto' }}>
                  <FontAwesomeIcon icon={faSearch} className="mr-2" />
                  Buscador
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center" style={{ fontFamily: 'Roboto' }}>
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </Link>
              </li>
             
              <li>
                <Link to="/MisionVision" className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center" style={{ fontFamily: 'Roboto' }}>
                  <FontAwesomeIcon icon={faBullseye} className="mr-2" />
                  Nosotros
                </Link>
              </li>

              {/* Menú de usuario desplegable */}
              <li className="relative">
                <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center focus:outline-none">
                  <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                  Usuario
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#002f6c] text-white rounded-md shadow-lg z-20">
                   
                    <Link to="/Actualizar" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out flex items-center space-x-2">Actualizar Catálogo</Link>
                    <Link to="/Gestionar" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out flex items-center space-x-2">Gestionar Empleados</Link>
                    <Link to="/contacto" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-blue-700 transition duration-300 ease-in-out flex items-center space-x-2">Soporte</Link>
                    {/* <Link to="/" className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-red-600 transition duration-300 ease-in-out flex items-center space-x-2">cerrar sesion</Link> */}
                   
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
