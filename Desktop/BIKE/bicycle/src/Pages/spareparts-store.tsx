import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { SpareParts } from "@/Shared/Types/SpareParts";

interface Filter {
    term?: string;
    category?: string;
}

export interface SparePartStore {
    spareProducts: SpareParts[];
    fetchSpareProducts: (filter?: Filter, page?: number, size?: number) => Promise<void>;
}

const API_BASE_URL = "http://localhost:8080/spare-parts/all";

export const useSparePartsStore = create<SparePartStore>()(
    devtools((set) => ({
        spareProducts: [],

        fetchSpareProducts: async (filter = {}, page = 0, size = 10) => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    alert("No token found. Please log in.");
                    return;
                }

                const url = `${API_BASE_URL}?page=${encodeURIComponent(page)}&size=${encodeURIComponent(size)}`;

                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        term: filter.term?.toLowerCase() || "",
                        category: filter.category || "",
                    }),
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch spare products: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                set({ spareProducts: data.content || [] });
            } catch (error: unknown) {
                const message = error instanceof Error ? error.message : String(error);
                console.error("Error fetching spare products:", message);
                alert(`Error fetching spare products: ${message}`);
            }
        },
    }))
);
