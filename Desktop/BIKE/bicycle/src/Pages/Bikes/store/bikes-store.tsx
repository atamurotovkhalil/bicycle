import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { BikeDTO, filter } from "@/Shared/Types/Product";

interface store {
  products: BikeDTO[];
  fetchProducts: (filter: filter, page: number, size: number) => Promise<void>;
}

export const useProductStore = create(
  devtools((set) => ({
    products: [], // Initialize products as null
    //filteredProducts: [], //
    //setFilteredProducts: (products: BikeDTO[]) => set({ filteredProducts: products }),
    //
    //relatedProduct: null, // Initialize related
    //setRelatedProduct: (product: BikeDTO) => set({ relatedProduct: product }),
    fetchProducts: async (filter: filter, page: number, size: number) => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        let url = `http://localhost:8080/bikes/all`;

        if (page && size) {
          url += `?page=${encodeURIComponent(page)}&size=${encodeURIComponent(
            size
          )}`;
        }
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            priceFrom: filter?.priceFrom[0],
            priceTo: filter?.priceTo[0],
            checked: filter?.checked,
            category: filter?.category,
            brand: filter?.brand,
            frame: filter?.frame,
            color: filter?.color,
            name: filter?.name,
          }),
        });

        if (!response.ok) {
          throw new Error(
            `Failed to fetch product data: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log(data);
        set({ products: data.content });
        // Update Zustand store with fetched products
        // console.log(data.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    },
  }))
);
