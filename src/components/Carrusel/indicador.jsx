import React from 'react';

// Componente de Indicador
const Indicator = ({ index, currentIndex, setCurrentIndex }) => (
    <div
        className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${currentIndex === index ? 'bg-[#4d8dee]' : 'bg-[#fff] opacity-50'}`}
        onClick={() => setCurrentIndex(index)}
    />
);

export default Indicator;
