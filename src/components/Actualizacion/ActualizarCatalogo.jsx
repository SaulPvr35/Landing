import React, { useState } from 'react';

// Componente principal para actualizar el catálogo de películas
const ActualizarCatalogo = () => {
  // Estado para controlar la visibilidad del modal de edición
  const [modalVisible, setModalVisible] = useState(false);
  // Estado para controlar la visibilidad del modal de eliminación
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  // Estado para almacenar la película seleccionada para modificar o eliminar
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  
  // Lista de películas a mostrar en el catálogo
  const peliculas = [
    { id: 1, titulo: 'Pelicula 1', descripcion: 'Descripción de Peli 1', imagen: 'https://image.tmdb.org/t/p/w300/c2wfIKUPcQY0tiyiOmY7ItHtNO9.jpg', genero: 'Acción', año: 2021 },
    { id: 2, titulo: 'Pelicula 2', descripcion: 'Descripción de Peli 2', imagen: 'https://cuevana.pro/resize/200/storage/87518/3JXUycj4WU32Sfsaccfo1CdJ0skUKLFrhTzBodCx.jpg', genero: 'Drama', año: 2020 },
    { id: 3, titulo: 'Pelicula 3', descripcion: 'Descripción de Peli 3', imagen: 'https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg', genero: 'Comedia', año: 2019 },
    { id: 4, titulo: 'Pelicula 4', descripcion: 'Descripción de Peli 4', imagen: 'https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg', genero: 'Terror', año: 2018 },
    { id: 5, titulo: 'Pelicula 5', descripcion: 'Descripción de Peli 5', imagen: 'https://cuevana.pro/resize/200/storage/87996/k1dPc7WcPRfPv31g0JjkNwHom7MwXIwSTJKLnfgf.jpg', genero: 'Aventura', año: 2021 },
    { id: 6, titulo: 'Pelicula 6', descripcion: 'Descripción de Peli 6', imagen: 'https://cuevana.pro/resize/200/storage/87162/26g0sdV8kOiBSyinZ9a1Xb8Sdia6LZEXggcdTw7W.jpg', genero: 'Ciencia Ficción', año: 2020 },
  ];

  // Función para manejar el clic en el botón "Modificar"
  const handleModificarClick = (pelicula) => {
    setPeliculaSeleccionada(pelicula); // Establecer la película seleccionada
    setModalVisible(true); // Mostrar el modal de edición
  };

  // Función para manejar el clic en el botón "Eliminar"
  const handleEliminarClick = (pelicula) => {
    setPeliculaSeleccionada(pelicula); // Establecer la película seleccionada
    setModalEliminarVisible(true); // Mostrar el modal de eliminación
  };

  // Función para manejar el clic en "Cancelar" del modal de edición
  const handleCancelarClick = () => {
    setModalVisible(false); // Ocultar el modal de edición
    setPeliculaSeleccionada(null); // Limpiar la película seleccionada
  };

  // Función para manejar el clic en "Cancelar" del modal de eliminación
  const handleCancelarEliminar = () => {
    setModalEliminarVisible(false); // Ocultar el modal de eliminación
    setPeliculaSeleccionada(null); // Limpiar la película seleccionada
  };

  // Función para manejar la confirmación de eliminación
  const handleConfirmarEliminar = () => {
    // Lógica para eliminar la película seleccionada
    console.log(`Eliminando película: ${peliculaSeleccionada?.titulo}`);
    setModalEliminarVisible(false); // Ocultar el modal de eliminación
    setPeliculaSeleccionada(null); // Limpiar la película seleccionada
  };

  return (
    <div className="topcatalogo via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
      <h1 className="text-white font-bold text-3xl mb-9 text-center">Catálogo de Películas</h1>
      
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
              <button 
                onClick={() => handleEliminarClick(pelicula)} 
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal para editar */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#003a70] rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Editar Película</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-200 font-semibold">Título</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el título de la película" 
                  /* Hace que el modal sepa que película quiero modificar dependiendo su título  */
                  defaultValue={peliculaSeleccionada?.titulo} 
                  disabled // Campo de texto deshabilitado para edición
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Descripción</label>
                <textarea 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese una descripción" 
                  rows="4" 
                  defaultValue={peliculaSeleccionada?.descripcion} 
                  disabled // Campo de texto deshabilitado para edición
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Imagen (URL)</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="URL de la imagen" 
                  defaultValue={peliculaSeleccionada?.imagen} 
                  disabled // Campo de texto deshabilitado para edición
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Género</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el género" 
                  defaultValue={peliculaSeleccionada?.genero} 
                  disabled // Campo de texto deshabilitado para edición
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Año</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el año" 
                  defaultValue={peliculaSeleccionada?.año} 
                  disabled // Campo de texto deshabilitado para edición
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

      {/* Modal para eliminar */}
      {modalEliminarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#003a70] rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Eliminar Película</h2>
            <p className="text-gray-200 text-center">¿Estás seguro de que deseas eliminar "{peliculaSeleccionada?.titulo}"?</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button 
                type="button" 
                onClick={handleCancelarEliminar} 
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button 
                type="button" 
                onClick={handleConfirmarEliminar} 
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualizarCatalogo;
