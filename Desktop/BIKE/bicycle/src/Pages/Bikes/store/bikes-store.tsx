import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product } from "@/App/Admin/AddProduct";

export const useProductStore = create(
  devtools((set) => ({
    products: [], // Initialize products as null
    filteredProducts: [], //
    setFilteredProducts: (products: Product[]) => set({ filteredProducts: products }),
    //
    relatedProduct: null, // Initialize related
    setRelatedProduct: (product: Product) => set({ relatedProduct: product }),
    fetchProducts: async (searchType: string, searchTerm: string | number) => {
     try {
        let url = `http://localhost:3000/products`;

        // Append search query if searchTerm is provided
        if (searchTerm) {
          url += `?${searchType}=${encodeURIComponent(searchTerm)}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${token}`, // Uncomment if using authentication
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch product data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        if (data.length > 0) {
            set({ products: data });
          }; // Update Zustand store with fetched products
       // console.log(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    },
  }))
);
