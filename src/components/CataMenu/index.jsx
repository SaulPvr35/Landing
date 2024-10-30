import React from 'react';
import Barra from '../BarraLateral';
import Carrusel from '../Carrusel';

const peliculas = [
    // Array de películas con información de cada una
    {
        id: 1,
        titulo: 'TOMB RAIDEN',
        descripcion: 'La secuencia de aventuras y acción que hace que Lara Croft pase de ser una joven inexperta a una dura superviviente ha sido renovada para las consolas de nueva generación',
        imagen: 'https://www.neo2.com/wp-content/uploads/2023/10/10-peli%CC%81culas-de-accio%CC%81n-protagonizadas-por-mujeres-Tomb_Raider-894080826-large.jpg',
        genero: 'Acción',
        año: 2023,
    },

    {
        id: 2,
        titulo: 'SCHINDERLIST',
        descripcion: 'En Cracovia, durante la Segunda Guerra Mundial, las tropas alemanas de ocupación han forzado a los judíos polacos a vivir...',
        imagen: 'https://i.pinimg.com/564x/ac/14/82/ac14826ba5219e1cf7eb5c0f2777a1f3.jpg',
        genero: 'Drama',
        año: 2023,
    },

    {
        id: 3,
        titulo: 'TITANIC',
        descripcion: 'el mayor barco de pasajeros del mundo al finalizar su construcción, naufragó en las aguas del océano Atlántico durante la noche del 14 y la madrugada del 15 de abril de 1912......',
        imagen: 'https://rufinoweb.com.ar/wp-content/uploads/2023/02/WhatsApp-Image-2023-02-10-at-13.29.59.jpeg',
        genero: 'Drama',
        año: 2023,
    },


    {
        id: 4,
        titulo: 'THE NOTEBOOK',
        descripcion: 'En una residencia de ancianos, un hombre mayor (James Garner) lee a una mujer (Gena Rowlands) una historia de amor escrita en su viejo libro de',
        imagen: 'https://images.ecestaticos.com/ZJcV5RosehEDZCcPg9lyLDRZLIM=/0x0:1014x1497/1440x1920/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F2ac%2F4c5%2Fb9c%2F2ac4c5b9c84d99cf9bf3e6b6f61af93a.jpg',
        genero: 'Acción',
        año: 2023,
    },


    {
        id: 5,
        titulo: 'YES DAY',
        descripcion: 'YES DAY....',
        imagen: 'https://content.clara.es/medio/2022/10/13/el-dia-del-si-2021_9de80a70_1000x1500.jpg',
        genero: 'comedia',
        año: 2023,
    },
    
    {
        id: 6,
        titulo: 'CRANK 2',
        descripcion: 'un asesino a sueldo se pasa 24 horas sin descanso, peleando, matando y manteniendo el flujo de adrenalina en su …',
        imagen: 'https://espectadores.net/wp-content/uploads/2012/08/las-mejores-peliculas-de-accion-crank-alto-voltaje-600x846.jpg',
        genero: 'Acción',
        año: 2023,
    },
    {
        id: 7,
        titulo: 'NO SE ACEPTAN DEVOLUCIONES',
        descripcion: 'Valentín, un tipo mujeriego, soltero y egoísta, de repente, tiene que hacerse cargo de una hija a la que no conocía, fruto de una aventura ocasional.',
        imagen: 'https://i.pinimg.com/originals/18/4e/06/184e06d56505ec273542b543278ea2bb.jpg',
        genero: 'comedia',
        año: 2023,
    },
    {
        id: 8,
        titulo: 'BAJO EL MISMO TECHO',
        descripcion: 'Una Historia Real de Amor, Pérdida y Familia Bajo el mismo techo (conocida como life as we know it en inglés) es una película que nos cuenta la historia de Holly y Eric, dos personas que se detestan',
        imagen: 'https://i.pinimg.com/originals/66/3f/b4/663fb438758ad17e93e34bbedd310fcf.jpg',
        genero: 'comedia',
        año: 2023,
    },
    {
        id: 9,
        titulo: '¿Y DONDE ESTAN LAS RUBIAS?',
        descripcion: 'Dos ambiciosos -pero con poca fortuna- agentes del FBI (Shawn y Marlon Wayans) se hacen pasar por mujeres, novatas en la alta sociedad, en el exclusivo complejo Hamptons para investigar un círculo de secuestros.',
        imagen: 'https://img.buzzfeed.com/buzzfeed-static/static/2022-12/20/23/asset/03732287ed65/sub-buzz-4466-1671580437-10.png',
        genero: 'Acción',
        año: 2023,
    },
    {
        id: 10,
        titulo: 'LITTLE MAN',
        descripcion: 'es una película de comedia estadounidense dirigida por Keenen Ivory Wayans. Está protagonizada por Marlon Wayans, Shawn Wayans, Kerry Washington y Tracy Morgan.',
        imagen: 'https://media.s-bol.com/qxRDBXAnA247/834x1200.jpg',
        genero: 'comedia',
        año: 2023,
    },
    {
        id: 11,
        titulo: '¿QUIEN MANDA?',
        descripcion: 'Alex es un tipo relajado, sofisticado y un gran conquistador, que se conoce todos los trucos para conseguirse a cualquier mujer. ',
        imagen: 'https://2.bp.blogspot.com/-jPz_m-DEBr8/UhN-WbJcIjI/AAAAAAAABSg/PQkHKLh_IMs/s1600/Castillo-Quien+manda.jpg',
        genero: 'Acción',
        año: 2023,
    },

    

    // Agrega más películas aquí
];

const Catalogo = () => {
    return (
        <div className="min-h-screen  p-4 flex flex-col">
            {/* Carrusel en la parte superior */}
            <Carrusel />
            <br />

            {/* Barra de categorías o recomendaciones */}
            <Barra />
            <br />

            <h1 className="text-white h3 mb-9 text-center">Películas</h1>

            {/* Contenedor principal de secciones horizontales de películas */}
            <div className="space-y-8">
                {/* Renderizado de varias secciones (como Netflix) */}
                {['Acción', 'Comedia', 'Drama'].map((categoria) => (
                    <div key={categoria} className="space-y-4">
                        <h2 className="text-white text-2xl mb-4">{categoria}</h2>

                        {/* Contenedor desplazable horizontalmente */}
                        <div className="flex space-x-4 overflow-x-auto scrollbar-hide p-2">
                            {peliculas.map((pelicula) => (
                                <div
                                    key={pelicula.id}
                                    className="flex-shrink-0 w-[170px] max-w-[190px] max-h-[270px] relative group"
                                >
                                    <img
                                        src={pelicula.imagen || 'https://via.placeholder.com/170x250'}
                                        alt={pelicula.titulo}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                    {/* Overlay con detalles de la película */}
                                    <div className="absolute inset-0 bg-[#004ba2] bg-opacity-90 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2">
                                        <h2 className="text-sm font-bold mb-1">{pelicula.titulo}</h2>
                                        <p className="text-xs">{pelicula.descripcion}</p>
                                        <p className="text-xs">Género: {pelicula.genero}</p>
                                        <p className="text-xs">Año: {pelicula.año}</p>
                                        <button className="mt-1 bg-[#004ba2] text-white text-xs px-2 py-1 rounded hover:bg-[#4d8dee] transition duration-300">
                                            Ver Detalles
                                        </button>
                                    </div>
                                    {/* Título de la película */}
                                    <h2 className="absolute bottom-0 left-0 right-0 text-center text-white text-xs font-bold mb-1">
                                        {pelicula.titulo}
                                    </h2>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Catalogo;
