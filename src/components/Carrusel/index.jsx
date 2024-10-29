import React, { useState, useEffect } from 'react';
import Button from './boton';
import Indicator from './indicador';
import Item from './item';

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const items = [
        {
            type: 'imagen',
            src: 'https://cuevana.pro/resize/1720/storage/87161/h4Y3Wjp0XpZjcsoEUAQYlFmQi8L7GxWdTqbJNiUh.jpg',
            description: 'El jocker',
        },
        {
            type: 'imagen',
            src: 'https://ca-times.brightspotcdn.com/dims4/default/21c0876/2147483647/strip/false/crop/2927x1951+0+0/resize/1486x990!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fed%2Fdd%2F41d9907efe5255e71b245271fef4%2F9a46612515db4d95aa4efb107ec324e7',
            description: 'La sustancia',
        },
    ];

    const handleNext = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }
    };

    const handlePrev = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
        }
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 5000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        setTimeout(() => setIsTransitioning(false), 500);
    }, [currentIndex]);

    return (
        <div className="top relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
            
            <div className={`flex items-center justify-center w-full h-full transition-transform duration-500 ease-in-out z-10 ${isTransitioning ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}>
                <Item item={items[currentIndex]} />
            </div>

            <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-60 w-full text-center z-20">
                <p className="text-white text-2xl font-semibold mb-2">{items[currentIndex].description}</p>
                <button className="mt-2 bg-[#4d8dee] text-white px-4 py-2 rounded-full hover:bg-[#3a7dd8] transition-transform transform hover:scale-110 duration-300">
                    Ver
                </button>
            </div>

            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30">
                <Button onClick={handlePrev} direction="prev" />
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30">
                <Button onClick={handleNext} direction="next" />
            </div>

            <div className="flex justify-center mt-4 z-30">
                {items.map((_, index) => (
                    <Indicator
                        key={index}
                        index={index}
                        currentIndex={currentIndex}
                        setCurrentIndex={setCurrentIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;


