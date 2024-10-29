// App.js
import './App.css';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Catalogo from './components/CataMenu';
import ActualizarCatalogo from './components/Actualizacion/ActualizarCatalogo';

import Busqueda from './components/Busqueda/busqueda';
import MisionVision from './components/Nosotros/MisionVision';
import Contacto from './components/Footer/contacto'; // Importa Contacto
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import GestionarEmpleados from './components/Actualizacion/GestionarEmpleados';

function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#004ba2] bg-gradient-to-b from-[#004ba2] via-[#0a1c35] to-[#004ca2c4] text-white" style={{ fontFamily: 'Roboto' }}>
        <Navbar />

        <div className="flex flex-col lg:flex-row flex-grow">
          <main className="flex-grow p-4 overflow-auto">
            <Routes>
              <Route path="/" element={<Catalogo />} />
              <Route path="/actualizar" element={<ActualizarCatalogo />} />
              <Route path="/gestionar" element={<GestionarEmpleados />} />
              <Route path="/busqueda" element={<Busqueda />} />
              <Route path="/MisionVision" element={<MisionVision />} />
              <Route path="/contacto" element={<Contacto />} /> {/* Ruta para Contacto */}
            </Routes>
          </main>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
