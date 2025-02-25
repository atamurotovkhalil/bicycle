import React, { useEffect, useState } from "react";
import { useBookStore } from "../Stores/books.store";
import { Books } from "../types/books";
import { Link } from "react-router"; // ✅ Corrected Import
import { server_api } from "../Lib/config";

const AllBooks = () => {
  const [term, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  // ✅ Fetch books from Zustand store
  const books = useBookStore((state) => state.books);
  const fetchAllBooksData = useBookStore((state) => state.fetchAllBooksData);

  useEffect(() => {
    fetchAllBooksData("page", page);
  }, [page]); // ✅ Refetch books when `page` changes

  // ✅ Search books
  const searchBooks = () => {
    fetchAllBooksData("keyword", term);
  };

  return (
    <div className="mx-10 py-10">
      <h1 className="text-2xl font-bold mb-6 text-center">All Books</h1>

      {/* Search Bar */}
      <div className="shadow-lg p-4 rounded-md mb-6 flex items-center space-x-3">
        <input
          type="text"
          placeholder="Search books..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-400 p-2 rounded-md w-[250px]"
        />
        <button
          onClick={searchBooks}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Search
        </button>
      </div>

      {/* Book Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {books?.length > 0 ? (
          books.map((book: Books) => (
            <Link
              to={`/book/${book._id}`}
              key={book._id}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Book Image */}
              <img
                src={
                  book.images?.[0]
                    ? `${server_api.replace(/\/$/, "")}/${book.images[0]
                        .split("/")
                        .map(encodeURIComponent)
                        .join("/")}`
                    : "default-placeholder.jpg"
                }
                alt={`Book ${book.title}`}
                className="w-full h-48 object-cover"
              />

              {/* Book Details */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>
                <p className="text-gray-600 text-sm">Author: {book.author}</p>
                <p className="text-gray-700 font-bold mt-2">${book.price}</p>
                <p className="text-gray-600 text-xs mt-1">Sold: {book.sold}</p>
                <p className="text-gray-500 text-xs line-clamp-2">{book.description}</p>
                <p className="text-gray-600 text-xs mt-1">Quantity: {book.quantity}</p>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No books found.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          className="border px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          onClick={() => setPage((prev) => Math.max(1, prev - 1))}
          disabled={page === 1}
        >
          Previous
        </button>

        <span className="border px-4 py-2 rounded-md bg-gray-100">{page}</span>

        <button
          className="border px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
