import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faWrench, faEnvelope, faSearch, faBullseye } from '@fortawesome/free-solid-svg-icons'; // Añadir faBullseye para Misión y Visión
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="relative">
      <nav className="bg-[#004ba2] shadow-lg fixed top-0 left-0 w-full z-10"> {/* Cambiado a 'fixed' */}
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center">
            {/* Logo de la página con fuente Roboto */}
            <a href="/" className="text-white text-3xl font-extrabold" style={{ fontFamily: 'Roboto' }}>
              Logo
            </a>
            {/* Sección de enlaces de navegación */}
            <ul className="flex space-x-4 md:space-x-8">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <FontAwesomeIcon icon={faHome} className="mr-2" />
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <FontAwesomeIcon icon={faWrench} className="mr-2" />
                  Services
                </a>
              </li>

              <li className="mx-4">
                <Link
                  to="/contacto" // Enlace a la página de contacto
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                  Contactanos
                </Link>
              </li>

              {/* Nuevo botón de búsqueda */}
              <li className="mx-4">
                <Link
                  to="/busqueda" // Enlace a la página de búsqueda
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <FontAwesomeIcon icon={faSearch} className="mr-2" /> {/* Ícono de búsqueda */}
                  Buscador
                </Link>
              </li>

              {/* Nueva opción de Misión y Visión */}
              <li className="mx-4">
                <Link
                  to="/MisionVision" // Enlace a la página de Misión y Visión
                  className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                  style={{ fontFamily: 'Roboto' }}
                >
                  <FontAwesomeIcon icon={faBullseye} className="mr-2" /> {/* Ícono de Misión y Visión */}
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; // Exportación del componente
