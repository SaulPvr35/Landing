import React from 'react';

const Footer = () => {
    return (
        // Contenedor principal del footer con fondo oscuro de la paleta
        <footer className="bg-[#276cc8] text-white py-8">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Sección de copyright */}
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <p className="text-sm">
                            © Aquí va el logo
                        </p>
                    </div>

                    {/* Sección de enlaces rápidos */}
                    <div className="flex space-x-4">
                        <a href="#privacy" className="text-[#ffffff] flex items-center">
                            <i className="fas fa-shield-alt mr-1"></i> {/* Icono de privacidad */}
                            Política de privacidad
                        </a>
                        <a href="#terms" className="text-[#ffffff] flex items-center">
                            <i className="fas fa-file-contract mr-1"></i> {/* Icono de términos */}
                            Términos de servicio
                        </a>
                        <a href="#contact" className="text-[#ffffff] flex items-center">
                            <i className="fas fa-envelope mr-1"></i> {/* Icono de contacto */}
                            Contáctanos
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
