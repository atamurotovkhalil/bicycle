import React, { useState } from "react";

export const brand = [
  { id: 1, name: "Bianci", value: "bianci" },
  { id: 2, name: "BMC", value: "bmc" },
  { id: 3, name: "Ciclistino", value: "ciclistino" },
  { id: 4, name: "Cipollini", value: "cipollini" },
  { id: 5, name: "Colnago", value: "colnago" },
];

export const framematerial = [
  { id: 1, name: "Aluminum", value: "aluminum" },
  { id: 2, name: "Carbon", value: "carbon" },
  { id: 3, name: "Steel", value: "steel" },
];

export const categories = [
  { id: 1, name: "MOUNTAIN BIKES", value: "mountainbikes" },
  { id: 2, name: "CITY BIKES", value: "citybikes" },
  { id: 3, name: "ROAD BIKES", value: "roadbikes" },
  { id: 4, name: "GRAVEL BIKES", value: "gravelbikes" },
  { id: 5, name: "TRACK BIKES", value: "trackbikes" },
  {
    id: 6,
    name: "TRIATHLON BIKES",
    value: "triathlonbikes",
  },
  {
    id: 7,
    name: "DOUBLE SUSPENSION BIKES",
    value: "doublesuspensionbikes",
  },
  {
    id: 8,
    name: "ELECTRIC BICYCLES",
    value: "electricbicycles",
  },
  {
    id: 9,
    name: "WOMEN'S BICYCLES",
    value: "womensbicycles",
  },
  {
    id: 10,
    name: "CHILDREN'S BICYCLES",
    value: "childrensbicycles",
  },
];

export interface Product {
  _id: string;
  name: string;
  color: string;
  year: string;
  brand: string;
  category: string;
  wheelDiameter: string;
  framematerial: string;
  size: string;
  country: string;
  manufacturer: string;
  tires: string;
  frame: string;
  seatpost: string;
  saddle: string;
  fork: string;
  stem: string;
  wheels: string;
  handlebar: string;
  brakeType: string;
  brakingSystem: string;
  shifters: string;
  crankset: string;
  rearDerailleur: string;
  chain: string;
  numberofSpeeds: string;
  warranty: string;
  price: number;
  description: string;
  socialNetworks: {
    website: string;
    instagram: string;
    facebook: string;
    twitter: string;
  };
  images: string[];
  status: string;
}

