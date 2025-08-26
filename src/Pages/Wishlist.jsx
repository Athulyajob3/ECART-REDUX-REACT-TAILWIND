 import React from 'react';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../redux/slices/wishlistSlice'; // Adjust the path as needed

const Wishlist = () => {
  const dispatch = useDispatch();
  const userWishlist = useSelector(state => state.wishlistReducer);

  return (
    <>
      <Header />
      <div style={{ paddingTop: "100px" }} className="px-5">
        {userWishlist?.length > 0 ? (
          <>
            <h1 className="text-4xl font-bold text-red-600 mb-5">My Wishlist</h1>
            <div className="grid grid-cols-4 gap-4">
              {userWishlist.map((product) => (
                <div
                  key={product?.id}
                  className="rounded border p-2 shadow border-blue-500 shadow-blue-800"
                >
                  <img
                    width="100%"
                    height="200px"
                    src={product?.thumbnail}
                    alt="Product"
                    className="rounded-md"
                  />
                  <div className="text-center">
                    <h3 className="text-xl font-bold mt-2">{product?.title}</h3>
                    <div className="flex justify-evenly mt-3">
                      {/* Remove from wishlist */}
                      <button
                        onClick={() => dispatch(removeItem(product?.id))}
                        className="text-xl"
                        aria-label={`Remove ${product?.title} from wishlist`}
                      >
                        <i className="fa-solid fa-heart-circle-xmark text-red-600"></i>
                      </button>

                      {/* Add to cart (not wired yet) */}
                      <button className="text-xl" aria-label={`Add ${product?.title} to cart`}>
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
