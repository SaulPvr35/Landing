import React, { useState, useEffect } from 'react'; // Importación de React y hooks necesarios
import Buttom from './boton'; // Importación del componente de botón
import Indicator from './indicador'; // Importación del componente indicador
import Item from './item'; // Importación del componente de item

// Componente Carrusel
const Carrusel = () => {
    // Estado para almacenar el índice del item actual
    const [currentIndex, setCurrentIndex] = useState(0);

    // CONTENIDO QUE ESTARA EN EL CARRUSEL
    const items = [
        {
            type: 'video', // Tipo de contenido
            src: 'https://via.placeholder.com/170x250', // URL de la fuente del contenido
            description: 'Descripción del Video', // Descripción del contenido
        },
        {
            type: 'video', // Tipo de contenido
            src: '.mp4', // URL de la fuente del contenido (esto debería ser una ruta válida)
            description: 'Descripción del Video', // Descripción del contenido
        },
    ];

    // Función para avanzar al siguiente item
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Función para retroceder al item anterior
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    // Efecto que se ejecuta al montar el componente, configurando un intervalo para avanzar automáticamente
    useEffect(() => {
        const timer = setInterval(handleNext, 15000); // Cambia al siguiente item cada 15 segundos
        return () => clearInterval(timer); // Limpieza del intervalo al desmontar el componente
    }, []);

    // Renderizado del componente
    return (
        <div className="relative w-full h-[50vh] overflow-hidden">
            {/* Contenedor para centrar el item del carrusel */}
            <div className="flex items-center justify-center w-full h-full">
                <Item item={items[currentIndex]} /> {/* Muestra el item actual */}
            </div>
            <div className="absolute bottom-0 left-0 p-4 bg-opacity-75 w-full">
                <p className="text-white">{items[currentIndex].description}</p> {/* Descripción del item actual */}
                <button className="mt-2 bg-[#4d8dee] text-white px-4 py-2 rounded hover:bg-[#3a7dd8] transition duration-300">
                    Más detalles {/* Botón para más detalles */}
                </button>
            </div>
            {/* Indicadores para mostrar el estado del carrusel */}
            <div className="flex justify-center mt-2">
                {items.map((_, index) => (
                    <Indicator key={index} index={index} currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
                ))}
            </div>
        </div>
    );
};

export default Carrusel; // Exportación del componente
