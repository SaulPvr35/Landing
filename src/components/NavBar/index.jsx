import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faWrench, faEnvelope } from '@fortawesome/free-solid-svg-icons'; // Importa los iconos que necesitas

const Navbar = () => {
  return (
    <div className="bg-[#276cc8] shadow-lg">
      <nav className="container mx-auto p-4">
        <div className="flex justify-between items-center">
          {/* Logo de la página con fuente Roboto */}
          <a href="/" className="text-white text-3xl font-extrabold" style={{ fontFamily: 'Roboto' }}>
            Logo
          </a>
          {/* Sección de enlaces de navegación */}
          <ul className="flex space-x-4 md:space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                style={{ fontFamily: 'Roboto' }}
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" /> {/* Icono de Home */}
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                style={{ fontFamily: 'Roboto' }}
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" /> {/* Icono de About */}
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                style={{ fontFamily: 'Roboto' }}
              >
                <FontAwesomeIcon icon={faWrench} className="mr-2" /> {/* Icono de Services */}
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out flex items-center"
                style={{ fontFamily: 'Roboto' }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> {/* Icono de Contact */}
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
