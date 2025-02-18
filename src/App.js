import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addToCart = (product) => {
    if (cart.find(item => item.id === product.id)) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar cartCount={cart.length} setIsModalOpen={setIsModalOpen} />
      
      {showAlert && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-md shadow-lg">
          Item already added to the cart
        </div>
      )}
      
      <main className="container mx-auto px-4 py-8">
        <ProductList products={products} addToCart={addToCart} />
        
        <CartModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          cart={cart}
          removeFromCart={removeFromCart}
        />
      </main>
    </div>
  );
}

export default App; 