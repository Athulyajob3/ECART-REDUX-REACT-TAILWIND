import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Wishlist from "./Pages/Wishlist";
import Cart from "./Pages/Cart";
import View from "./Pages/View";
import Pnf from "./Pages/Pnf";
import Footer from "./Components/Footer";  
import "./index.css";

function App() {
  return (
     
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/:id/view" element={<View />} />
            <Route path="/*" element={<Pnf />} />
          </Routes>
        </div>

        {/* Footer (always visible) */}
        <Footer />
      </div>
    
  );
}

export default App;
