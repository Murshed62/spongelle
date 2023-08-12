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
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{details}</p>
        <div className="card-actions justify-end mt-5">
          <p className='font-bold text-2xl'>${price}</p>
          <button onClick={() => handleIncrease({ id, name, img, details, price })} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Cart;
