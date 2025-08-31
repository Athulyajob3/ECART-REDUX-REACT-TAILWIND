 import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  emptyCart,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const userCart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (userCart?.length > 0) {
      const total = userCart
        .map((item) => item?.totalPrice)
        .reduce((a, b) => a + b, 0);
      setCartTotal(total);
    } else {
      setCartTotal(0);
    }
  }, [userCart]);

  const handleDecrement = (product) => {
    if (product.quantity > 1) {
      dispatch(decrementQuantity(product.id));
    } else {
      dispatch(removeFromCart(product.id));
    }
  };

  const checkOut = () => {
    dispatch(emptyCart());
    alert("Thanks for Purchasing");
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="px-5 py-10 md:px-20 bg-gray-100 min-h-screen mt-20">
        {userCart?.length > 0 ? (
          <>
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 text-center mb-10">
              🛒 Cart Summary
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Cart Table */}
              <div className="md:col-span-2 bg-white border rounded-2xl p-6 shadow-md">
                <table className="table-auto w-full text-left border-collapse">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="p-3 font-semibold">#</th>
                      <th className="p-3 font-semibold">Product</th>
                      <th className="p-3 font-semibold">Image</th>
                      <th className="p-3 font-semibold text-center">Quantity</th>
                      <th className="p-3 font-semibold">Price</th>
                      <th className="p-3 font-semibold text-center">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userCart?.map((product, index) => (
                      <tr
                        key={product.id}
                        className="border-b hover:bg-gray-50 transition"
                      >
                        <td className="p-3">{index + 1}</td>
                        <td className="p-3 font-medium">{product?.title}</td>
                        <td className="p-3">
                          <img
                            src={product?.thumbnail}
                            alt="item"
                            className="w-16 h-16 rounded-md object-cover border"
                          />
                        </td>
                        <td className="p-3 text-center">
                          <div className="flex justify-center items-center">
                            <button
                              onClick={() => handleDecrement(product)}
                              className="mr-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md font-bold"
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="w-12 text-center border p-1"
                              value={product?.quantity}
                              readOnly
                            />
                            <button
                              onClick={() =>
                                dispatch(incrementQuantity(product.id))
                              }
                              className="ml-2 px-3 py-1 bg-gray-200 hover:bg-gray-300 rounded-md font-bold"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-green-700">
                          ${product?.totalPrice.toFixed(2)}
                        </td>
                        <td className="p-3 text-center">
                          <button
                            onClick={() => dispatch(removeFromCart(product.id))}
                            className="text-red-600 hover:text-red-800 transition"
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Checkout Section */}
              <div className="bg-white border rounded-2xl shadow-md p-6 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Order Summary
                  </h2>
                  <p className="text-lg mb-2 flex justify-between">
                    <span className="text-gray-600">Subtotal:</span>
                    <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                  </p>
                  <p className="text-lg mb-2 flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </p>
                  <hr className="my-3" />
                  <p className="text-xl font-bold flex justify-between">
                    <span>Total:</span>
                    <span className="text-red-600">${cartTotal.toFixed(2)}</span>
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 mt-6">
                  <button
                    onClick={checkOut}
                    className="bg-green-600 hover:bg-green-700 rounded-lg p-3 text-white w-full font-semibold transition"
                  >
                    Proceed to Checkout
                  </button>
                  <button
                    onClick={() => dispatch(emptyCart())}
                    className="bg-red-500 hover:bg-red-600 rounded-lg p-3 text-white w-full font-semibold transition"
                  >
                    Empty Cart
                  </button>
                  <a
                    href="/shop"
                    className="text-center bg-blue-500 hover:bg-blue-600 rounded-lg p-3 text-white w-full font-semibold transition"
                  >
                    🛍️ Shop More
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center h-screen flex-col items-center">
            <img
              src="https://www.gospeedy.co.in/images/empty.gif"
              alt="Empty"
              className="w-60 h-60"
            />
            <h1 className="text-3xl text-red-600 mt-4 font-bold">
              Your Cart is Empty 😔
            </h1>
            <p className="text-gray-500 mt-2">
              Add some products to continue shopping!
            </p>
            <a
              href="/shop"
              className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              🛍️ Shop Now
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
