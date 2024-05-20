import React from 'react';

function Card({ product }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-2">{product.description}</p>
      <p className="text-gray-800 font-semibold">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
    </div>
  );
}

export default Card;
