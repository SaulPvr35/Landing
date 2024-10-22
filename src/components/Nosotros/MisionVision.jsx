import React from 'react';

const MisionVision = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#004ba2] to-[#0a1c35] text-white" style={{ fontFamily: 'Roboto' }}>
        <div className="bg-[#002f6c] text-white p-8 rounded-lg shadow-lg my-10 mx-4 md:mx-10 lg:mx-20 transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <br /><br />
            <h2 className="text-2xl font-bold mb-4 text-center">Sobre Nosotros</h2>
            <div className="mb-4">
                <br />
                <h3 className="text-xl font-semibold mb-2">
                    <span>
                    Misión
                    </span>
                    </h3>
                <br />
                <p className="text-lg leading-relaxed">
                    En <span className=" text-white font-bold">CinemaniaPlus</span>, nuestra misión es ofrecer entretenimiento de calidad a través de una plataforma accesible y diversa, brindando a nuestros usuarios una experiencia cinematográfica única desde la comodidad de su hogar.
                </p>

            </div>
            <div>
                <br /><br />
                <h3 className="text-xl font-semibold mb-2">
                    <span>
                    Visión
                    </span>
                    </h3>
                    <br />
                <p className="text-lg leading-relaxed">
                    Aspiramos a convertirnos en líderes en la industria del streaming, ofreciendo una amplia gama de contenido que inspire y entretenga a audiencias de todo el mundo, mientras fomentamos la creatividad y la inclusión en el contenido audiovisual.
                </p>
            </div>
        </div>
        </div>
    );
};

export default MisionVision;
