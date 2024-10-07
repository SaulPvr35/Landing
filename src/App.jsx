import './App.css'; // Tailwind CSS ya importado
import Navbar from './components/NavBar'; // Importación del componente Navbar
import Footer from './components/Footer'; // Importación del componente Footer
import Catalogo from './components/CataMenu'; // Importación del componente Catalogo
import { useEffect } from 'react'; // Importación de useEffect para manejar efectos secundarios
import '@fortawesome/fontawesome-free/css/all.css'; // Nota: Usa "all.css" en lugar de "all.min.css"


function App() {
  // useEffect para cargar la fuente Roboto desde Google Fonts
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'; // Enlace a la fuente Roboto
    link.rel = 'stylesheet'; // Tipo de enlace
    document.head.appendChild(link); // Agregar el enlace al <head> del documento

    // Función de limpieza para eliminar el enlace al desmontar el componente
    return () => {
      document.head.removeChild(link); // Eliminar el enlace al desmontar
    };
  }, []); // Se ejecuta una vez al montar el componente

    //AQUI VA TODO EL CONTENIDO EN LA MAIN
  return (
    <div className="flex flex-col min-h-screen bg-[#004ba2] text-white" style={{ fontFamily: 'Roboto' }}> 
      {/* Aplicar la fuente Roboto a toda la aplicación mediante el estilo en línea */}

      <Navbar /> {/* Mostrando el componente Navbar */}

      <main className="flex-grow p-4">
        {/* Aquí puedes agregar el contenido principal de tu aplicación */}
        <Catalogo /> {/* Mostrando el componente Catalogo */}
      </main>

      <Footer /> {/* Mostrando el componente Footer */}
    </div>
  );
}

export default App;
