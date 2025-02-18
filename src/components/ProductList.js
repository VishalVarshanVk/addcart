import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-4 h-64 flex items-center justify-center">
            <img 
              src={product.image} 
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold truncate">{product.title}</h2>
            <p className="text-gray-600 mt-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList; 