import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActualizarPersonal = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [empleados, setEmpleados] = useState([]);

  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [edad, setEdad] = useState('');
  const [imagen, setImagen] = useState('');

  // Función para obtener los empleados desde el servidor
  const obtenerEmpleados = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3001/personal');
      setEmpleados(respuesta.data);
    } catch (error) {
      console.error('Error al obtener los empleados:', error);
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  // Actualiza los campos del formulario cuando se selecciona un empleado
  useEffect(() => {
    if (empleadoSeleccionado) {
      setNombre(empleadoSeleccionado.nombre);
      setPuesto(empleadoSeleccionado.puesto);
      setEdad(empleadoSeleccionado.edad);
      setImagen(empleadoSeleccionado.imagen);
    }
  }, [empleadoSeleccionado]);

  const manejarClickModificar = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setModalVisible(true);
  };

  const manejarClickEliminar = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setModalEliminarVisible(true);
  };

  const manejarClickCancelar = () => {
    setModalVisible(false);
    setEmpleadoSeleccionado(null);
  };

  const manejarCancelarEliminar = () => {
    setModalEliminarVisible(false);
    setEmpleadoSeleccionado(null);
  };

  const manejarConfirmarEliminar = async () => {
    try {
      const respuesta = await axios.delete(`http://localhost:3001/personal/${empleadoSeleccionado.id}`);
  
      // Confirmar en consola la eliminación del empleado
      console.log(`Empleado eliminado: ${empleadoSeleccionado.nombre}`);
      setModalEliminarVisible(false);
      setEmpleadoSeleccionado(null);
  
      // Recargar la lista de empleados
      obtenerEmpleados();
    } catch (error) {
      console.error('Error al eliminar el empleado:', error);
    }
  };

  const manejarClickGuardar = async () => {
    try {
      const datosActualizados = {
        nombre,
        puesto,
        edad,
        imagen,
      };

      // Enviamos la solicitud PUT al servidor
      const respuesta = await axios.put(`http://localhost:3001/personal/${empleadoSeleccionado.id}`, datosActualizados);

      // Si la actualización fue exitosa, mostramos un mensaje y recargamos los empleados
      console.log('Empleado actualizado:', respuesta.data);
      setModalVisible(false);
      obtenerEmpleados(); // Volver a cargar los empleados actualizados
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  return (
    <div className="topcatalogo via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
      <h1 className="text-white font-bold text-3xl mb-9 text-center">Catálogo de Empleados (conectada a la bd)</h1>
      {/* Listado de empleados (Nombres) */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#002f6c] text-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-900">
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wider">Nombre</th>
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wider">Puesto</th>
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wider">Edad</th>
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wider">Imagen</th>
              <th className="py-4 px-6 text-left text-sm font-semibold tracking-wider">Acciones</th>
            </tr>
            
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr
                key={empleado.id}
                className="border-b border-gray-700 transition-transform duration-300 ease-in-out  hover:bg-[#00509d]"
              >
                <td className="py-4 px-6 text-sm font-medium">{empleado.nombre}</td>
                <td className="py-4 px-6 text-sm">{empleado.puesto}</td>
                <td className="py-4 px-6 text-sm">{empleado.edad}</td>
                <td className="py-4 px-6">
                  <img
                    src={empleado.imagen}
                    alt={empleado.nombre}
                    className="w-16 h-16 object-cover rounded-md shadow-md transition-opacity duration-300 hover:opacity-80"
                  />
                </td>
                <td className="py-4 px-6 flex items-center gap-2">
                  <button
                    onClick={() => manejarClickModificar(empleado)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded shadow transition-transform duration-200 hover:scale-110"
                  >
                    Modificar
                  </button>
                  <button
                    onClick={() => manejarClickEliminar(empleado)}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded shadow transition-transform duration-200 hover:scale-110"
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
            <h2 className="text-2xl font-bold text-white text-center mb-4">Editar Empleado</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-200 font-semibold">Nombre</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el nombre del empleado" 
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Puesto</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese el puesto" 
                  value={puesto} 
                  onChange={(e) => setPuesto(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Edad</label>
                <input 
                  type="number" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  placeholder="Ingrese la edad" 
                  value={edad} 
                  onChange={(e) => setEdad(e.target.value)}
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
            <h2 className="text-2xl font-bold text-white text-center mb-4">Confirmar Eliminación</h2>
            <p className="text-white text-center mb-4">¿Estás seguro de eliminar este empleado?</p>
            <div className="flex justify-end space-x-2">
              <button 
                type="button" 
                onClick={manejarCancelarEliminar} 
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500">
                Cancelar
              </button>
              <button 
                type="button" 
                onClick={manejarConfirmarEliminar} 
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualizarPersonal;


