import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useAddToCartStore = create(
  devtools((set) => ({
    cartProducts: [],
    fetchCartData: async () => {
      try {
        let url = "http://localhost:8080/members/cart-data"; // Correct URL initialization
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        // Append search query if searchTerm is provided

        if (token) {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`, // Uncomment if using authentication
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data);
            set({ cartProducts: data }); // Update users in the store
          } else {
            console.error("Failed to fetch users data:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    },
    addToCart: async (productId: string) => {
      try {
        const url = `http://localhost:8080/members/add-to-cart/${productId}`; // Correct URL initialization
        const token = localStorage.getItem("token"); // Retrieve token from localStorage

        if (token) {
          const response = await fetch(url, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`, // Uncomment if using authentication
            },
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data)
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
