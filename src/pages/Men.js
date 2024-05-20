import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products';
import Card from '../components/Card';

function Men() {
  const menProducts = productsData.filter(product => product.category === 'men');

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Men's Clothing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {menProducts.map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Men;
