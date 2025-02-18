import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserStore = create(
  devtools((set) => ({
    user: null, // Initialize user as null
    users: null, //
    setUser: (user: any) => set({ user }),

    fetchAllUsersData: async (searchType: string, searchTerm: any) => {
      try {
        let url = "http://localhost:3000/auth/getAllUsers"; // Correct URL initialization
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        // Append search query if searchTerm is provided
        if (searchTerm) {
          url += `?${searchType}=${encodeURIComponent(searchTerm)}`;
        }
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
          set({ users: data }); // Update users in the store
        } else {
          console.error("Failed to fetch users data:", response.statusText);
        }}
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    },

    fetchUserData: async () => {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await fetch(
            "http://localhost:3000/auth/getCurrentUser",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${token}`, // Include token in the Authorization header
                "Content-Type": "application/json",
              },
            }
          );

          if (response.ok) {
            const data = await response.json();
            set({ user: data}); // Update user in the store
          } else {
            console.log(response);
            console.error("Failed to fetch user data:", response.statusText);
          }
        } else {
          console.error("No token found");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
  }))
);
