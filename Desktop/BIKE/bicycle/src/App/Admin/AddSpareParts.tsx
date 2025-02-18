import React, { useState } from "react";

const categories = [
  { id: 1, name: "FRAME AND FORKS", value: "frameandforks" },
  { id: 2, name: "WHEELS AND TIRES", value: "wheelsandtires" },
  { id: 3, name: "BRAKING SYSTEM", value: "brakingsystem" },
  { id: 4, name: "DRIVETRAIN", value: "drivetrain" },
  { id: 5, name: "HANDLEBAR AND STEM", value: "handlebarandstem" },
];

export interface SpareProduct {
  _id: string;
  part: string;
  description: string;
  types: string;
  imageUrl: string;
  manufacturer: string;
  country: string;
  warranty: string;
  price: string;
  category: string;
  images: string[];
  status: string;
}

const AddSpareParts: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [product, setProduct] = useState<SpareProduct>({
    _id: "",
    part: "",
    description: "",
    types: "",
    imageUrl: "",
    manufacturer: "",
    country: "",
    warranty: "",
    price: "",
    category: selectedCategory,
    images: [] as string[],
    status: "ACTIVE_PRODUCT",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.target.files; // FileList or null
      if (fileList) {
          // Convert FileList to an array of File objects
          setImages((prevImages) => [
              ...prevImages,
              ...Array.from(fileList), // Add selected files to the state
          ]);
      }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    // Append product data (ensure numbers are strings)
    formData.append("part", product.part);
    formData.append("description", product.description);
    formData.append("types", product.types);
    formData.append("category", selectedCategory);
    formData.append("country", product.country);
    formData.append("manufacturer", product.manufacturer);
    formData.append("price", String(product.price)); // ✅ Convert to string
    formData.append("warranty", product.warranty);
    formData.append("status", product.status);

    // ✅ Append multiple images (ensure they are files, not strings)
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]); // Field name matches backend
    }

    // Debug FormData contents
    console.log("Submitting Product Data...");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    try {
      const response = await fetch("http://localhost:3000/spareparts", {
        method: "POST",
        body: formData,
        headers: {
          // ❌ REMOVE "Content-Type" - It must be set automatically
          // "Content-Type": "multipart/form-data",
          // "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.message || "Failed to upload product");
      }

      console.log("Product uploaded successfully!");
    } catch (error: any) {
      console.error("Error:", error.message);
    }
    console.log(product);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="part" className="block text-sm font-semibold mb-2">
              Part
            </label>
            <input
              type="text"
              id="part"
              name="part"
              value={product.part}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="types" className="block text-sm font-semibold mb-2">
              Types
            </label>
            <input
              type="text"
              id="types"
              name="types"
              value={product.types}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="manufacturer"
              className="block text-sm font-semibold mb-2"
            >
              Manufacturer
            </label>
            <input
              type="text"
              id="manufacturer"
              name="manufacturer"
              value={product.manufacturer}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <label className="block text-sm font-medium text-gray-700">
              Select Category
            </label>
            <select
              className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
            {selectedCategory && (
              <div className="mt-4 p-2 text-center bg-blue-100 border border-blue-500 rounded-lg">
                Selected Category:{" "}
                <span className="font-semibold">{selectedCategory}</span>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-semibold mb-2"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={product.country}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            {/* Image Upload */}
            <label className="block text-lg font-semibold">Upload Images</label>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border border-gray-300 rounded-lg"
            />

            {/* Image Preview */}
            {product.images.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {product.images.map((image, index) => (
                  <img
                    key={index}
                    src={image} // Directly use the image URL string
                    alt={`Preview ${index}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                ))}
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="warranty"
              className="block text-sm font-semibold mb-2"
            >
              Warranty
            </label>
            <input
              type="number"
              id="warranty"
              name="warranty"
              value={product.warranty}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          {/* Add more fields as required */}
        </div>

        <div className="mt-6">
          <label
            htmlFor="description"
            className="block text-sm font-semibold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleTextAreaChange}
            className="w-full p-2 border rounded-md"
            rows={4}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="">
            <label htmlFor="price" className="block text-sm font-semibold mb-2">
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSpareParts;
