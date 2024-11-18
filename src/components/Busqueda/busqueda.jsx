import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState(''); 
  const [peliculas, setPeliculas] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    axios.get('http://localhost:3001/peliculas') 
      .then((response) => {
        setPeliculas(response.data);
        setLoading(false); 
      })
      .catch((err) => {
        setError('Error al cargar las películas');
        setLoading(false);
      });
  }, []);

  // Función para manejar el cambio en el input de búsqueda
  const manejarCambioBusqueda = (e) => {
    setBusqueda(e.target.value);
  };

  // Filtrar las películas según el término de búsqueda
  const peliculasFiltradas = peliculas.filter((pelicula) =>
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
  );


  return (
    <div className="min-h-screen top  p-8">
      {/* Input de búsqueda */}
      <div className="mb-6 text-center">
        <div className="relative">
          <br /><br />
          <input
            type="text"
            value={busqueda}
            onChange={manejarCambioBusqueda} // Cuando el usuario escribe, actualiza el término de búsqueda
            placeholder="Buscar película..."
            className="px-4 py-2 rounded-lg w-1/2 bg-[#1c3a63] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ffffff] transition"
          />
        </div>
      </div>


      {/* Mensaje de carga o error */}
      {loading && <p className="text-white text-center">Cargando películas...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}


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
                src={pelicula.imagen || '/images/default-image.jpg'} // Imagen predeterminada si no hay imagen
                alt={pelicula.titulo}
                className="w-full h-60 object-cover mb-4 rounded-md"
              />
              {/* Título de la película */}
              <h3 className="text-white font-semibold text-lg mb-2">{pelicula.titulo}</h3>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-full">No se encontraron.</p>
        )}
      </div>
    </div>
  );
};

export default Busqueda;