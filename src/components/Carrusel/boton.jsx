import React from 'react';

// Componente de Botón
const Button = ({ onClick, direction }) => (
    <button
        onClick={onClick}
        className="absolute p-2 text-white bg-[#135cb5] rounded-full focus:outline-none"
    >
        {direction === 'prev' ? '<' : '>'}
    </button>
);

export default Button;
