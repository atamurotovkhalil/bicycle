import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {BikeDTO, filter} from "@/Shared/Types/Product";
import {FilterState} from "@/Pages/Bikes/SortingBikes.tsx";

export interface BikeStore {
    products: BikeDTO[];
    fetchProducts: (filter: FilterState, page: number, size: number) => Promise<void>;
}

export const useProductStore = create<BikeStore>()(
    devtools((set) => ({
        products: [],
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
                set({products: data.content});
            } catch (error) {
                console.error("Error fetching product data:", error);
            }
        },
    }))
);
