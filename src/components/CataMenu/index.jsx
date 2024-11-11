import React, { useEffect, useState } from 'react';
import Barra from '../BarraLateral';
import Carrusel from '../Carrusel';

const Catalogo = () => {
    // Obtiene las películas de la API
    const [peliculas, setPeliculas] = useState([]);

    // Carga las películas
    useEffect(() => {
        // Función para obtener las películas desde el servidor
        const fetchPeliculas = async () => {
            try {
                // Obtener las películas del puesto 3001 (Desde la API)
                const response = await fetch('http://localhost:3001/peliculas');
                // Convertir a formato JSON
                const data = await response.json();
                // Almacenar las películas en el estado
                setPeliculas(data);
            } catch (error) {
                // Si ocurre un error, mostrarlo en la consola
                console.error('No hay o no se encontraron peliculas :/ :', error);
            }
        };

        // Llamar a la función para obtener las películas
        fetchPeliculas();
    }, []); // Este useEffect se ejecuta solo una vez, al cargar el componente

        // Lo que devuelve la vista que es el puerto 3001
    return (
        <div className="min-h-screen text-white p-4 flex flex-col">
            {/* Carrusel que se muestra en la parte superior */}
            <Carrusel />
            <br />
            {/* Barra lateral */}
            <Barra />
            <br />
            {/* Título */}
            <h1 className="text-white text-4xl font-bold text-center mb-6">Películas prubea</h1>
            <div className="space-y-8">
                {/* Estructura y orden de las peliuclas */}
                {['Acción', 'Comedia', 'Drama'].map((categoria) => (
                    // se dividen por categorias con un id en este caso key
                    <div key={categoria} className="space-y-4">
                        {/* Título de la categoría */}
                        <h2 className="text-white text-2xl mb-4 font-semibold">{categoria}</h2>
                        <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-2">
                            {/* Filtrar las peliculas en cada linea dependiendo su genero */}
                            {peliculas
                                .filter(pelicula => pelicula.genero === categoria) // Filtrar por el genero de las peliclas y las devuelve como una categoria en la que podran organizarce
                                .map((pelicula) => (
                                    <div
                                        key={pelicula.id} // Usar el id de la película como clave el indicador
                                        className="flex-shrink-0 w-[200px] max-w-[200px] max-h-[300px] relative group overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                    >
                                        {/* Imagen de la película */}
                                        <img
                                            src={pelicula.imagen || 'https://via.placeholder.com/170x250'} // Usar una imagen por defecto si no hay imagen
                                            alt={pelicula.titulo} // Descripción de la imagen
                                            className="w-full h-full object-cover rounded-lg shadow-lg"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                                            {/* Informacion al hacer scroll sobre el catalogo */}
                                            <h2 className="text-sm font-bold mb-1">{pelicula.titulo}</h2>
                                            <p className="text-xs">{pelicula.descripcion}</p>
                                            <p className="text-xs">Género: {pelicula.genero}</p>
                                            <p className="text-xs">Año: {pelicula.año}</p>
                                            {/* Detalles de la película */}
                                            <button className="mt-1 bg-[#004ba2] text-white text-xs px-2 py-1 rounded hover:bg-[#4d8dee] transition duration-300">
                                                Ver Detalles
                                            </button>
                                        </div>
                                        {/* Texto que aparecera en la parte inferior de las pelicuñas*/}
                                        <h2 className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-bold mb-1">
                                            {/* {pelicula.titulo} */}
                                        </h2>
                                    </div>
                                ))}


                                {/* Para mostrar todas las peliculas sin orden de genero */}

                            {/* <div className="flex space-x-6 overflow-x-auto scrollbar-hide p-2">
                                        {peliculas.map((pelicula) => (
                                            <div
                                                key={pelicula.id}
                                                className="flex-shrink-0 w-[200px] max-w-[200px] max-h-[300px] relative group overflow-hidden transform hover:scale-105 transition-transform duration-300"
                                            >
                                                <img
                                                    src={pelicula.imagen || 'https://via.placeholder.com/170x250'}
                                                    alt={pelicula.titulo}
                                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                                />
                                                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-4">
                                                    <h2 className="text-sm font-bold mb-1">{pelicula.titulo}</h2>
                                                    <p className="text-xs">{pelicula.descripcion}</p>
                                                    <p className="text-xs">Género: {pelicula.genero}</p>
                                                    <p className="text-xs">Año: {pelicula.año}</p>
                                                    <button className="mt-1 bg-[#004ba2] text-white text-xs px-2 py-1 rounded hover:bg-[#4d8dee] transition duration-300">
                                                        Ver Detalles
                                                    </button>
                                                </div>
                                                <h2 className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-bold mb-1">
                                                </h2>
                                            </div>
                                        ))}
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
