import React from "react";

const Bookshelf = ({ books }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center p-2">
      {books.map((book, index) => (
        <div
          key={index}
          className="min-h-[200px] text-white font-[Montserrat] bg-gray-800 border-2 border-l-zinc-300 rounded-md"
        >
          <div className="flex justify-between items-center gap-2 text-lg sm:text-xl p-2 my-2">
            <h3 className="font-bold font-serif">{book.title}</h3>

            <p className="flex gap-1 items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon
                  fill="white"
                  stroke="black"
                  stroke-width="1"
                  points="12,2 15,8 22,9 17,14 18,21 12,18 6,21 7,14 2,9 9,8"
                />
              </svg>

              <span>{book.ratings_average?.toFixed(2) ?? "N/A"}</span>
            </p>
          </div>
          <p className="flex items-center justify-between gap-2 p-2 text-lg font-bold">
            <span>First Published </span>
            <span className="font-bold"> {book.first_publish_year}</span>
          </p>
          <p className="flex items-center justify-between gap-2 p-2 text-lg font-bold">
            <span>Author </span>
            <span className="font-bold">{book.author_name}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bookshelf;
