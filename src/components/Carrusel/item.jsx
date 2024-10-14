import React from 'react';

// Componente de Ítem (Imagen o Video)
// AQUI VA TODO LO RELACIONADO CON EL VIDEO
const Item = ({ item }) => (
    <>
        {item.type === 'video' ? (
            <video autoPlay loop muted className="w-full h-auto object-cover" src={item.src} />
        ) : (
            <img src={item.src} alt={`Película ${item.description}`} className="w-full h-auto object-cover" />
        )}
    </>
);

export default Item;
