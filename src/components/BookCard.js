import React from "react";
const BookCard = ({ book, addToBookshelf }) => {
  if (!book) return null;

  const { title, ratings_average, author_name, first_publish_year } = book;

  return (
    <div className="min-h-72 p-1 my-1 text-white font-[Montserrat] bg-gray-800 border-2 border-l-zinc-300 rounded-md flex flex-col justify-between">
      <div className="min-h-24 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-2 p-2 my-2">
          <h3 className="text-xl font-bold font-serif">{title}</h3>

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

            <span>{ratings_average?.toFixed(2) ?? "N/A"}</span>
          </p>
        </div>
        <p className="p-2 text-lg font-bold">
          Author : <span className="font-bold">{author_name.join(", ")}</span>
        </p>
        <p className="p-2 text-lg font-bold">
          First Published :{" "}
          <span className="font-bold"> {first_publish_year}</span>
        </p>
      </div>
      <div className="flex justify-center items-center mt-4 mb-4">
        <button
          onClick={() => addToBookshelf(book)}
          className="bg-pink-600 px-2 py-3 rounded-md hover:bg-pink-700"
        >
          Add to Bookshelf
        </button>
      </div>
    </div>
  );
};

export default BookCard;
