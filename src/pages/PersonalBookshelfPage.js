import React, { useEffect, useState } from "react";
import Bookshelf from "../components/Bookshelf";
import Layout from "../components/Layout";
const PersonalBookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem("bookshelf")) || [];
    setBookshelf(savedBookshelf);
  }, []);

  return (
    <div className="bg-slate-900 min-h-[400px]">
      <Layout>
        <h1 className="text-center text-4xl text-white font-bold font-[Fahkwang] my-8">
          My Bookshelf
        </h1>
        <Bookshelf books={bookshelf} />
      </Layout>
    </div>
  );
};

export default PersonalBookshelfPage;
