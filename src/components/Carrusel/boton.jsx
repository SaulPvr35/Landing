import React from 'react';

const Button = ({ onClick, direction }) => (
    <button
        onClick={onClick}
        className="p-3 text-white bg-[#135cb5] rounded-full hover:bg-[#4d8dee] transition-transform transform hover:scale-110"
    >
        {direction === 'prev' ? '←' : '→'}
    </button>
);

export default Button;
