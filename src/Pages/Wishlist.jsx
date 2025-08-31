 import React from 'react';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice'; 

const Wishlist = () => {
  const dispatch = useDispatch();
  const userWishlist = useSelector(state => state.wishlistReducer);
  const userCart = useSelector(state => state.cartReducer);  

  const handleCart = (product) => {
    const existingProduct = userCart?.find(item => item.id === product.id);
    if (existingProduct) {
      alert("Product quantity incremented");
    } else {
      dispatch(addToCart(product));
      alert("Product Added to cart");
    }
    cart
    dispatch(removeItem(product.id));
  };

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5 m-5">
        {userWishlist?.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-red-600 mb-5">My Wishlist</h1>
            <div className="grid grid-cols-4 gap-4 m-10">
              {userWishlist.map((product) => (
                <div
                  key={product?.id}
                  className="rounded border p-2 shadow border-blue-500 shadow-blue-800 mt-10"
                >
                  <img
                    width="100%"
                    height="200px"
                    src={product?.thumbnail}
                    alt="Product"
                    className="rounded-md"
                  />
                  <div className="text-center ">
                    <h3 className="text-xl font-bold mt-10">{product?.title}</h3>
                    <div className="flex justify-evenly mt-3">
                      
                      <button
                        onClick={() => dispatch(removeItem(product?.id))}
                        className="text-xl m-10"
                        aria-label={`Remove ${product?.title} from wishlist`}
                      >
                        <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                      </button>
 
                      <button
                        onClick={() => handleCart(product)}  
                        className="text-xl"
                        aria-label={`Add ${product?.title} to cart`}
                      >
                        <i className="fa-solid fa-cart-plus text-green-600"></i>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex justify-center h-screen flex-col items-center">
            <img
              src="https://www.gospeedy.co.in/images/empty.gif"
              alt="Empty"
              className="w-60 h-60"
            />
            <h1 className="text-3xl text-red-600 mt-4">Your WishList is Empty!!!</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;
