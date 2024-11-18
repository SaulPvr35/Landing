import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ActualizarPersonal = () => {
  const [empleados, setEmpleados] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [modalCrearVisible, setModalCrearVisible] = useState(false);  // Nuevo estado para el modal de crear
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  const [nombre, setNombre] = useState('');
  const [puesto, setPuesto] = useState('');
  const [edad, setEdad] = useState('');
  const [imagen, setImagen] = useState('');

  // Obtener empleados desde el backend
  const obtenerEmpleados = async () => {
    try {
      const respuesta = await axios.get('http://localhost:3001/personal'); // Ajustar a la ruta de tu backend
      setEmpleados(respuesta.data);
    } catch (error) {
      console.error('Error al obtener empleados:', error);
    }
  };

  useEffect(() => {
    obtenerEmpleados();
  }, []);

  // Seleccionar empleado para editar
  const manejarClickModificar = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setNombre(empleado.nombre);
    setPuesto(empleado.puesto);
    setEdad(empleado.edad);
    setImagen(empleado.imagen);
    setModalVisible(true);
  };

  // Guardar cambios del empleado
  const manejarClickGuardar = async () => {
    try {
      const datosActualizados = {
        nombre,
        puesto,
        edad,
        imagen,
      };
      await axios.put(`http://localhost:3001/personal/${empleadoSeleccionado.id}`, datosActualizados);
      console.log('Empleado actualizado:', datosActualizados);
      setModalVisible(false);
      obtenerEmpleados(); // Recargar lista actualizada
    } catch (error) {
      console.error('Error al guardar cambios:', error);
    }
  };

  // Eliminar empleado
  const manejarClickEliminar = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setModalEliminarVisible(true);
  };

  const manejarConfirmarEliminar = async () => {
    try {
      await axios.delete(`http://localhost:3001/personal/${empleadoSeleccionado.id}`);
      console.log(`Empleado eliminado: ${empleadoSeleccionado.nombre}`);
      setModalEliminarVisible(false);
      obtenerEmpleados(); // Recargar lista tras eliminar
    } catch (error) {
      console.error('Error al eliminar empleado:', error);
    }
  };

  const manejarCancelarEliminar = () => {
    setModalEliminarVisible(false);
    setEmpleadoSeleccionado(null);
  };

  // Crear nuevo empleado
  const manejarClickCrear = () => {
    setNombre('');
    setPuesto('');
    setEdad('');
    setImagen('');
    setModalCrearVisible(true);
  };

  const manejarGuardarNuevoEmpleado = async () => {
    try {
      const nuevoEmpleado = { nombre, puesto, edad, imagen };
      await axios.post('http://localhost:3001/personal', nuevoEmpleado);
      console.log('Empleado creado:', nuevoEmpleado);
      setModalCrearVisible(false);
      obtenerEmpleados(); // Recargar lista tras crear el nuevo empleado
    } catch (error) {
      console.error('Error al crear empleado:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Gestión de Empleados</h1>

      {/* Botón para agregar nuevo empleado */}
      <div className="text-right mb-4">
        <button
          onClick={manejarClickCrear}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
        >
          Agregar Empleado
        </button>
      </div>

      {/* Tabla de empleados */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-blue-800 rounded-lg">
          <thead>
            <tr className="bg-blue-900">
              <th className="py-4 px-6">Nombre</th>
              <th className="py-4 px-6">Puesto</th>
              <th className="py-4 px-6">Edad</th>
              <th className="py-4 px-6">Imagen</th>
              <th className="py-4 px-6">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((empleado) => (
              <tr key={empleado.id} className="border-b border-gray-700 hover:bg-blue-700">
                <td className="py-4 px-6">{empleado.nombre}</td>
                <td className="py-4 px-6">{empleado.puesto}</td>
                <td className="py-4 px-6">{empleado.edad}</td>
                <td className="py-4 px-6">
                  <img src={empleado.imagen} alt={empleado.nombre} className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="py-4 px-6 flex gap-2">
                  <button
                    onClick={() => manejarClickModificar(empleado)}
                    className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded"
                  >
                    Modificar
                  </button>
                  <button
                    onClick={() => manejarClickEliminar(empleado)}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal de crear nuevo empleado */}
      {modalCrearVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Crear Nuevo Empleado</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <input
                type="text"
                placeholder="Puesto"
                value={puesto}
                onChange={(e) => setPuesto(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <input
                type="text"
                placeholder="Imagen (URL)"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalCrearVisible(false)}
                  className="px-4 py-2 bg-gray-500 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={manejarGuardarNuevoEmpleado}
                  className="px-4 py-2 bg-green-500 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de editar */}
      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">Editar Empleado</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <input
                type="text"
                placeholder="Puesto"
                value={puesto}
                onChange={(e) => setPuesto(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <input
                type="number"
                placeholder="Edad"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <input
                type="text"
                placeholder="Imagen (URL)"
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
                className="w-full px-4 py-2 rounded bg-blue-700 text-white"
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="px-4 py-2 bg-gray-500 rounded"
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  onClick={manejarClickGuardar}
                  className="px-4 py-2 bg-blue-500 rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal de eliminar */}
      {modalEliminarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-xl font-bold mb-4">¿Estás seguro de eliminar este empleado?</h2>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={manejarCancelarEliminar}
                className="px-4 py-2 bg-gray-500 rounded"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={manejarConfirmarEliminar}
                className="px-4 py-2 bg-red-500 rounded"
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

export default ActualizarPersonal;
