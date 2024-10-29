import React from 'react';
import '../../components/style.css';
const MisionVision = () => {
    return (
        <div className=" top text-white" style={{ fontFamily: 'Roboto' }}>
            <div className="bg-[#002f6c]  text-white margen rounded-lg shadow-lg my-10 mx-4 md:mx-10 lg:mx-20 transition-transform transform hover:scale-105 duration-300 ease-in-out">
                <h2 className="h2 font-bold mb-10 text-center">Sobre Nosotros</h2>
                
                {/* Contenedor de dos columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Columna de Misión */}
                    <div>
                        <h3 className="h2 font-semibold mb-4 text-center ">Misión</h3>
                        <p className="text-lg leading-relaxed">
                            En <span className="text-white font-bold">CinemaniaPlus</span>, nuestra misión es ofrecer entretenimiento de calidad a través de una plataforma accesible y diversa, brindando a nuestros usuarios una experiencia cinematográfica única desde la comodidad de su hogar.
                        </p>
                    </div>
                    
                    {/* Columna de Visión */}
                    <div>
                        <h3 className="h2 font-semibold mb-4 text-center ">Visión</h3>
                        <p className="text-lg leading-relaxed">
                            Aspiramos a convertirnos en líderes en la industria del streaming, ofreciendo una amplia gama de contenido que inspire y entretenga a audiencias de todo el mundo, mientras fomentamos la creatividad y la inclusión en el contenido audiovisual.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MisionVision;
