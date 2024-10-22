import React, { useState } from 'react'; // Importación única de React y useState
//  EL TITULO se usara para el filtro de busquedas 
const peliculasIniciales = [
  { id: 1, titulo: 'Stars', imagen: 'https://link_a_imagen_1.jpg' },
  { id: 2, titulo: 'Stars', imagen: 'https://link_a_imagen_2.jpg' },
  { id: 3, titulo: 'La g', imagen: 'https://link_a_imagen_3.jpg' },
  { id: 4, titulo: 'Stars', imagen: 'https://link_a_imagen_4.jpg' },
  { id: 5, titulo: 'Stars', imagen: 'https://link_a_imagen_5.jpg' },
  { id: 6, titulo: 'Han', imagen: 'https://link_a_imagen_6.jpg' },
  { id: 7, titulo: 'El', imagen: 'https://link_a_imagen_7.jpg' },
];

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState(''); // Estado para controlar el término de búsqueda
  const peliculas = peliculasIniciales;
  // const [peliculas, setPeliculas] = useState(peliculasIniciales);

  // Función para manejar el cambio en el input de búsqueda
  const manejarCambioBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar las películas según el término de búsqueda
  const peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#004ba2] p-8">
      {/* Input de búsqueda */}
      <div className="mb-6 text-center">
        <div className="relative">
          <br /><br />
          <input
            type="text"
            value={busqueda}
            onChange={manejarCambioBusqueda}
            placeholder="Buscar película..."
            className="px-4 py-2 rounded-lg w-1/2 bg-[#1c3a63] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] transition"
          />
        </div>
      </div>

      {/* Mostrar el título de búsqueda */}
      <h2 className="text-white text-2xl mb-4 text-center">
        {busqueda ? `Resultados para: "${busqueda}"` : 'Catálogo de Películas'}
      </h2>

      {/* Contenedor de las películas filtradas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula) => (
            <div
              key={pelicula.id}
              className="bg-[#1c3a63] rounded-lg shadow-lg p-4 text-center transform transition-transform hover:scale-105"
            >
              {/* Imagen de la película */}
              <img
                src={pelicula.imagen}
                alt={pelicula.titulo}
                className="w-full h-60 object-cover mb-4 rounded-md"
              />
              {/* Título de la película */}
              <h3 className="text-white font-semibold text-lg mb-2">{pelicula.titulo}</h3>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">No se encontraron resultados.</p>
        )}
      </div>
    </div>
  );
};

export default Busqueda;