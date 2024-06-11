import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import Layout from "../components/Layout";
const BookSearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      if (query.length > 2) {
        setLoading(true);
        try {
          const response = await axios.get(
            `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
          );
          console.log("Response:", response.data.docs);
          setResults(response.data.docs);
        } catch (error) {
          console.error("Error fetching books:", error);
        }
        setLoading(false);
      } else {
        setResults([]);
      }
    };

    const timerId = setTimeout(() => {
      fetchBooks();
    }, 100);

    return () => clearTimeout(timerId);
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="bg-slate-900 min-h-screen">
      <Layout>
        <div className="min-h-[400px] w-full flex flex-col justify-start items-center gap-8 mt-8">
          <h1 className="text-center text-5xl text-white font-bold font-[Fahkwang]">
            Bookshelf
          </h1>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for a book..."
            className="w-80 h-10 p-2 mb-5 text-lg text-center font-[Montserrat] rounded-md border-2 border-teal-600"
          />
          {loading && (
            <div className="flex flex-col justify-center items-center mt-20 mb-8">
              <Loader />
              <p className="text-white font-[Montserrat]">Loading...</p>
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center p-2">
            {results.map((book, index) => (
              <BookCard
                key={index}
                book={book}
                addToBookshelf={addToBookshelf}
              />
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default BookSearchPage;
