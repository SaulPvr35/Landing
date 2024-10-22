import React, { useState, useEffect } from 'react';
import Button from './boton';
import Indicator from './indicador';
import Item from './item';

// Componente Carrusel
const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // CONTENIDO QUE ESTARA EN EL CARRUSEL
    const items = [
        {
            type: 'imagen',
            src: 'https://cuevana.pro/resize/1720/storage/87161/h4Y3Wjp0XpZjcsoEUAQYlFmQi8L7GxWdTqbJNiUh.jpg',
            description: 'Jocker xd',
        },
        {
            type: 'imagen',
            src: 'https://cuevana.pro/resize/1720/storage/86088/IpvxQeSAc5lvdBhCloeai2Rf2GR8b7GyyB5xDfzT.jpg',
            description: 'Jocker xd',
        },
    ];

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 11000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => setIsTransitioning(false), 500); // Ajusta el tiempo para que coincida con la duración de la transición
    }, [currentIndex]);

    return (
        <div className="relative w-full h-[50vh] overflow-hidden border border-[#135cb5] rounded-lg shadow-lg">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div> {/* Fondo oscuro */}
            {/* Contenedor para centrar el item del carrusel */}
            <div
                className={`flex items-center justify-center w-full h-full transition-transform duration-500 ease-in-out z-10 ${
                    isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
                }`}
            >
                <Item item={items[currentIndex]} />
            </div>

            {/* Información del item */}
            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 w-full text-center transition-opacity duration-500 ease-in-out z-20">
                <p className="text-white text-lg font-semibold mb-2">
                    {items[currentIndex].description}
                </p>
                <button className="mt-2 bg-[#4d8dee] text-white px-4 py-2 rounded-full hover:bg-[#3a7dd8] transition-transform transform hover:scale-110 duration-300">
                    Más detalles
                </button>
            </div>

            {/* Botones de navegación */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30">
                <button
                    onClick={handlePrev}
                    className="text-white bg-[#3a7dd8] p-2 rounded-full hover:bg-[#4d8dee] transition-transform transform hover:scale-110"
                >
                    ←
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30">
                <button
                    onClick={handleNext}
                    className="text-white bg-[#3a7dd8] p-2 rounded-full hover:bg-[#4d8dee] transition-transform transform hover:scale-110"
                >
                    →
                </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-4 z-30">
                {items.map((_, index) => (
                    <Indicator
                        key={index}
                        index={index}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                        className={`cursor-pointer w-4 h-4 rounded-full mx-1 ${
                            index === currentIndex
                                ? 'bg-[#4d8dee] scale-125'
                                : 'bg-gray-400 hover:bg-[#3a7dd8]'
                        } transition-transform duration-300`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;
