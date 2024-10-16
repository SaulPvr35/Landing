import React from 'react';

const MisionVision = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#004ba2] text-white" style={{ fontFamily: 'Roboto' }}>
     
        <div className="bg-[#002f6c] text-white  p-6 rounded-md shadow-md my-8">
            <h2 className="text-2xl font-bold mb-4 text-center">Sobre Nosotros</h2>
            <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Misión</h3>
                <p>
                    En CinemaniaPlus, nuestra misión es ofrecer entretenimiento de calidad a través de una plataforma accesible y diversa, brindando a nuestros usuarios una experiencia cinematográfica única desde la comodidad de su hogar.
                </p>
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2">Visión</h3>
                <p>
                    Aspiramos a convertirnos en líderes en la industria del streaming, ofreciendo una amplia gama de contenido que inspire y entretenga a audiencias de todo el mundo, mientras fomentamos la creatividad y la inclusión en el contenido audiovisual.
                </p>
            </div>
        </div>
        </div>
    );
};

export default MisionVision;
