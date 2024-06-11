import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BookSearchPage from "./pages/BookSearchPage";
import PersonalBookshelfPage from "./pages/PersonalBookshelfPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [bookshelf, setBookshelf] = useState(
    JSON.parse(localStorage.getItem("bookshelf")) || []
  );

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
    toast.success("Book added to bookshelf!");
  };

  return (
    <Router>
      <div className="">
        
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={<BookSearchPage addToBookshelf={addToBookshelf} />}
          />
          <Route path="/bookshelf" element={<PersonalBookshelfPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