const AddProduct: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedFrame, setSelectedFrame] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [product, setProduct] = useState<Product>({
    _id: "",
    name: "",
    color: "",
    year: "",
    brand: selectedBrand,
    category: selectedCategory,
    wheelDiameter: "",
    framematerial: selectedFrame,
    size: "",
    country: "",
    manufacturer: "",
    price: 0,
    description: "",
    tires: "",
    frame: "",
    seatpost: "",
    saddle: "",
    fork: "",
    stem: "",
    wheels: "",
    handlebar: "",
    brakeType: "",
    brakingSystem: "",
    shifters: "",
    crankset: "",
    rearDerailleur: "",
    chain: "",
    numberofSpeeds: "",
    warranty: "",
    socialNetworks: {
      website: "",
      instagram: "",
      facebook: "",
      twitter: "",
    },
    images: [] as string[],
    status: "ACTIVE_PRODUCT",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name in product.socialNetworks) {
      setProduct((prev) => ({
        ...prev,
        socialNetworks: {
          ...prev.socialNetworks,
          [name]: value,
        },
      }));
    } else {
      setProduct((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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
  };
  //   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const files = e.target.files; // Files selected in the input

  //     if (files) {
  //       // Convert FileList to an array and create object URLs
  //       const fileArray = Array.from(files);
  //       const imageUrl = URL.createObjectURL(fileArray[0]); // Create a URL for the first file

  //       //setImages(imageUrl); // Assuming setImages expects a single image URL string

  //       setProduct((prev) => ({
  //         ...prev,
  //         Images: [...prev.images, ...fileArray], // Append files (as an array) to the product
  //       }));
  //     }
  //   };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    // Append product data (ensure numbers are strings)
    formData.append("name", product.name);
    formData.append("color", product.color);
    formData.append("brand", selectedBrand);
    formData.append("description", product.description);
    formData.append("year", String(product.year)); // ✅ Convert number to string
    formData.append("wheeldiameter", String(product.wheelDiameter));
    formData.append("framematerial", selectedFrame);
    formData.append("size", product.size);
    formData.append("category", selectedCategory);
    formData.append("country", product.country);
    formData.append("manufacturer", product.manufacturer);
    formData.append("tires", product.tires);
    formData.append("frame", product.frame);
    formData.append("seatpost", product.seatpost);
    formData.append("saddle", product.saddle);
    formData.append("fork", product.fork);
    formData.append("price", String(product.price));
    formData.append("stem", product.stem);
    formData.append("wheels", product.wheels);
    formData.append("handlebar", product.handlebar);
    formData.append("braketype", product.brakeType);
    formData.append("brakingsystem", product.brakingSystem);
    formData.append("shifters", product.shifters);
    formData.append("crankset", product.crankset);
    formData.append("rearderailleur", product.rearDerailleur);
    formData.append("chain", product.chain);
    formData.append("numberofspeeds", String(product.numberofSpeeds)); // ✅ Convert to string
    formData.append("warranty", product.warranty);
    formData.append("status", product.status);

    // Append social networks as JSON string
    formData.append("socialnetworks[website]", product.socialNetworks.website);
    formData.append(
      "socialnetworks[instagram]",
      product.socialNetworks.instagram
    );
    formData.append(
      "socialnetworks[facebook]",
      product.socialNetworks.facebook
    );
    formData.append("socialnetworks[twitter]", product.socialNetworks.twitter);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]); // Field name matches backend
    }
    // ✅ Append multiple images (ensure they are files, not strings)
    // if (product.images && product.images.length > 0) {
    //   for (let i = 0; i < product.images.length; i++) {
    //     if (product.images[i]) {
    //       formData.append("images", product.images[i]); // ✅ Append File objects
    //     } else {
    //       console.warn(`Skipping non-file image: ${product.images[i]}`);
    //     }
    //   }
    // }

    // Debug FormData contents
    console.log("Submitting Product Data...");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }

    try {
      const response = await fetch("http://localhost:3000/products", {
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
            <label htmlFor="name" className="block text-sm font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="color" className="block text-sm font-semibold mb-2">
              Color
            </label>
            <input
              type="text"
              id="color"
              name="color"
              value={product.color}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-semibold mb-2">
              Year
            </label>
            <input
              type="text"
              id="year"
              name="year"
              value={product.year}
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
          <div className="w-full max-w-sm mx-auto">
            <label className="block text-sm font-medium text-gray-700">
              Select Category
            </label>
            <select
              className="mt-2 block w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              <option value="">All Categories</option>
              {brand?.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
            {selectedBrand && (
              <div className="mt-4 p-2 text-center bg-blue-100 border border-blue-500 rounded-lg">
                Selected Category:{" "}
                <span className="font-semibold">{selectedBrand}</span>
              </div>
            )}
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
              htmlFor="wheelDiameter"
              className="block text-sm font-semibold mb-2"
            >
              Wheel Diameter
            </label>
            <input
              type="number"
              id="wheelDiameter"
              name="wheelDiameter"
              value={product.wheelDiameter}
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
              value={selectedFrame}
              onChange={(e) => setSelectedFrame(e.target.value)}
            >
              <option value="">All Categories</option>
              {framematerial?.map((category) => (
                <option key={category.id} value={category.value}>
                  {category.name}
                </option>
              ))}
            </select>
            {selectedFrame && (
              <div className="mt-4 p-2 text-center bg-blue-100 border border-blue-500 rounded-lg">
                Selected Frame Material:{" "}
                <span className="font-semibold">{selectedFrame}</span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="size" className="block text-sm font-semibold mb-2">
              Size
            </label>
            <input
              type="text"
              id="size"
              name="size"
              value={product.size}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
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
          <div>
            <label htmlFor="tires" className="block text-sm font-semibold mb-2">
              Tires
            </label>
            <input
              type="text"
              id="tires"
              name="tires"
              value={product.tires}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="frame" className="block text-sm font-semibold mb-2">
              Frame
            </label>
            <input
              type="text"
              id="frame"
              name="frame"
              value={product.frame}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="seatpost"
              className="block text-sm font-semibold mb-2"
            >
              Seatpost
            </label>
            <input
              type="text"
              id="seatpost"
              name="seatpost"
              value={product.seatpost}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="saddle"
              className="block text-sm font-semibold mb-2"
            >
              Saddle
            </label>
            <input
              type="text"
              id="saddle"
              name="saddle"
              value={product.saddle}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="fork" className="block text-sm font-semibold mb-2">
              Fork
            </label>
            <input
              type="text"
              id="fork"
              name="fork"
              value={product.fork}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="stem" className="block text-sm font-semibold mb-2">
              Stem
            </label>
            <input
              type="text"
              id="stem"
              name="stem"
              value={product.stem}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="wheels"
              className="block text-sm font-semibold mb-2"
            >
              Wheels
            </label>
            <input
              type="text"
              id="wheels"
              name="wheels"
              value={product.wheels}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="handlebar"
              className="block text-sm font-semibold mb-2"
            >
              Handlebar
            </label>
            <input
              type="text"
              id="handlebar"
              name="handlebar"
              value={product.handlebar}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="brakeType"
              className="block text-sm font-semibold mb-2"
            >
              Brake Type
            </label>
            <input
              type="text"
              id="brakeType"
              name="brakeType"
              value={product.brakeType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="brakingSystem"
              className="block text-sm font-semibold mb-2"
            >
              Braking System
            </label>
            <input
              type="text"
              id="brakingSystem"
              name="brakingSystem"
              value={product.brakingSystem}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="shifters"
              className="block text-sm font-semibold mb-2"
            >
              Shifters
            </label>
            <input
              type="text"
              id="shifters"
              name="shifters"
              value={product.shifters}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="crankset"
              className="block text-sm font-semibold mb-2"
            >
              Crankset
            </label>
            <input
              type="text"
              id="crankset"
              name="crankset"
              value={product.crankset}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="rearDerailleur"
              className="block text-sm font-semibold mb-2"
            >
              Rear Derailleur
            </label>
            <input
              type="text"
              id="rearDerailleur"
              name="rearDerailleur"
              value={product.rearDerailleur}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label htmlFor="chain" className="block text-sm font-semibold mb-2">
              Chain
            </label>
            <input
              type="text"
              id="chain"
              name="chain"
              value={product.chain}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label
              htmlFor="numberofSpeeds"
              className="block text-sm font-semibold mb-2"
            >
              Number of Speeds
            </label>
            <input
              type="text"
              id="numberofSpeeds"
              name="numberofSpeeds"
              value={product.numberofSpeeds}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="warranty"
              className="block text-sm font-semibold mb-2"
            >
              Warranty
            </label>
            <input
              type="text"
              id="warranty"
              name="warranty"
              value={product.warranty}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Social Networks</h3>
          {Object.keys(product.socialNetworks).map((key) => (
            <div>
              <label htmlFor={key} className="block text-sm font-semibold mb-2">
                {key}
              </label>
              <input
                key={key}
                type="text"
                name={key}
                placeholder={key}
                value={
                  product.socialNetworks[
                    key as keyof typeof product.socialNetworks
                  ]
                }
                onChange={handleInputChange}
                className="w-full p-2 m-2 border rounded"
              />
            </div>
          ))}
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

export default AddProduct;
