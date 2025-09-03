import React from 'react';
import { useSelector } from 'react-redux';
import './Navbar.css';

const Navbar = ({ onHomeClick, onPlantsClick, onCartClick }) => {
  const cartItems = useSelector(state => state.cart.items);
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img 
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" 
          alt="Paradise Nursery" 
          className="brand-logo"
        />
        <div className="brand-text">
          <h3>Paradise Nursery</h3>
          <i>Where Green Meets Serenity</i>
        </div>
      </div>
      
      <div className="navbar-links">
        <button className="nav-link" onClick={onHomeClick}>
          Home
        </button>
        <button className="nav-link" onClick={onPlantsClick}>
          Plants
        </button>
        <button className="nav-link cart-link" onClick={onCartClick}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 256 256" 
            className="cart-icon"
          >
            <rect width="156" height="156" fill="none"></rect>
            <circle cx="80" cy="216" r="12"></circle>
            <circle cx="184" cy="216" r="12"></circle>
            <path 
              d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
              fill="none" 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2"
            ></path>
          </svg>
          Cart
          {cartItemCount > 0 && (
            <span className="cart-badge">{cartItemCount}</span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
