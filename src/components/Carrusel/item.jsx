import React from 'react';

const Item = ({ item }) => (
    <>
        {item.type === 'video' ? (
            <video
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
                src={item.src}
            />
        ) : (
            <img
                src={item.src}
                alt={item.description}
                className="w-full h-full object-cover"
            />
        )}
    </>
);

export default Item;
