import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Cart = ({ ct, cartCount, setCartCount }) => {
  const { id, name, img, details, price } = ct;

  const handleIncrease = (item) => {
    const existingCart = JSON.parse(localStorage.getItem('cartItems')) || [];
    const updatedCart = [...existingCart, item];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setCartCount(cartCount + 1);
    toast.success('Successfully added to cart!');
  }

  return (
    <div className="md:flex mb-6 ">
      <div className="card relative w-full md:w-80 bg-white rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl shadow-md">
        <figure>
          <img src={img} alt="Shoes" className="w-full h-40 object-cover" />
        </figure>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">{name}</h2>
          <p className="text-sm text-gray-600 mb-4">{details}</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg">${price}</p>
            <button
              onClick={() => handleIncrease({ id, name, img, details, price })}
              className="btn bg-orange-400 hover:bg-orange-500 text-white font-bold px-4 py-2"
            >
              Add to cart
            </button>
          </div>
        </div>

      </div>
      <Toaster />
    </div>
  );
};

export default Cart;