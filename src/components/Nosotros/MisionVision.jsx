import React from 'react';
import '../../components/style.css';

const MisionVision = () => {
    return (
        <div className="top text-white bg-gradient-to-b from-[#001a4d] to-[#003366] min-h-screen flex items-center justify-center" style={{ fontFamily: 'Roboto' }}>
            {/* Contenedor principal con margen superior */}
            <div className="bg-[#002f6c] text-white p-10 rounded-lg shadow-2xl mx-4 md:mx-10 lg:mx-20 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <h2 className="text-4xl font-extrabold mb-10 text-center tracking-wider">Sobre Nosotros</h2>
                
                {/* Contenedor de dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    
                    {/* Columna de Misión */}
                    <div className="bg-[#003d80] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-center border-b-2 border-white pb-2">Misión</h3>
                        <p className="text-lg leading-relaxed text-justify">
                            En <span className="text-white font-bold">CinemaniaPlus</span>, nuestra misión es ofrecer entretenimiento de calidad a través de una plataforma accesible y diversa, brindando a nuestros usuarios una experiencia cinematográfica única desde la comodidad de su hogar.
                        </p>
                    </div>
                    
                    {/* Columna de Visión */}
                    <div className="bg-[#003d80] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-6 text-center border-b-2 border-white pb-2">Visión</h3>
                        <p className="text-lg leading-relaxed text-justify">
                            Aspiramos a convertirnos en líderes en la industria del streaming, ofreciendo una amplia gama de contenido que inspire y entretenga a audiencias de todo el mundo, mientras fomentamos la creatividad y la inclusión en el contenido audiovisual.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisionVision;
