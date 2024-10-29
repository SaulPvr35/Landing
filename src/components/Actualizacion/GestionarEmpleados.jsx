import React, { useState } from 'react';

// Componente para gestionar empleados
const GestionarEmpleados = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalEliminarVisible, setModalEliminarVisible] = useState(false);
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);

  const empleados = [
    { id: 1, nombre: 'Empleado 1', puesto: 'Gerente', imagen: 'https://via.placeholder.com/150', edad: 35 },
    { id: 2, nombre: 'Empleado 2', puesto: 'Supervisor', imagen: 'https://via.placeholder.com/150', edad: 28 },
    { id: 3, nombre: 'Empleado 3', puesto: 'Analista', imagen: 'https://via.placeholder.com/150', edad: 24 },
  ];

  const handleModificarClick = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setModalVisible(true);
  };

  const handleEliminarClick = (empleado) => {
    setEmpleadoSeleccionado(empleado);
    setModalEliminarVisible(true);
  };

  const handleCancelarClick = () => {
    setModalVisible(false);
    setEmpleadoSeleccionado(null);
  };

  const handleCancelarEliminar = () => {
    setModalEliminarVisible(false);
    setEmpleadoSeleccionado(null);
  };

  const handleConfirmarEliminar = () => {
    console.log(`Eliminando empleado: ${empleadoSeleccionado?.nombre}`);
    setModalEliminarVisible(false);
    setEmpleadoSeleccionado(null);
  };

  return (
    <div className="topcatalogo via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
      <h1 className="text-white font-bold text-3xl mb-9 text-center">Gestión de Empleados</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {empleados.map((empleado) => (
          <div key={empleado.id} className="bg-[#002f6c] p-4 rounded-md shadow-md text-white">
            <img src={empleado.imagen} alt={empleado.nombre} className="w-full h-48 object-cover rounded mb-4" />
            <h2 className="text-xl font-bold">{empleado.nombre}</h2>
            <p className="text-sm mt-2">Puesto: {empleado.puesto}</p>
            <p className="text-sm">Edad: {empleado.edad}</p>
            <div className="flex mt-4 space-x-4">
              <button 
                onClick={() => handleModificarClick(empleado)} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded"
              >
                Modificar
              </button>
              <button 
                onClick={() => handleEliminarClick(empleado)} 
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
            <h2 className="text-2xl font-bold text-white text-center mb-4">Editar Empleado</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-200 font-semibold">Nombre</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  defaultValue={empleadoSeleccionado?.nombre} 
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Puesto</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  defaultValue={empleadoSeleccionado?.puesto} 
                  disabled
                />
              </div>
              <div>
                <label className="block text-gray-200 font-semibold">Edad</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded bg-[#004ba2] text-white" 
                  defaultValue={empleadoSeleccionado?.edad} 
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

      {/* Modal para eliminar */}
      {modalEliminarVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#003a70] rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-4">Eliminar Empleado</h2>
            <p className="text-gray-200 text-center">¿Estás seguro de que deseas eliminar a "{empleadoSeleccionado?.nombre}"?</p>
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

export default GestionarEmpleados;
