
import React, { useState } from 'react';
import Navbar from './Navbar';
import LandingPage from './pages/LandingPage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleHomeClick = () => {
    setCurrentPage('home');
  };

  const handlePlantsClick = () => {
    setCurrentPage('products');
  };

  const handleCartClick = () => {
    setCurrentPage('cart');
  };

  const handleGetStartedClick = () => {
    setCurrentPage('products');
  };

  const handleContinueShopping = () => {
    setCurrentPage('products');
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onGetStarted={handleGetStartedClick} />;
      case 'products':
        return <ProductsPage />;
      case 'cart':
        return <CartPage onContinueShopping={handleContinueShopping} />;
      default:
        return <LandingPage onGetStarted={handleGetStartedClick} />;
    }
  };

  return (
    <div className="app">
      <Navbar 
        onHomeClick={handleHomeClick}
        onPlantsClick={handlePlantsClick}
        onCartClick={handleCartClick}
      />
      <main className="main-content">
        {renderCurrentPage()}
      </main>
    </div>
  );
}

export default App;



