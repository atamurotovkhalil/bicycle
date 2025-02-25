import React, { useEffect, useState, useCallback } from "react";
import { Link, useParams } from "react-router";
import { useBookStore } from "../Stores/books.store";
import { server_api } from "../Lib/config";

const Book = () => {
  const [edit, setEdit] = useState(false);
  const { id } = useParams();

  const currentBook = useBookStore((state) => state.currentBook);
  const getCurrentBook = useBookStore((state) => state.getCurrentBook);
  const removeBook = useBookStore((state) => state.removeBook);
  const fetchAllBooksData = useBookStore((state) => state.fetchAllBooksData);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    sold: "",
    description: "",
    quantity: "",
  });

  // ✅ Memoize getCurrentBook to prevent unnecessary re-renders
  const fetchBook = useCallback(() => {
    if (id) {
      getCurrentBook(id);
    }
  }, [id, getCurrentBook]);

  useEffect(() => {
    fetchBook();
  }, [fetchBook]);

  useEffect(() => {
    if (currentBook) {
      setFormData({
        title: currentBook.title || "",
        author: currentBook.author || "",
        price: String(currentBook.price || ""),
        sold: String(currentBook.sold || ""),
        description: currentBook.description || "",
        quantity: String(currentBook.quantity || ""),
      });
    }
  }, [currentBook]);

  // ✅ Remove Book with API Call
  const removeItem = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (confirmDelete===true) {
      try {
        const response = await fetch(`http://localhost:3000/api/books/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) throw new Error("Failed to delete book");

        //removeBook(id); // Remove from Zustand store
        fetchAllBooksData(''); // Refresh book list
      } catch (error) {
        console.error("Error deleting book:", error);
      }
    }
  };

  // ✅ Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle edit book form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to update book");

      setEdit(false);
      fetchBook(); // Refresh current book details
    } catch (error) {
      console.error("Error updating book:", error);
    }
  };

  return (
    <div className="m-10">
      <div className="mx-auto w-[70%]">
        <div className="border p-4 my-2 rounded-lg shadow">
          <div className="flex items-center justify-center">
            <img
              src={
                currentBook.images?.[0]
                  ? `${server_api.replace(/\/$/, "")}/${currentBook.images[0]
                      .split("/")
                      .map(encodeURIComponent)
                      .join("/")}`
                  : "default-placeholder.jpg"
              }
              alt={`Product ${currentBook._id}`}
              className="w-96 h-96 object-cover mb-4"
            />
          </div>
          <h2 className="text-lg font-bold">{currentBook?.title}</h2>
          <p className="text-gray-600">{currentBook?.author}</p>
          <h2 className="text-lg font-bold">{currentBook?.price}</h2>
          <p className="text-gray-600">{currentBook?.sold}</p>
          <p className="text-gray-600">{currentBook?.description}</p>
          <p className="text-gray-600">{currentBook?.quantity}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <Link to="/allbooks">
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => removeItem(currentBook?._id)}
            >
              Delete
            </button>
          </Link>
        </div>

        {edit && (
          <div className="mt-6">
            <h1 className="text-xl font-bold mb-4">Edit Book</h1>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="text"
                name="author"
                placeholder="Author"
                value={formData.author}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="sold"
                placeholder="Sold"
                value={formData.sold}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              <button
                type="submit"
                className="bg-green-500 text-white p-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEdit(false)}
                className="bg-gray-500 text-white p-2 rounded"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Book;
