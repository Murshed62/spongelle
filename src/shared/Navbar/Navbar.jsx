import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsFillHandbagFill } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import AnimatedSearchBar from '../../components/AnimatedSearchBar/AnimatedSearchBar';
import Checkout from '../../components/Checkout/Checkout';

const Navbar = ({ cartCount, setCarts }) => {
  const cartItemsString = localStorage.getItem('cartItems');
  const cartItems = JSON.parse(cartItemsString) || [];



  return (
    <div className="navbar bg-base-100 mx-auto mt-5">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img width={250} src="https://spongelle.com/cdn/shop/files/Wordmark_7577afa4-af32-49bb-ba53-0659c39a91da.png?v=1672230712&width=500" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-2xl">
          <li><Link>New</Link></li>
          <li><Link>Best Sellers</Link></li>
          <li><Link>Bach & Body</Link></li>
          <li><Link>Shop By Collection</Link></li>
          <li><Link>Gifts</Link></li>
          <li><Link>Sale</Link></li>
          <li><Link>Fragrance Quiz</Link></li>
          <li><Link><AnimatedSearchBar></AnimatedSearchBar></Link></li>
          <li><Link><AiOutlineUser /></Link></li>
          <li><Link to="/checkout"> <BsFillHandbagFill className='text-2xl' /><span className=' text-2xl'><span style={{ fontSize: "20px" }}>{cartItems.length}</span></span></Link></li>

        </ul>
      </div>

    </div>
  );
};

export default Navbar;