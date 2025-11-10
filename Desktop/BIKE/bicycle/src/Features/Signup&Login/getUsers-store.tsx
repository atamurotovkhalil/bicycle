import { User } from "@/Shared/Types/Member";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UserStore {
    user: User | null;
    users: User[] | null;
    setUser: (user: User | null) => void;
    fetchAllUsersData: () => Promise<void>;
    fetchUserData: () => Promise<void>;
}

const API_BASE_URL = "http://localhost:8080/members";

export const useUserStore = create<UserStore>()(
    devtools((set => ({
        user: null,
        users: null,

        fetchAllUsersData: async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found. Please log in again.");
                return;
            }

            try {
                const res = await fetch(API_BASE_URL, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!res.ok) {
                    alert(`Failed to fetch users data: ${res.statusText}`);
                    return;
                }

                const data = (await res.json()) as User[];
                set({ users: data });
            } catch (err) {
                console.error("Error fetching users data:", err);
                alert("An error occurred while fetching users data. Please try again.");
            }
        },

        fetchUserData: async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                alert("No token found. Please log in again.");
                return;
            }

            try {
                const res = await fetch(`${API_BASE_URL}/principle`, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (!res.ok) {
                    alert(`Failed to fetch user data: ${res.statusText}`);
                    return;
                }

                const data = (await res.json()) as User;
                set({ user: data });
            } catch (err) {
                console.error("Error fetching user data:", err);
                alert("An error occurred while fetching user data. Please try again.");
            }
        },
    }))
));
