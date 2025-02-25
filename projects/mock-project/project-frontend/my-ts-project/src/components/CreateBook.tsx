import React, { useState } from "react";
import { useBookStore } from "../Stores/books.store";

const CreateBook = () => {
  const [images, setImages] = useState<File[]>([]);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    price: "",
    sold: "",
    description: "",
    quantity: "",
  });

  const [error, setError] = useState("");
  const fetchAllBooksData = useBookStore((state) => state.fetchAllBooksData); // Refresh book list

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files; // FileList or null
    if (fileList) {
      setImages((prevImages) => [
        ...prevImages,
        ...Array.from(fileList), // Add selected files to the state
      ]);
    }
  };

  // ✅ Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation (ensure all fields are filled)
    if (Object.values(formData).some((val) => val.trim() === "") || images.length === 0) {
      setError("All fields are required, including the image.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("title", formData.title);
      formDataToSend.append("author", formData.author);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("sold", formData.sold);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("quantity", formData.quantity);

      // Append images to FormData
      for (let i = 0; i < images.length; i++) {
        formDataToSend.append("images", images[i]); // Field name matches backend
      }

      const response = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) throw new Error("Failed to create book");

      // Reset form data
      setFormData({
        title: "",
        author: "",
        price: "",
        sold: "",
        description: "",
        quantity: "",
      });
      setImages([]); // Clear selected images

      fetchAllBooksData(""); // Refresh book list
    } catch (error) {
      console.error("Error creating book:", error);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="mx-10">
      <div className="mx-auto">
        <div className="mx-auto w-[70%]">
          <h1 className="text-xl font-bold mb-4">Create Book</h1>

          {error && <p className="text-red-500">{error}</p>}

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

            {/* Image input */}
            <input
              type="file"
              name="images"
              onChange={handleImageChange}
              multiple
              className="border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-[#00987b] text-white p-2 rounded"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
