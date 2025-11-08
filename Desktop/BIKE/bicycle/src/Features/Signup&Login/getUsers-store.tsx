import { User } from "@/Shared/Types/Member";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface Users {
  user: User | null;
  users: User[] | null;
  setUser: (user: User | null) => void;
  fetchAllUsersData: (searchType: string, searchTerm: string) => Promise<void>;
  fetchUserData: () => Promise<void>;
}

export const useUserStore = create<Users>()(
  devtools((set) => ({
    user: null,
    users: null,

    setUser: (user) => set({ user }),

    fetchAllUsersData: async (searchType, searchTerm) => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        let url = "http://localhost:8080/members";
        if (searchTerm) {
          url += `?${searchType}=${encodeURIComponent(searchTerm)}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.ok) {
          const data = await response.json();
          set({ users: data });
        } else {
          console.error("Failed to fetch users data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching users data:", error);
      }
    },

    fetchUserData: async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("No token found");
          return;
        }

        const response = await fetch("http://localhost:8080/members/principle", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          set({ user: data });
        } else {
          console.error("Failed to fetch user data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    },
  }))
);
