import React, { useEffect, useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartItemsString = localStorage.getItem('cartItems');
    const parsedCartItems = JSON.parse(cartItemsString) || [];
    setCartItems(parsedCartItems);
  }, []);

   const handleDelete = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };
    return (
        <div className="overflow-x-auto">
        <table className='table'>
        <thead>
         <tr>
        <th>
          
        </th>
        <th style={{fontSize:"18px"}}>Name</th>
        <th style={{fontSize:"18px"}}>Price</th>
        <th style={{fontSize:"18px"}}>Remove</th>
        <th style={{fontSize:"18px"}}></th>
      </tr>
         </thead>
         <tbody>
            {
                cartItems.map((ci)=>(
                    <>
                    {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={ci.img} />
              </div>
            </div>
            <div>
              <div className="font-bold">{ci.name}</div>
              <div className="text-sm opacity-50"></div>
            </div>
          </div>
        </td>
        <td>
          <span>{ci.price}</span>
          <br/>
          
        </td>
        <th>
          <button onClick={() => handleDelete(ci.id)}  className="btn btn-ghost btn-xs text-2xl text-red-500 mt-1"><AiFillDelete/></button>
        </th>
      </tr>
                    </>
                ))
            }
         </tbody>
        </table>
        <div className='text-center mt-10'>
        <Link to="congrats"><button className='btn bg-blue-400 hover:bg-blue-500 font-bold text-white px-20'>Check Out</button></Link>
        </div>
        </div>
    );
};

export default Checkout;