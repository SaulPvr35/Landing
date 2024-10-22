import React from 'react';

// Componente Barra
const Barra = () => {
    return (
        <div className="bg-gradient-to-r from-[#a6c4e6] to-[#7ea8e2] p-4 md:w-60 w-full md:flex md:flex-col left-3 top-1 z-2 md:relative overflow-y-auto rounded-lg shadow-lg">
            <h2 className="text-white text-2xl mb-6 text-center font-bold animate-bounce">Recomendaciones</h2>
            <ul className="space-y-4">
                <li>
                    <a href="/" className="text-white hover:bg-[#7e8288] block p-4 rounded-lg mx-auto text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://image.tmdb.org/t/p/w300/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg" alt="Peli 1" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110 mx-auto"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 1</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg mx-auto text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87518/3JXUycj4WU32Sfsaccfo1CdJ0skUKLFrhTzBodCx.jpg" alt="Peli 2" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110 mx-auto"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 2</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg mx-auto text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg" alt="Peli 3" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110 mx-auto"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 3</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg mx-auto text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87162/26g0sdV8kOiBSyinZ9a1Xb8Sdia6LZEXggcdTw7W.jpg" alt="Contacto" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110 mx-auto"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Contacto</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Barra;
