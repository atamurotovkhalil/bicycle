import { useState, useEffect, useMemo } from "react";
import Members from "./Members/index";
import Products from "./Products/index";
import { useUserStore } from "@/Features/Signup&Login/getUsers-store";
import { Link } from "react-router";
import { server_api } from "./../../Shared/Lib/config";
import SpareParts from "./SpareParts/index";
import AddProduct from "./AddProduct";
import AddSpareParts from "./AddSpareParts";

export default function AdminPage() {
  const user = useUserStore((state: any) => state.user);
  const fetchUserData = useUserStore((state: any) => state.fetchUserData);
  const [showComponent, setShowComponent] = useState(0);

  useEffect(() => {
    fetchUserData();
  }, []);

  // Memoized component rendering
  const RenderComponent = useMemo(() => {
    const components: { [key: number]: JSX.Element } = {
      0: <Members />,
      1: <Products />,
      2: <SpareParts />,
      3: <AddProduct />,
      4: <AddSpareParts />,
      5: <Link to="/admin/users">Users</Link>,
      6: <Link to="/admin/products">Products</Link>,
    };
    return components[showComponent] || null;
  }, [showComponent]);

  //   if (user?.memberType !== "ADMIN") {
  //     return (
  //       <div className="text-center text-xl font-bold mt-10">
  //         <p>Only Admins can access this page.</p>
  //       </div>
  //     );
  //   }

  return (
    <div
      key={user?._id}
      className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5"
    >
      {/* Sidebar */}
      <div className="flex flex-row lg:flex-col justify-center items-center gap-5 lg:w-1/5">
        {/* Admin Info */}
        <div className="flex justify-center items-center gap-3 shadow-md p-3 rounded-xl my-8 w-72 border-b-2 border-primary">
          <img
            src={
              user?.memberImages?.[0]
                ? `${server_api.replace(/\/$/, "")}/${user.memberImages[0]
                    .split("/")
                    .map(encodeURIComponent)
                    .join("/")}`
                : "default-placeholder.jpg"
            }
            alt="admin"
            className="w-20 h-20 rounded-full border-4 border-primary"
          />
          <div className="ml-2">
            <p className="text-2xl font-bold text-primary">Admin</p>
            <p className="text-xl">01068734499</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        {["Members", "Products", "Spare Parts", "Add Products", "Add Spare Parts"].map((label, index) => (
          <button
            key={label}
            onClick={() => setShowComponent(index)}
            className={`px-4 py-2 text-2xl lg:text-3xl font-medium lg:w-72 h-16 border-b-2 rounded-2xl border-primary shadow-md transition-all duration-300 
              ${
                showComponent === index
                  ? "bg-primary text-white"
                  : " hover:bg-primary hover:text-white"
              }`}
          >
            {label}
          </button>
        ))}
        <Link
          to="/mypage"
          className="px-4 py-2 mx-auto text-2xl text-center lg:text-3xl font-medium lg:w-72 h-16 border-b-2 rounded-2xl border-primary shadow-md transition-all duration-300 hover:bg-primary hover:text-white ml-auto"
        >
          My Page
        </Link>
      </div>
      <div className="lg:w-4/5 mt-16">{RenderComponent}</div>
    </div>
  );
}
