 import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { allProducts, loading, errorMsg } = useSelector(
    (state) => state.productReducer
  );

  const [currentPage, setCurrentpage] = useState(1);
  const productsPerPage = 8;
  const totalPages = Math.ceil(allProducts?.length / productsPerPage);
  const currentPageProductLastIndex = currentPage * productsPerPage;
  const currentPageProductFirstIndex =
    currentPageProductLastIndex - productsPerPage;
  const visibleAllProducts = allProducts?.slice(
    currentPageProductFirstIndex,
    currentPageProductLastIndex
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // ✅ Fixed pagination logic here:
  const navigateToNext = () => {
    if (currentPage < totalPages) {
      setCurrentpage(currentPage + 1);
    }
  };

  const navigateToBack = () => {
    if (currentPage > 1) {
      setCurrentpage(currentPage - 1);
    }
  };

  return (
    <>
      {/* Header */}
      <Header insideHome={true} />

      {/* Main Container */}
      <div
        style={{ paddingTop: "100px" }}
        className="container px-6 mx-auto max-w-7xl"
      >
        {/* Loading State */}
        {loading ? (
          <div className="flex justify-center items-center text-lg">
            <img
              width={"200px"}
              height={"200px"}
              src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif"
              alt="Loading"
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Products */}
            {allProducts?.length > 0 ? (
              visibleAllProducts.map((product) => (
                <div
                  key={product?.id}
                  className="rounded-2xl border border-blue-200 shadow-md hover:shadow-2xl hover:scale-105 transition duration-300 bg-gradient-to-br from-white via-blue-50 to-blue-100 flex flex-col overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative w-full h-48">
                    <img
                      src={product?.thumbnail}
                      alt={product?.title || "Product"}
                      className="w-full h-full object-cover rounded-t-2xl"
                    />
                    <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-lg shadow-md">
                      ${product?.price}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex-grow flex flex-col text-center">
                    <h3 className="text-lg font-bold text-gray-800 truncate">
                      {product?.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {product?.description}
                    </p>

                    {/* Button */}
                    <Link
                      to={`/${product?.id}/view`}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-lg mt-4 transition duration-300 ease-in-out"
                    >
                      View More
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center font-bold text-red-600 my-5 text-lg col-span-full">
                Products Not Found...
              </div>
            )}
          </div>
        )}

        {/* Error Message */}
        {errorMsg && (
          <div className="text-red-600 font-bold text-center mt-4">
            {errorMsg}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="text-2xl text-center font-bold mt-20">
        <span onClick={navigateToBack} className="cursor-pointer">
          <i className="fa-solid fa-backward me-5"></i>
        </span>
        <span>
          {currentPage} of {totalPages}{" "}
        </span>
        <span onClick={navigateToNext} className="cursor-pointer">
          <i className="fa-solid fa-forward me-5"></i>
        </span>
      </div>
    </>
  );
};

export default Home;
