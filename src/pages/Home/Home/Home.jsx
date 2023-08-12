import React, { useEffect, useState } from 'react';
import Navbar from '../../../shared/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Cart from '../../../components/Cart/Cart';


const Home = () => {
    const [carts, setCarts] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    useEffect(()=>{
        fetch('/product.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>

           <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center mt-20'>
           {
               carts.map((ct)=><Cart 
                cartCount={cartCount}
                setCartCount={setCartCount}
                key={ct.id}
               ct={ct}
               ></Cart>)
           }
           </div>
        </div>
    );
};

export default Home;