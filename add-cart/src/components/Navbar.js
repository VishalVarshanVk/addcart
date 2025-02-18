import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar({ cartCount, setIsModalOpen }) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-xl font-bold">Shopping Cart</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center space-x-1 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 