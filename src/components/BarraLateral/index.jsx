import React from 'react';

// Componente Barra
const Barra = () => {
    return (
        <div className="bg-[#a6c4e6] p-4 md:w-70 w-full md:flex md:flex-col fixed left-3 top-0 z-1 md:relative">
            <h2 className="text-white text-2xl mb-6 text-center">Menú</h2>
            <ul className="space-y-2">
                <li>
                    <a href="/" className="text-white hover:bg-[#7e8288] block p-2 rounded"> 
                        imagen de peli 1
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-2 rounded">
                    imagen de peli 1
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-2 rounded">
                    imagen de peli 1
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-2 rounded"> 
                        Contacto
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-2 rounded"> 
                        Ayuda
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Barra; // Exportación del componente Sidebar
