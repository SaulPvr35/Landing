import React from 'react';

// Aquí van los datos de las películas en el catálogo
const peliculas = [
    {
        id: 1,
        titulo: 'Título de la Película 1',
        descripcion: 'Descripción corta de la película 1.',
        imagen: 'url_imagen_1', // URL de la imagen de la película
        genero: 'Acción',
        año: 2023,
    },
    {
        id: 2,
        titulo: 'Título de la Película 2',
        descripcion: 'Descripción corta de la película 2.',
        imagen: 'url_imagen_2', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 3,
        titulo: 'Título de la Película 3',
        descripcion: 'Descripción corta de la película 3.',
        imagen: 'url_imagen_3', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
    {
        id: 4,
        titulo: 'Título de la Película 4',
        descripcion: 'Descripción corta de la película 4.',
        imagen: 'url_imagen_4', // URL de la imagen de la película
        genero: 'Comedia',
        año: 2022,
    },
];

// Componente Catalogo que renderiza el catálogo de películas
const Catalogo = () => {
    return (
        <div className="bg-[#004ba2] min-h-screen p-4">
            {/* Título principal del catálogo */}
            <h1 className="text-white text-3xl mb-6 text-center">Películas</h1>
            {/* Contenedor de la cuadrícula para mostrar las películas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Mapeo de las películas para renderizar cada una */}
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id} className="bg-[#276cc8] rounded-lg border border-[#004ba2] shadow-none"> {/* Bordes aplicados */}
                        {/* Imagen de la película */}
                        <img
                            src={pelicula.imagen}
                            alt={pelicula.titulo} // Texto alternativo para la imagen
                            className="w-full h-48 object-cover" 
                        />

                        {/* Contenedor de información de la película */}
                        <div className="p-4">
                            <h2 className="text-white text-xl font-bold mb-2">{pelicula.titulo}</h2> {/* Título de la película */}
                            <p className="text-white">{pelicula.descripcion}</p> {/* Descripción de la película */}
                            <p className="text-white">Género: {pelicula.genero}</p> {/* Género de la película */}
                            <p className="text-white">Año: {pelicula.año}</p> {/* Año de lanzamiento de la película */}
                            {/* Botón para ver detalles de la película */}
                            <button className="mt-4 bg-[#004ba2] text-white px-4 py-2 rounded hover:bg-[#4d8dee] transition duration-300">
                                Ver Detalles
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo; // Exportación del componente Catalogo
