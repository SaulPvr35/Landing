import React from 'react';
import Barra from '../BarraLateral';
import Carrusel from '../Carrusel';

const peliculas = [
    // Array de películas con información de cada una
    {
        id: 1,
        titulo: 'Título de la Película 1',
        descripcion: 'Descripción corta de la película 1.',
        imagen: 'https://via.placeholder.com/170x250',
        genero: 'Acción',
        año: 2023,
    },
    // Agrega más películas aquí
];

const Catalogo = () => {
    return (
        <div className="min-h-screen  p-4 flex flex-col">
            {/* Carrusel en la parte superior */}
            <Carrusel />
            <br />

            {/* Barra de categorías o recomendaciones */}
            <Barra />
            <br />

            <h1 className="text-white h3 mb-9 text-center">Películas</h1>

            {/* Contenedor principal de secciones horizontales de películas */}
            <div className="space-y-8">
                {/* Renderizado de varias secciones (como Netflix) */}
                {['Acción', 'Comedia', 'Drama'].map((categoria) => (
                    <div key={categoria} className="space-y-4">
                        <h2 className="text-white text-2xl mb-4">{categoria}</h2>

                        {/* Contenedor desplazable horizontalmente */}
                        <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
                            {peliculas.map((pelicula) => (
                                <div
                                    key={pelicula.id}
                                    className="flex-shrink-0 w-[170px] max-w-[190px] max-h-[270px] relative group"
                                >
                                    <img
                                        src={pelicula.imagen || 'https://via.placeholder.com/170x250'}
                                        alt={pelicula.titulo}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    {/* Overlay con detalles de la película */}
                                    <div className="absolute inset-0 bg-[#004ba2] bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2">
                                        <h2 className="text-sm font-bold mb-1">{pelicula.titulo}</h2>
                                        <p className="text-xs">{pelicula.descripcion}</p>
                                        <p className="text-xs">Género: {pelicula.genero}</p>
                                        <p className="text-xs">Año: {pelicula.año}</p>
                                        <button className="mt-1 bg-[#004ba2] text-white text-xs px-2 py-1 rounded hover:bg-[#4d8dee] transition duration-300">
                                            Ver Detalles
                                        </button>
                                    </div>
                                    {/* Título de la película */}
                                    <h2 className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-bold mb-1">
                                        {pelicula.titulo}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
