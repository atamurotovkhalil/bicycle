import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAddToCartStore = create(
  devtools((set) => ({
    cartProducts: [],
    fetchCartData: async (searchType: string, searchTerm: any) => {
      try {
        let url = "http://localhost:3000/cart"; // Correct URL initialization
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        // Append search query if searchTerm is provided

        if (token) {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Uncomment if using authentication
            },
          });

          if (response.ok) {
            const data = await response.json();
            set({ cartProducts: data }); // Update users in the store
          } else {
            console.error("Failed to fetch users data:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    },
    addToCart: async (productId: string, userId: any) => {
      try {
        let url = "http://localhost:3000/cart"; // Correct URL initialization
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        if (token) {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // Uncomment if using authentication
            },
            body: JSON.stringify({ productId, userId }),
          });

          if (response.ok) {
            const data = await response.json();
          } else {
            console.error("Failed to fetch users data:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    },
    
    clearCart: () => {
      set({ cart: [] });
    },
  }))
);
