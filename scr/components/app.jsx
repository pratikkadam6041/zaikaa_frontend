// zaikaa/src/App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MenuPage from './pages/MenuPage';
import CartPage from './pages/CartPage';
import SplashScreen from './components/SplashScreen';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = (itemToAdd) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (itemToRemove) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemToRemove.id);
      if (existingItem.quantity === 1) {
        return prevCart.filter(item => item.id !== itemToRemove.id);
      }
      return prevCart.map(item =>
        item.id === itemToRemove.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    });
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <header className="bg-white shadow-md p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold text-gray-800">
            Zikaaa
          </Link>
          <nav>
            <Link to="/cart" className="text-xl font-bold text-gray-700 hover:text-green-600">
              🛒 Cart: {totalItems} items (₹{totalPrice})
            </Link>
          </nav>
        </div>
      </header>
      <main className="bg-gray-100 min-h-screen font-sans">
        <Routes>
          <Route path="/" element={<MenuPage onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} onAdd={handleAddToCart} onRemove={handleRemoveFromCart} />} />
        </Routes>
      </main>
    </Router>
  );
}