import React from 'react';



function Contacto() {

  return (
    <div className="flex flex-col min-h-screen bg-[#004ba2] text-white" style={{ fontFamily: 'Roboto' }}>
      <header className="flex justify-between items-center p-4 bg-[#004ba2] shadow-lg">
        {/* Puedes añadir contenido aquí si lo deseas */}
      </header>

      <main className="flex-grow p-4 bg-[#004ba2] flex flex-col items-center justify-center">
        <div className="max-w-3xl w-full bg-[#002f6c] rounded-lg p-8 shadow-xl flex flex-col md:flex-row items-center">
          <img
            src="/mnt/data/image.png" // Ruta de la imagen
            alt="Movie Time" // Texto alternativo para la imagen
            className="w-full md:w-1/3 h-auto mr-4 mb- md:mb-0" // Asegura que la imagen sea responsiva
          />
          <div className="w-full md:w-2/3">
            <h2 className="text-4xl font-bold mb-4 text-center">Contáctanos</h2>
            <p className="text-center mb-6">¿Ya estás registrado?</p>

            <form>
              <div className="mb-4">
                <label className="block text-lg mb-1" htmlFor="nombre">NOMBRE</label>
                <input
                  className="w-full px-4 py-2 rounded bg-white text-black"
                  id="nombre"
                  type="text"
                  placeholder="Jimena Martínez"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg mb-1" htmlFor="email">CORREO ELECTRÓNICO</label>
                <input
                  className="w-full px-4 py-2 rounded bg-white text-black"
                  id="email"
                  type="email"
                  placeholder="hola@correo.com"
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg mb-1" htmlFor="sugerencias">SUGERENCIAS O INFORMACIÓN</label>
                <textarea
                  className="w-full px-4 py-2 rounded bg-white text-black"
                  id="sugerencias"
                  placeholder="Sugerencias o información..."
                  rows="4" // Puedes ajustar la cantidad de filas según lo necesites
                />
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-bold">Aceptar</button>
            </form>
          </div>
        </div>
      </main>

      <footer className="bg-[#004ba2] text-center text-white py-4">
        
      </footer>
    </div>
  );
}

export default Contacto; // Exportación del componente Catalogo