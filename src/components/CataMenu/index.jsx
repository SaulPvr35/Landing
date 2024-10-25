import React from 'react';
import Barra from '../BarraLateral';
import Carrusel from '../Carrusel';

// Aquí van los datos de las películas en el catálogo
const peliculas = [
    {
        id: 1,
        titulo: 'Título de la Película 1',
        descripcion: 'Descripción corta de la película 1.',
        imagen: 'https://via.placeholder.com/170x250', // URL de la imagen de la película
        genero: 'Acción',
        año: 2023,
    },
    {
        id: 2,
        titulo: 'Título de la Película 2',
        descripcion: 'Descripción corta de la película 2.',
        imagen: 'https://image.tmdb.org/t/p/w300/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 3,
        titulo: 'Título de la Película 3',
        descripcion: 'Descripción corta de la película 3.',
        imagen: 'https://image.tmdb.org/t/p/w300/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 4,
        titulo: 'Título de la Película 4',
        descripcion: 'Descripción corta de la película 4.',
        imagen: 'https://via.placeholder.com/170x250', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 4,
        titulo: 'Título de la Película 4',
        descripcion: 'Descripción corta de la película 4.',
        imagen: 'https://via.placeholder.com/170x250', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 4,
        titulo: 'Título de la Película 4',
        descripcion: 'Descripción corta de la película 4.',
        imagen: 'https://via.placeholder.com/170x250', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 4,
        titulo: 'Título de la Película 4',
        descripcion: 'Descripción corta de la película 4.',
        imagen: 'https://via.placeholder.com/170x250', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
];

// Componente Catalogo que renderiza el catálogo de películas
const Catalogo = () => {
    return (
        <div className="bg-gradient-to-b from-[#004ba2] via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
            {/* Carrusel se coloca en la parte superior */}
            <Carrusel />
            <br />
                       {/* Barra de recomendaciones debajo del carrusel y antes del catálogo de películas */}
            <Barra />
            <div className="flex-grow p-4 flex">
                {/* Contenedor principal que ocupa todo el alto de la pantalla */}
                <div className="flex-grow">
                    {/* Título principal del catálogo */}
                    <h1 className="text-white text-3xl mb-6 text-center">Películas</h1>
                    {/* Contenedor de la cuadrícula para mostrar las películas */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {/* Mapeo de las películas para renderizar cada una */}
                        {peliculas.map((pelicula) => (
                            <div key={pelicula.id} className="relative group max-w-[190px] max-h-[270px] overflow-hidden mx-auto">
                                {/* Imagen de la película con un placeholder en caso de que no haya imagen */}
                                <img
                                    src={pelicula.imagen || 'https://via.placeholder.com/170x250'}
                                    alt={pelicula.titulo}
                                    className="w-full h-full object-contain"
                                />
                                {/* Overlay con detalles de la película que aparece al pasar el ratón */}
                                <div className="absolute inset-0 bg-[#004ba2] bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2">
                                    <h2 className="text-sm font-bold mb-1">{pelicula.titulo}</h2>
                                    <p className="text-xs">{pelicula.descripcion}</p>
                                    <p className="text-xs">Género: {pelicula.genero}</p>
                                    <p className="text-xs">Año: {pelicula.año}</p>
                                    {/* Botón para ver detalles de la película */}
                                    <button className="mt-1 bg-[#004ba2] text-white text-xs px-2 py-1 rounded hover:bg-[#4d8dee] transition duration-300">
                                        Ver Detalles
                                    </button>
                                </div>
                                {/* Título de la película en la parte inferior de la tarjeta */}
                                <h2 className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-bold mb-1">{pelicula.titulo}</h2>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Barra lateral a la derecha que podría contener navegación u otra información */}
                {/* <div className="w-1/4 lg:w-1/5">
                    <Barra />
                </div> */}
            </div>
        </div>
    );
};

export default Catalogo;