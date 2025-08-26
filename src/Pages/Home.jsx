 import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slices/productSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className="container px-4 mx-auto">
        {loading ? (
          <div className="flex justify-center items-center text-lg">
            <img
              width={'200px'}
              height={'200px'}
              src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif"
              alt="Loading"
            />
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-4">
            {allProducts?.length > 0 ? (
              allProducts.map((product) => (
                <div
                  key={product?.id}
                  className="rounded border p-4 shadow border-blue-500 shadow-blue-800 flex flex-col"
                >
                  <img
                    width={'100%'}
                    height={'200px'}
                    src={product?.thumbnail}
                    alt={product?.title || 'Product'}
                    className="object-cover"
                  />
                  <div className="text-center mt-4 flex-grow">
                    <h3 className="text-xl font-bold">{product?.title}</h3>
                  </div>
                  <Link
                    to={`/${product?.id}/view`}
                    className="bg-blue-500 rounded p-2 mt-4 text-white inline-block"
                  >
                    View More...
                  </Link>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg">
                Products Not Found....
              </div>
            )}
          </div>
        )}
        {errorMsg && (
          <div className="text-red-600 font-bold text-center mt-4">
            {errorMsg}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
