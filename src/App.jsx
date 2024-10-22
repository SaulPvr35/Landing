import './App.css'; // Tailwind CSS ya importado
import Navbar from './components/NavBar'; // Importación del componente Navbar
import Footer from './components/Footer'; // Importación del componente Footer
import Catalogo from './components/CataMenu'; // Importación del componente Catalogo
import ActualizarCatalogo from './components/Actualizacion/ActualizarCatalogo'; // Importación del componente para actualizar el catálogo
import { useEffect } from 'react'; // Importación de useEffect para manejar efectos secundarios
import '@fortawesome/fontawesome-free/css/all.css'; // Nota: Usa "all.css" en lugar de "all.min.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Contacto from './components/Contacto/contacto';
import Busqueda from './components/Busqueda/busqueda';
import MisionVision from './components/Nosotros/MisionVision'; // Importación del componente Misión y Visión

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'; // Enlace a la fuente Roboto
    link.rel = 'stylesheet'; // Tipo de enlace
    document.head.appendChild(link); // Agregar el enlace al <head> del documento

    return () => {
      document.head.removeChild(link); // Eliminar el enlace al desmontar
    };
  }, []); // Se ejecuta una vez al montar el componente

  // AQUI VA TODO EL CONTENIDO EN LA MAIN
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#004ba2] text-white" style={{ fontFamily: 'Roboto' }}>
        <Navbar /> {/* Mostrando el componente Navbar */}
        
        <div className="flex flex-col lg:flex-row flex-grow">
          <main className="flex-grow p-4 overflow-auto">
            <Routes>
              {/* Ruta para la página de catálogo */}
              <Route path="/" element={<Catalogo />} />
              
              {/* Ruta para la página de actualización del catálogo */}
              <Route path="/actualizar" element={<ActualizarCatalogo />} />

              {/* Ruta para la página de contacto */}
              <Route path="/contacto" element={<Contacto />} />

              {/* Ruta para la búsqueda */}
              <Route path="/busqueda" element={<Busqueda />} />

              {/* Ruta para nosotros */}
              <Route path="/MisionVision" element={<MisionVision/>} />
            </Routes>
          </main>
        </div>

        <Footer /> {/* Mostrando el componente Footer */}
      </div>
    </Router>
  );
}

export default App; // Exportación del componente App
