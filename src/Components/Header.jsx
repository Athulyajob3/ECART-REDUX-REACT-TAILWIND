import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = ({ insideHome }) => {
  const userWishlist =useSelector(state=>state.wishlistReducer)
  return (
    <nav className="flex bg-blue-400 fixed w-full p-5 text-white items-center">
      <Link className="text-2xl font-bold flex items-center" to={'/'}>
        <i className="fa-solid fa-truck-fast me-2"></i> Daily Cart
      </Link>
      <ul className="flex-1 text-right">
        <li className="list-none inline-block px-5">
          <input
            style={{ width: '300px' }}
            className="rounded border p-2 text-black"
            placeholder="Search Products Name"
            type="text"
          />
        </li>

        <li className="list-none inline-block px-5">
          <Link to={'/Wishlist'}>
            <i className="fa-solid fa-heart text-red-600"></i>
            Wishlist <span className="bg-black text-white rounded p-1">{userWishlist?.length}</span>
          </Link>
        </li>

        <li className="list-none inline-block px-5">
          <Link to={'/Cart'}>
            <i className="fa-solid fa-cart-plus text-green-600"></i>
            Cart <span className="bg-black text-white rounded p-1">20</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
