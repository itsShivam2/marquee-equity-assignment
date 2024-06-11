import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
