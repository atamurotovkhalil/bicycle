import { create } from "zustand";
import { devtools } from "zustand/middleware";
//import { Product } from "@/App/Admin/AddProduct";

export const useSparePartsStore = create(
  devtools((set) => ({
    spareProducts: [], // Initialize products as null
    //relatedProduct: null, // Initialize related
    //setRelatedProduct: (product: Product) => set({ relatedProduct: product }),
    fetchSpareProducts: async (searchType: string, searchTerm: string | number) => {
     try {
        let url = `http://localhost:3000/spareparts`;

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
            set({ spareProducts: data });
          }; // Update Zustand store with fetched products
       // console.log(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    },
  }))
);
