import React, { useState } from "react";

const categories = [
    { id: 1, name: "FRAME AND FORKS", value: "FRAME_AND_FORKS" },
    { id: 2, name: "WHEELS AND TIRES", value: "WHEELS_AND_TIRES" },
    { id: 3, name: "BRAKING SYSTEM", value: "BRAKING_SYSTEM" },
    { id: 4, name: "DRIVETRAIN", value: "DRIVETRAIN" },
    { id: 5, name: "HANDLEBAR AND STEM", value: "HANDLEBAR_AND_STEM" },
];

const AddSpareParts: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [images, setImages] = useState<File[]>([]);
    const [previewImages, setPreviewImages] = useState<string[]>([]);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        manufacturer: "",
        country: "",
        warranty: "",
        price: "",
        inStock: "",
        sold: "0",
        status: "ACTIVE",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setProduct((prev) => ({ ...prev, [name]: value }));
    };

    console.log(product, selectedCategory)

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return;

        const newFiles = Array.from(files);
        setImages((prev) => [...prev, ...newFiles]);

        // Generate preview URLs
        const newPreviews = newFiles.map((file) => URL.createObjectURL(file));
        setPreviewImages((prev) => [...prev, ...newPreviews]);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategory) {
            alert("Please select a category before submitting.");
            return;
        }

        const formData = new FormData();
        Object.entries(product).forEach(([key, value]) => {
            formData.append(key, value);
        });
                formData.append("category", selectedCategory);

        images.forEach((img) => formData.append("images", img));

        console.log("Submitting Product Data...");
        for (const pair of formData.entries()) {
            console.log(pair[0], ":", pair[1]);
        }

        try {
            const token = localStorage.getItem("token");
            if (!token) return;
            const response = await fetch("http://localhost:8080/spare-parts/add", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
                body: formData,
            });

            if (!response.ok) {
                const err = await response.text();
                alert(err || "Failed to upload product");
            }
            console.log(response);

            alert("Product uploaded successfully!");
            setProduct({
                name: "",
                description: "",
                manufacturer: "",
                country: "",
                warranty: "",
                price: "",
                inStock: "",
                sold: "0",
                status: "ACTIVE",
            });
            setSelectedCategory("");
            setImages([]);
            setPreviewImages([]);
        } catch (err: unknown) {
            alert("Upload failed: " + err);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Add Spare Part</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* --- Product Info --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={product.name}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Manufacturer</label>
                        <input
                            type="text"
                            name="manufacturer"
                            value={product.manufacturer}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Category</option>
                            {categories.map((cat) => (
                                <option key={cat.id} value={cat.value}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Country</label>
                        <input
                            type="text"
                            name="country"
                            value={product.country}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Warranty (months)</label>
                        <input
                            type="number"
                            name="warranty"
                            value={product.warranty}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">Price (₩)</label>
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold mb-2">In Stock</label>
                        <input
                            type="number"
                            name="inStock"
                            value={product.inStock}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded-md"
                            required
                        />
                    </div>
                </div>

                {/* --- Description --- */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Description</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                        className="w-full p-2 border rounded-md"
                        rows={4}
                        required
                    />
                </div>

                {/* --- Image Upload --- */}
                <div>
                    <label className="block text-sm font-semibold mb-2">Upload Images</label>
                    <input
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />

                    {previewImages.length > 0 && (
                        <div className="flex flex-wrap gap-3 mt-3">
                            {previewImages.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`Preview ${i}`}
                                    className="w-20 h-20 object-cover rounded-lg border"
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* --- Submit Button --- */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddSpareParts;
