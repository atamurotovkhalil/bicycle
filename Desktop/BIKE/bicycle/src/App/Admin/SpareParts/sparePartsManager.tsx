import React, {useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/Components/UI/pagination";
import {server_api} from "@/Shared/Lib/config.ts";
import {SparePartStore, useSparePartsStore} from "@/Pages/spareparts-store";
import {SpareParts} from "@/Shared/Types/SpareParts.ts";


const SparePartsManager = () => {
    const fetchSpareProducts = useSparePartsStore(
        (state: SparePartStore) => state.fetchSpareProducts
    );
    const spareProducts = useSparePartsStore((state: SparePartStore) => state.spareProducts);

    useEffect(() => {
        (async () => {
            try {
                await fetchSpareProducts();
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : String(err);
                alert(`Error fetching spare products: ${message}`);
            }
        })(); // ← Important: immediately invoke the async function
    }, [fetchSpareProducts]);


    const searchProducts = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    async function handleDeleteProduct(id: string) {
        const deleteProduct = window.confirm(
            "Are you sure you want to delete this product?"
        );
        if (deleteProduct) {
            try {
                const token = localStorage.getItem("token");

                if (!token) {
                    alert("No token found. Please log in.");
                    return;
                }

                const response = await fetch(`http://localhost:8080/spare-parts/${id}`, {
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                await fetchSpareProducts();

                if (!response.ok) {
                    const errorData = await response.json();
                    alert(
                        `Failed to delete product: ${
                            errorData.message || response.statusText
                        }`
                    );
                }

                console.log(`Product with ID ${id} was successfully deleted.`);
            } catch (err: unknown) {
                console.error("Failed to delete product:", err);
            }
        }
    }

    async function handleActivate(product: SpareParts) {
        try {
            const token = localStorage.getItem("token");

            if (!token) {
                alert("No token found. Please log in.");
                return;
            }
            if (product.status === "ACTIVE") {
                const blockUser = window.confirm(
                    "Are you sure you want to block this user?"
                );
                if (blockUser) {
                    const response = await fetch(
                        `http://localhost:8080/spareparts/${product.id}`,
                        {
                            method: "PATCH",
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({status: "SOLD"}),
                        }
                    );
                    if (!response.ok) {
                        const errorData = await response.json();
                        alert(
                            `Failed to activate member: ${
                                errorData.message || response.statusText
                            }`
                        );
                    }
                }
            } else if (product.status === "SOLD_PRODUCT") {
                const activeUser = window.confirm(
                    "Are you sure you want to activate this user?"
                );
                if (activeUser) {
                    const response = await fetch(
                        `http://localhost:8080/spare-parts/${product.id}`,
                        {
                            method: "PATCH",
                            headers: {
                                Authorization: `Bearer ${token}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({status: "ACTIVE"}),
                        }
                    );
                    if (!response.ok) {
                        const errorData = await response.json();
                        alert(
                            `Failed to activate member: ${
                                errorData.message || response.statusText
                            }`
                        );
                    }
                }
            }
            await fetchSpareProducts();

            console.log(`Member with ID ${product.id} was successfully activated.`);
        } catch (err: unknown) {
            console.error("Failed to activate member:", err);
        }
    }

    return (
        <div>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Spare Parts Management</h2>
                <div className="col-span-1 shadow-2xl h-[100px] m-3 p-3">
                    <p className="text-xl m-2 italic">Searching:</p>
                    <div className="w-[200px] flex">
                        <input
                            type="text"
                            className=" border border-black rounded-md"
                        ></input>
                        <button
                            onClick={searchProducts}
                            className="border border-primary rounded-md bg-primary text-white text-sm hover:bg-primary-dark duration-75"
                        >
                            <FaSearch className="text-sm bg-primary text-white  m-2"/>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full border-collapse border border-gray-300">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Image</th>
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Brand</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {spareProducts?.map((product: SpareParts) => (
                            <tr key={product?.id} className="text-center">
                                <td className="border border-gray-300 px-4 py-2">
                                    {product?.id}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <img
                                        src={
                                            product.images && product.images[0]
                                                ? `${server_api.replace(/\/$/, "")}/${encodeURI(
                                                    product.images[0].path
                                                )}/${encodeURIComponent(
                                                    product.images[0].storageName
                                                )}`
                                                : "default-placeholder.jpg"
                                        }
                                        alt={product.name}
                                        className="w-12 h-12 object-cover rounded-md mx-auto"
                                    />
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product.name}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product.category}
                                </td>
                                <td className="border border-gray-300 px-4 py-2">
                                    {product.manufacturer}
                                </td>
                                <td
                                    className={`border border-gray-300 px-4 py-2 font-semibold ${
                                        product.status === "ACTIVE"
                                            ? "text-green-600"
                                            : "text-red-600"
                                    }`}
                                >
                                    {product.status}
                                </td>
                                <td className="border flex border-gray-300 px-4 py-2">
                                    <button
                                        onClick={() => {
                                            void handleActivate(product);
                                        }}
                                        className={
                                            product.status === "SOLD"
                                                ? "bg-green-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-green-600"
                                                : "bg-red-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-red-600"
                                        }
                                    >
                                        {product.status === "SOLD" ? "ACTIVATE" : "BLOCK"}
                                    </button>

                                    <button
                                        onClick={() => handleDeleteProduct(product.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <button >
                                <PaginationPrevious />
                            </button>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink>{0}</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <button disabled={spareProducts?.length === 0}>
                                <PaginationNext />
                            </button>
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default SparePartsManager;
