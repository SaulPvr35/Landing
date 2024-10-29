// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#276cc8] text-white py-1">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">© Cinemanía-Plus</p>
          </div>

          <div className="flex space-x-4">
            <a href="#privacy" className="tp text-[#ffffff] flex items-center">
              <i className="fas fa-shield-alt mr-1"></i> Política de privacidad
            </a>
            <a href="#terms" className="text-[#ffffff] tp flex items-center">
              <i className="fas fa-file-contract mr-1"></i> Términos de servicio
            </a>
            
            {/* Cambia este enlace para que use Link de react-router-dom */}
            <Link to="/contacto" className="tp text-[#ffffff] flex items-center">
              <i className="fas fa-envelope mr-1"></i> Contáctanos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
