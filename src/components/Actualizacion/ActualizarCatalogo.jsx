import React, { useState, useEffect } from 'react'; // Importa React y los hooks useState y useEffect
import { useNavigate, useParams } from 'react-router-dom'; // Importa useNavigate y useParams para manejar la navegación y obtener parámetros de la URL

const ActualizarCatalogo = ({ peliculas, setPeliculas }) => {
  const { id } = useParams(); // Obtiene el ID de la película desde los parámetros de la URL
  const navigate = useNavigate(); // Crea una función para navegar a otras rutas
  
  // Estado para almacenar la información de la película
  const [titulo, setTitulo] = useState(''); // Estado para el título de la película
  const [descripcion, setDescripcion] = useState(''); // Estado para la descripción de la película
  const [imagen, setImagen] = useState(''); // Estado para la URL de la imagen de la película
  const [genero, setGenero] = useState(''); // Estado para el género de la película
  const [año, setAño] = useState(''); // Estado para el año de la película
  
  // useEffect para cargar los datos de la película si se está editando
  useEffect(() => {
    if (id) { // Verifica si hay un ID presente
      const pelicula = peliculas.find((p) => p.id === parseInt(id)); // Busca la película por ID en el array de películas
      if (pelicula) { // Si se encuentra la película
        // Actualiza los estados con los datos de la película encontrada
        setTitulo(pelicula.titulo);
        setDescripcion(pelicula.descripcion);
        setImagen(pelicula.imagen);
        setGenero(pelicula.genero);
        setAño(pelicula.año);
      }
    }
  }, [id, peliculas]); // Dependencias: se ejecuta cuando cambia id o peliculas

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Crea un objeto nuevaPelicula con los datos del formulario
    const nuevaPelicula = {
      id: id ? parseInt(id) : peliculas.length + 1, // Asigna el ID de la película existente o genera uno nuevo
      titulo,
      descripcion,
      imagen,
      genero,
      año: parseInt(año), // Convierte el año a número
    };

    // Actualiza el array de películas: si hay ID, se edita, si no, se agrega
    const updatedPeliculas = id 
      ? peliculas.map((p) => (p.id === nuevaPelicula.id ? nuevaPelicula : p)) // Reemplaza la película editada
      : [...peliculas, nuevaPelicula]; // Agrega la nueva película al array

    setPeliculas(updatedPeliculas); // Actualiza el estado con la lista de películas actualizada
    localStorage.setItem('peliculas', JSON.stringify(updatedPeliculas)); // Guarda la lista actualizada en localStorage
    navigate('/catalogo'); // Redirige al usuario a la página del catálogo
  };

  return (
    <div className="bg-gradient-to-b from-[#004ba2] via-[#0a1c35] to-[#004ca2c4] min-h-screen p-4 flex flex-col">
      <h1 className="text-white text-3xl mb-6 text-center">Actualizar Catálogo de Películas</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-[#002f6c] p-6 rounded-md shadow-md">
        {/* Aquí van los campos del formulario, como el título, descripción, imagen, género y año */}
        {/* ... los campos del formulario permanecen iguales ... */}
      </form>
    </div>
  );
};

export default ActualizarCatalogo; // Exporta el componente ActualizarCatalogo
