import React from 'react';

function ShoppingCart({ cartItems }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      <ul className="divide-y divide-gray-200">
        {cartItems.map(item => (
          <li key={item.id} className="py-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-800">{item.name}</span>
              <span className="text-gray-800">${item.price}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="text-gray-800 font-semibold">Total:</span>
        <span className="text-gray-800 font-semibold ml-2">${cartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ShoppingCart;
