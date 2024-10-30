import React from 'react';

// Componente Barra
const Barra = () => {
    return (
        <div className=" from-[#126ff0] to-[#0d3874] p-4 w-full flex flex-col items-center rounded-lg shadow-lg">
            <h2 className="text-white text-2xl mb-6 font-bold animate-bounce">Recomendaciones</h2>
            <ul className="flex justify-between w-full max-w-screen-xl space-x-4 ">
                <li className="flex-grow flex justify-center">
                    <a href="/" className="text-white hover:bg-[#7e8288] block p-4 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://image.tmdb.org/t/p/w300/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg" alt="Peli 1" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 1</span>
                    </a>
                </li>
                <li className="flex-grow flex justify-center">
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87518/3JXUycj4WU32Sfsaccfo1CdJ0skUKLFrhTzBodCx.jpg" alt="Peli 2" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 2</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg" alt="Peli 3" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 3</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg" alt="Peli 3" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 4</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg" alt="Peli 3" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Descripción de Peli 5</span>
                    </a>
                </li>
                <li>
                    <a href="/" className="text-white hover:bg-[#3a7dd8] block p-4 rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                        <div className="overflow-hidden rounded-lg">
                            <img src="https://cuevana.pro/resize/200/storage/87162/26g0sdV8kOiBSyinZ9a1Xb8Sdia6LZEXggcdTw7W.jpg" alt="Contacto" className="w-full max-w-[190px] max-h-[270px] object-contain mb-2 transition duration-500 hover:scale-110"/>
                        </div>
                        <span className="block text-sm mt-2 font-semibold">Peli 6</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Barra;
