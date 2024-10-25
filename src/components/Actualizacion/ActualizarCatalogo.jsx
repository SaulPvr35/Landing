import React, { useState } from 'react';

const ActualizarCatalogo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  
  const peliculas = [
    { id: 1, titulo: 'Peli 1', descripcion: 'Descripción de Peli 1', imagen: 'https://image.tmdb.org/t/p/w300/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg', genero: 'Acción', año: 2021 },
    { id: 2, titulo: 'Peli 2', descripcion: 'Descripción de Peli 2', imagen: 'https://cuevana.pro/resize/200/storage/87518/3JXUycj4WU32Sfsaccfo1CdJ0skUKLFrhTzBodCx.jpg', genero: 'Drama', año: 2020 },
    // Agrega más películas según sea necesario
  ];

  const handleModificarClick = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setModalVisible(true);
  };

  const handleCancelarClick = () => {
    setModalVisible(false);
    setPeliculaSeleccionada(null); // Limpiar la película seleccionada
  };

  return (
    <div className="bg-gradient-to-b from-[#004ba2] via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
      <h1 className="text-white text-3xl mb-6 text-center">Catálogo de Películas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {peliculas.map((pelicula) => (
          <div key={pelicula.id} className="bg-[#002f6c] p-4 rounded-md shadow-md text-white">
            <img src={pelicula.imagen} alt={pelicula.titulo} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold">{pelicula.titulo}</h2>
            <p className="text-sm mt-2">{pelicula.descripcion}</p>
            <p className="text-sm">Género: {pelicula.genero}</p>
            <p className="text-sm">Año: {pelicula.año}</p>
            <div className="flex mt-4 space-x-4">
              <button 
                onClick={() => handleModificarClick(pelicula)} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
              >
                Modificar
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded">Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal visual para editar */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">Editar Película</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold">Título</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="Ingrese el título de la película" 
                  defaultValue={peliculaSeleccionada?.titulo} 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Descripción</label>
                <textarea 
                  className="w-full p-2 border rounded" 
                  placeholder="Ingrese una descripción" 
                  rows="4" 
                  defaultValue={peliculaSeleccionada?.descripcion} 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Imagen (URL)</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="URL de la imagen" 
                  defaultValue={peliculaSeleccionada?.imagen} 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Género</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="Ingrese el género" 
                  defaultValue={peliculaSeleccionada?.genero} 
                  disabled 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">Año</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="Ingrese el año" 
                  defaultValue={peliculaSeleccionada?.año} 
                  disabled 
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={handleCancelarClick} 
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                >
                  Cancelar
                </button>
                <button 
                  type="button" 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualizarCatalogo;
