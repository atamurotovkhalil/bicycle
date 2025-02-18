import { useEffect, useState } from "react";
import { useUserStore } from "@/Features/Signup&Login/getUsers-store";

interface User {
  firstname: string;
  lastname: string;
  phonenumber: string;
  address: string;
  city: string;
  street: string;
  house: string;
  apartment: string;
  detailedinformation: string;
}

const Index = () => {
  const currentUser = useUserStore((state: any) => state.user);
  const fetchUserData = useUserStore((state: any) => state.fetchUserData);
  const [user, setUser] = useState<User>({
    firstname: "",
    lastname: "",
    phonenumber: "",
    address: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    detailedinformation: "",
  });

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  // Set user state when currentUser updates
  useEffect(() => {
    if (currentUser) {
      setUser({
        firstname: currentUser.firstname || "",
        lastname: currentUser.lastname || "",
        phonenumber: currentUser.phonenumber || "",
        address: currentUser.address || "",
        city: currentUser.city || "",
        street: currentUser.street || "",
        house: currentUser.house || "",
        apartment: currentUser.apartment || "",
        detailedinformation: currentUser.detailedinformation || "",
      });
    }
  }, [currentUser]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3000/auth/userupdate/${currentUser?._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(user),
        }
      );

      if (response.ok) {
        alert("Profile updated successfully!");
        fetchUserData(); // Refresh user data after update
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
                name="firstname"
                value={user.firstname}
                placeholder="Name*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-5">
              Last Name*
              <input
                type="text"
                name="lastname"
                value={user.lastname}
                placeholder="Last name*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-5">
              City*
              <input
                type="text"
                name="city"
                value={user.city}
                placeholder="City*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-6">
              Street*
              <input
                type="text"
                name="street"
                value={user.street}
                placeholder="Street*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-7">
              House*
              <input
                type="text"
                name="house"
                value={user.house}
                placeholder="House*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-3">
              Apartment*
              <input
                type="text"
                name="apartment"
                value={user.apartment}
                placeholder="Apartment*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
            <div className="col-span-5">
              Phone*
              <input
                type="text"
                name="phonenumber"
                value={user.phonenumber}
                placeholder="Phone*"
                className="my-1 border bg-slate-200 rounded-lg p-4 w-full"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-span-10">
            Detailed Information*
            <textarea
              name="detailedinformation"
              value={user.detailedinformation}
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
