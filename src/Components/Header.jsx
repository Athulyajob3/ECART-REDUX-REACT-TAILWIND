 import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../redux/slices/productSlice';

const Header = ({ insideHome }) => {
  const dispatch = useDispatch();
  const useCart = useSelector((state) => state.cartReducer);
  const userWishlist = useSelector((state) => state.wishlistReducer);

  return (
    <nav className="flex flex-wrap fixed w-full p-4 items-center justify-between z-50 
      bg-gradient-to-r from-indigo-600/80 via-purple-600/80 to-pink-600/80 
      backdrop-blur-md shadow-xl border-b border-white/20">
      
      {/* Logo */}
      <Link
        className="text-2xl font-extrabold flex items-center gap-2 hover:scale-110 transition-transform duration-300"
        to={'/'}
      >
        <i className="fa-solid fa-truck-fast text-yellow-300 drop-shadow-[0_0_10px_#fde047]"></i>
        <span className="tracking-wide text-white">Daily Cart</span>
      </Link>

      {/* Search */}
      <div className="flex-grow px-5 hidden md:block">
        <input
          onChange={(e) =>
            dispatch(searchProduct(e.target.value.toLowerCase()))
          }
          className="w-full max-w-md rounded-full border-2 border-transparent 
          bg-white/80 px-5 py-2 text-gray-800 placeholder-gray-500
          focus:outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-300
          shadow-md transition duration-300"
          placeholder="🔍 Search amazing products..."
          type="text"
        />
      </div>

      {/* Right Icons */}
      <ul className="flex items-center gap-8 text-sm font-semibold">
        {/* Wishlist */}
        <li className="relative group">
          <Link
            to="/Wishlist"
            className="flex items-center gap-2 text-white hover:text-pink-300 transition-colors duration-300"
          >
            <i className="fa-solid fa-heart text-pink-400 group-hover:animate-pulse"></i>
            <span className="hidden sm:block">Wishlist</span>
            <span className="ml-1 bg-pink-500 text-white text-xs font-bold px-2 py-0.5 
              rounded-full shadow-md group-hover:bg-pink-400 transition">
              {userWishlist?.length}
            </span>
          </Link>
        </li>

        {/* Cart */}
        <li className="relative group">
          <Link
            to="/Cart"
            className="flex items-center gap-2 text-white hover:text-green-300 transition-colors duration-300"
          >
            <i className="fa-solid fa-cart-plus text-green-400 group-hover:animate-bounce"></i>
            <span className="hidden sm:block">Cart</span>
            <span className="ml-1 bg-green-500 text-white text-xs font-bold px-2 py-0.5 
              rounded-full shadow-md group-hover:bg-green-400 transition">
              {useCart?.length}
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
