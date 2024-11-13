import React, { useState, useEffect } from 'react';
import axios from 'axios';

// https://www.youtube.com/watch?v=F4MdhfMn2vs&ab_channel=BorjaScript 
// https://www.youtube.com/watch?v=jOpR1XRD9Zw&ab_channel=Samus

const ActualizarCatalogo = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);
  const [peliculas, setPeliculas] = useState([]);

  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [genero, setGenero] = useState('');
  const [ano, setAno] = useState('');

  // Función para obtener las películas desde el servidor
  const obtenerPeliculas = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3001/peliculas');
      setPeliculas(respuesta.data);
    } catch (error) {
      console.error('Error al obtener las películas:', error);
    }
  };

  useEffect(() => {
    obtenerPeliculas();
  }, []);

  // Actualiza los campos del formulario cuando se selecciona una película
  useEffect(() => {
    if (peliculaSeleccionada) {
      setTitulo(peliculaSeleccionada.titulo);
      setDescripcion(peliculaSeleccionada.descripcion);
      setImagen(peliculaSeleccionada.imagen);
      setGenero(peliculaSeleccionada.genero);
      setAno(peliculaSeleccionada.año);
    }
  }, [peliculaSeleccionada]); // Cuando `peliculaSeleccionada` cambia, actualiza los campos del formulario

  const manejarClickModificar = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setModalVisible(true);
  };

  const manejarClickEliminar = (pelicula) => {
    setPeliculaSeleccionada(pelicula);
    setModalEliminarVisible(true);
  };

  const manejarClickCancelar = () => {
    setModalVisible(false);
    setPeliculaSeleccionada(null);
  };

  const manejarCancelarEliminar = () => {
    setModalEliminarVisible(false);
    setPeliculaSeleccionada(null);
  };

  const manejarConfirmarEliminar = () => {
    console.log(`Eliminando película: ${peliculaSeleccionada?.titulo}`);
    setModalEliminarVisible(false);
    setPeliculaSeleccionada(null);
  };

  const manejarClickGuardar = async () => {
    try {
      const datosActualizados = {
        titulo,
        descripcion,
        imagen,
        genero,
        año: ano,
      };

    // Enviamos la solicitud PUT al servidor
    const respuesta = await axios.put(`http://localhost:3001/peliculas/${peliculaSeleccionada.id}`, datosActualizados);

    // Si la actualización fue exitosa, mostramos un mensaje y recargamos las películas
    console.log('Película actualizada:', respuesta.data);
    setModalVisible(false);
    obtenerPeliculas(); // Volver a cargar las películas actualizadas
  } catch (error) {
    console.error('Error al guardar los cambios:', error);
  }
};

  return (
    <div className="topcatalogo via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
      <h1 className="text-white font-bold text-3xl mb-9 text-center">Catálogo de Películas (conectada a la bd)</h1>
      {/* Listado de las peliculas (TITULOS)  */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#002f6c] text-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-3 px-4 text-left">Título</th>
              <th className="py-3 px-4 text-left">Descripción</th>
              <th className="py-3 px-4 text-left">Género</th>
              <th className="py-3 px-4 text-left">Año</th>
              <th className="py-3 px-4 text-left">Imagen</th>
              <th className="py-3 px-4 text-left">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculas.map((pelicula) => (
              <tr key={pelicula.id} className="border-b border-gray-700">
                <td className="py-3 px-4">{pelicula.titulo}</td>
                <td className="py-3 px-4">{pelicula.descripcion}</td>
                <td className="py-3 px-4">{pelicula.genero}</td>
                <td className="py-3 px-4">{pelicula.año}</td>
                <td className="py-3 px-4">
                  <img src={pelicula.imagen} alt={pelicula.titulo} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="py-3 px-4">
                  <button 
                    onClick={() => manejarClickModificar(pelicula)} 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded mr-2"
                  >
                    Modificar
                  </button>
                  <button 
                    onClick={() => manejarClickEliminar(pelicula)} 
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Descripción</label>
                <textarea 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese una descripción" 
                  rows="4" 
                  value={descripcion} 
                  onChange={(e) => setDescripcion(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Imagen (URL)</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="URL de la imagen" 
                  value={imagen} 
                  onChange={(e) => setImagen(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Género</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el género" 
                  value={genero} 
                  onChange={(e) => setGenero(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Año</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el año" 
                  value={ano} 
                  onChange={(e) => setAno(e.target.value)}
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button 
                  type="button" 
                  onClick={manejarClickCancelar} 
                  className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                  Cancelar
                </button>
                <button 
                  type="button" 
                  onClick={manejarClickGuardar} 
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de eliminar */}
      {modalEliminarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#003a70] rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Eliminar Película</h2>
            <p className="text-white text-center mb-4">¿Estás seguro de que deseas eliminar esta película?</p>
            <div className="flex justify-end space-x-2">
              <button 
                onClick={manejarCancelarEliminar} 
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancelar
              </button>
              <button 
                onClick={manejarConfirmarEliminar} 
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
