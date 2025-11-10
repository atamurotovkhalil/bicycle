import {useEffect, useState} from "react";
import {UserStore, useUserStore} from "@/Features/Signup&Login/getUsers-store";


const Index = () => {
    const currentUser = useUserStore((state: UserStore) => state.user);
    const fetchUserData = useUserStore((state: UserStore) => state.fetchUserData);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
    });

    // Fetch user data on component mount
    useEffect(() => {
        (async () => {
            try {
                await fetchUserData();
            } catch (e: unknown) {
                alert("Error fetching user" + e);
            }
        })()

    }, [fetchUserData]);

    // Set user state when currentUser updates
    useEffect(() => {
        if (currentUser) {
            setUser({
                firstName: currentUser.firstName,
                lastName: currentUser.lastName,
                phone: currentUser.phone,
                address: currentUser.address,
            });
        }
    }, [currentUser]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");
            if (!token) return;
            const response = await fetch(
                `http://localhost:8080/members/update-info`,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify(user),
                }
            );

            if (response.ok) {
                alert("Profile updated successfully!");
               await fetchUserData(); // Refresh user data after update
            } else {
                alert("Failed to update profile!");
            }
        } catch (error) {
            console.error("Error during form submission:", error);
            alert("An error occurred while updating the profile!");
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Personal Information</h2>
            <form onSubmit={handleSubmit}>
                <div className="border p-4 rounded-lg">
                    <h2 className="text-xl font-bold mb-4">Edit Information</h2>
                    <div className="grid grid-cols-10 gap-2">
                        <div className="col-span-10">
                            First Name*
                            <input
                                type="text"
                                name="firstName"
                                value={user.firstName}
                                placeholder="Name*"
                                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-5">
                            Last Name*
                            <input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                placeholder="Last name*"
                                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-span-5">
                            Phone*
                            <input
                                type="text"
                                name="phone"
                                value={user.phone}
                                placeholder="Last name*"
                                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="col-span-10">
                        Address*
                        <textarea
                            name="address"
                            value={user.address}
                            placeholder="Detailed Information*"
                            className="my-1 border bg-slate-200 h-32 rounded-lg w-full"
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg font-bold"
                >
                    Save changes
                </button>
            </form>
        </div>
    );
};

export default Index;
