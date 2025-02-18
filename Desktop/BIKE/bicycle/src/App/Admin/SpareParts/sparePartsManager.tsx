import { useEffect, useState } from "react";
import { useProductStore } from "@/Pages/Bikes/store/bikes-store";
import { FaSearch } from "react-icons/fa";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/UI/pagination";
import { server_api } from "./../../../Shared/Lib/config";
import { Product } from "../AddProduct";
import { useSparePartsStore } from "@/Pages/spareparts-store";
import { SpareProduct } from "../AddSpareParts";

type Props = {};

const SparePartsManager = (props: Props) => {
  const fetchSpareProducts = useSparePartsStore(
    (state: any) => state.fetchSpareProducts
  );
  const spareProducts = useSparePartsStore((state: any) => state.spareProducts);
  const [searchTerm, setSearchTerm] = useState("");
  //const products = useProductStore((state: any) => state.products);
  //const fetchProducts = useProductStore((state: any) => state.fetchProducts);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchSpareProducts(); // Fetch products on component mount
  }, []);
  console.log(spareProducts);
  console.log(
    "Image URL:",
    `${server_api.replace(/\/$/, "")}/${spareProducts[0]?.images[0]}`
  );

  const searchProducts = (event: any) => {
    event.preventDefault();
    fetchSpareProducts("keyword", searchTerm);
  };
  function forwardPage() {
    fetchSpareProducts("keyword", searchTerm);
    console.log(searchTerm);
    if (page > 0 && 0 <= spareProducts.length) {
      setPage(page + 1);
      fetchSpareProducts("page", page + 1);
    }
  }
  function prevPage() {
    fetchSpareProducts("keyword", searchTerm);
    console.log(searchTerm);
    if (page >= 1 && 0 <= spareProducts.length) {
      setPage(page - 1);
      fetchSpareProducts("page", page - 1);
    }
  }

  async function handleDeleteProduct(id: string) {
    const deleteProduct = window.confirm(
      "Are you sure you want to delete this product?"
    );
    if (deleteProduct === true) {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        const response = await fetch(`http://localhost:3000/spareparts/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        fetchSpareProducts();

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(
            `Failed to delete product: ${
              errorData.message || response.statusText
            }`
          );
        }

        console.log(`Product with ID ${id} was successfully deleted.`);
      } catch (err: any) {
        console.error("Failed to delete product:", err.message || err);
      }
    }
  }

  async function handleActivate(product: SpareProduct) {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found. Please log in.");
      }
      if (product.status === "ACTIVE_PRODUCT") {
        const blockUser = window.confirm(
          "Are you sure you want to block this user?"
        );
        if (blockUser === true) {
          const response = await fetch(
            `http://localhost:3000/spareparts/${product._id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "SOLD_PRODUCT" }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
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
        if (activeUser === true) {
          const response = await fetch(
            `http://localhost:3000/spareparts/${product._id}`,
            {
              method: "PATCH",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ status: "ACTIVE_PRODUCT" }),
            }
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(
              `Failed to activate member: ${
                errorData.message || response.statusText
              }`
            );
          }
        }
      }
      fetchSpareProducts();

      console.log(`Member with ID ${product._id} was successfully activated.`);
    } catch (err: any) {
      console.error("Failed to activate member:", err.message || err);
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
              onChange={(e) => setSearchTerm(e.target.value)}
              className=" border border-black rounded-md"
            ></input>
            <button
              onClick={searchProducts}
              className="border border-primary rounded-md bg-primary text-white text-sm hover:bg-primary-dark duration-75"
            >
              <FaSearch className="text-sm bg-primary text-white  m-2" />
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
              {spareProducts?.map((product: SpareProduct) => (
                <tr key={product?._id} className="text-center">
                  <td className="border border-gray-300 px-4 py-2">
                    {product?._id}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <img
                      src={
                        product?.images?.[0]
                          ? `${server_api.replace(/\/$/, "")}/${encodeURI(
                              product.images[0]
                            )}`
                          : "default-placeholder.jpg"
                      }
                      alt={product.part}
                      className="w-12 h-12 object-cover rounded-md mx-auto"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.part}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.types}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.manufacturer}
                  </td>
                  <td
                    className={`border border-gray-300 px-4 py-2 font-semibold ${
                      product.status === "ACTIVE_PRODUCT"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {product.status}
                  </td>
                  <td className="border flex border-gray-300 px-4 py-2">
                    <button
                      onClick={() => {
                        handleActivate(product);
                      }}
                      className={
                        product.status === "SOLD_PRODUCT"
                          ? "bg-green-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-green-600"
                          : "bg-red-500 text-white mx-1 px-3 py-1 rounded-md hover:bg-red-600"
                      }
                    >
                      {product.status === "SOLD_PRODUCT" ? "ACTIVATE" : "BLOCK"}
                    </button>

                    <button
                      onClick={() => handleDeleteProduct(product._id)}
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
              <button disabled={page === 1}>
                <PaginationPrevious onClick={() => prevPage()} />
              </button>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>{page}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <button disabled={spareProducts?.length === 0}>
                <PaginationNext onClick={() => forwardPage()} />
              </button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default SparePartsManager;
