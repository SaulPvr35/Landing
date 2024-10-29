import React from 'react';

const Indicator = ({ index, currentIndex, setCurrentIndex }) => (
    <div
        onClick={() => setCurrentIndex(index)}
        className={`w-4 h-4 rounded-full mx-1 cursor-pointer transition-transform duration-300 ${
            currentIndex === index ? 'bg-[#4d8dee] scale-125' : 'bg-gray-400 hover:bg-[#3a7dd8]'
        }`}
    />
);

export default Indicator;
