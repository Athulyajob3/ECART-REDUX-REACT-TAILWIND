 import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlistSlice';
import { addToCart } from '../redux/slices/cartSlice';  

const View = () => {
  const userCart = useSelector(state => state.cartReducer);
  const userWishlist = useSelector(state => state.wishlistReducer);
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const { id } = useParams();
  const { allProducts } = useSelector(state => state.productReducer);

  useEffect(() => {
    if (sessionStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"));
      setProduct(allProducts.find(item => item.id == id));
    }
  }, [id]);

  const handleWishlist = () => {
    const existingWishlist = userWishlist?.find(item => item.id == id);
    if (existingWishlist) {
      alert("Product Already Added In Wishlist");
    } else {
      dispatch(addToWishlist(product));
      alert("Product Added to Wishlist");
    }
  };

  const handleCart = () => {
    const existingProduct = userCart?.find(item => item.id == id);
    if (existingProduct) {
      alert("Product quantity incremented");
    } else {
      dispatch(addToCart(product));  
      alert("Product Added to cart");
    }
  };

  return (
    <>
      <Header />

      <div className="mx-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="flex justify-center mt-6">
            <img
              className="rounded-lg shadow-md m-20"
              width="350"
              height="250"
              src={product?.thumbnail || "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"}
              alt={product?.title || 'product'}
            />
          </div>

          {/* Details */}
          <div className='m-6'>
            <h3 className="font-bold">PID: {product?.id || 'N/A'}</h3>
            <h1 className="text-5xl font-bold my-2">{product?.title || 'Title'}</h1>
            <h4 className="font-bold text-red-600 text-2xl">${product?.price || 'Price'}</h4>
            <h4>Brand: {product?.brand || 'Brand'}</h4>
            <h4>Category: {product?.category || 'Category'}</h4>

            <p className="mt-4">
              <span className="font-bold">Description: </span>
              {product?.description || 'No description available.'}
            </p>

            <h3 className="font-bold">Client Reviews</h3>
            {
              product?.reviews?.length > 0 ? (
                product?.reviews?.map((item, index) => (
                  <div key={item?.date || index} className="shadow border rounded p-2 mb-2">
                    <h5>
                      <span className="font-bold">{item?.reviewerName}</span>: <span>{item?.comment}</span>
                    </h5>
                    <p>Rating : {item?.rating} <i className="fa-solid fa-star text-yellow-400"></i></p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews available.</p>
              )
            }

            {/* Buttons */}
            <div className="flex gap-4 m-6">
              <button onClick={handleWishlist} className="bg-blue-700 hover:bg-blue-800 rounded text-white px-4 py-2">
                ADD TO WISHLIST
              </button>
              <button onClick={handleCart} className="bg-green-700 hover:bg-green-800 rounded text-white px-4 py-2">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default View;
