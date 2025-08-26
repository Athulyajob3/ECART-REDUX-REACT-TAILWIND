 import React from "react";
import Header from "../Components/Header"; // adjust path if needed

const Cart = () => {
  return (
    <>
      <Header />
      <div style={{ padding: "100px" }} className="px-5">
        <h1 className="text-5xl font-bold text-blue-600">Cart Summary..</h1>

        <div className="grid grid-cols-3 gap-4 mt-5">
          {/* Cart Table */}
          <div className="col-span-2 border rounded p-5 shadow">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th className="font-semibold">#</th>
                  <th className="font-semibold">Name</th>
                  <th className="font-semibold">Image</th>
                  <th className="font-semibold">Quantity</th>
                  <th className="font-semibold">Price</th>
                  <th className="font-semibold">...</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Sample Item</td>
                  <td><img src="" alt="item" /></td>
                  <td>
                    <div className="flex">
                      <button className="font-bold">-</button>
                      <input
                        style={{ width: "40px" }}
                        type="text"
                        className="border p-1 rounded mx-2"
                        value={12}
                        readOnly
                      />
                      <button className="font-bold">+</button>
                    </div>
                  </td>
                  <td>$300</td>
                  <td>
                    <button className="text-red-600">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Checkout Section */}
          <div className="col-span-1">
            <div className="border rounded shadow p-5">
              <h2 className="text-2xl font-bold">
                Total Amount: <span className="text-red-600">$300</span>
              </h2>
              <hr className="my-3" />
              <button className="bg-green-600 rounded p-2 text-white w-full mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
