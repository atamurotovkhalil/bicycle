import { create } from "zustand";
import { devtools } from "zustand/middleware";
import {BikeDTO} from "@/Shared/Types/Product.ts";
import {SpareParts} from "@/Shared/Types/SpareParts.ts";

export interface AddToCartStore {
    cartProducts: BikeDTO[]; // replace `any` with your product type
    partCartProducts: SpareParts[];
    fetchCartData: () => Promise<void>;
    fetchPartCartData: () => Promise<void>;
    addToCart: (productId: string) => Promise<void>;
    addToPartCart: (productId: string) => Promise<void>;
    clearCart: () => void;
}

const BASE_URL = "http://localhost:8080/members";

export const useAddToCartStore = create<AddToCartStore>()(
    devtools((set) => ({
        cartProducts: [],
        partCartProducts: [],

        fetchCartData: async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found. Please log in.");
                return;
            }

            try {
                const res = await fetch(`${BASE_URL}/cart-data`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) alert(res.statusText);

                const data = await res.json();
                set({ cartProducts: data });
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : String(err);
                console.error("Error fetching cart data:", message);
                alert(`Error fetching cart data: ${message}`);
            }
        },

        fetchPartCartData: async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found. Please log in.");
                return;
            }

            try {
                const res = await fetch(`${BASE_URL}/part-cart-data`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) alert(res.statusText);

                const data = await res.json();
                set({ partCartProducts: data });
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : String(err);
                console.error("Error fetching part cart data:", message);
                alert(`Error fetching part cart data: ${message}`);
            }
        },

        addToCart: async (productId: string | undefined) => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found. Please log in.");
                return;
            }

            try {
                const res = await fetch(`${BASE_URL}/add-to-cart/${productId}`, {
                    method: "PATCH",
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error(res.statusText);

                const data = await res.json();
                console.log("Added to cart:", data);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : String(err);
                console.error("Error adding to cart:", message);
                alert(`Error adding to cart: ${message}`);
            }
        },

        addToPartCart: async (productId: string) => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found. Please log in.");
                return;
            }

            try {
                const res = await fetch(`${BASE_URL}/add-to-part-cart/${productId}`, {
                    method: "PATCH",
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error(res.statusText);

                const data = await res.json();
                console.log("Added to part cart:", data);
            } catch (err: unknown) {
                const message = err instanceof Error ? err.message : String(err);
                console.error("Error adding to part cart:", message);
                alert(`Error adding to part cart: ${message}`);
            }
        },

        clearCart: () => set({ cartProducts: [] }),
    }))
);
