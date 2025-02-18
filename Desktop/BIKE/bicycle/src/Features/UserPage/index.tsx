import { Link } from "react-router";
import OrderHistory from "./OrderHistory/index";
import Personal from "./Personal/index";
import ChangePassword from "./ChangePassword/index";
import MyFavourites from "./MyFavourites/index";
import { useState } from "react";
import Cart from "../Signup&Login/Cart/Cart";
type Props = {};

const index = (props: Props) => {
  const [component, setComponent] = useState(0);

  const renderComponent = () => {
    switch (component) {
      case 0:
        return <Personal />;
      case 1:
        return <ChangePassword />;
      case 2:
        return <MyFavourites />;
    }
  };
  const logOut = () => {
    try {
      const logout = window.confirm("Are you sure you want to log out ?");
      if (logout) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div className="container">
      <div className="m-10">
        <div className="grid grid-cols-3">
          <div className="col-span-1 px-8">
            <div className="border-b-2 border-black">
              <p>
                <span className="text-2xl  font-bold">My Account</span>
              </p>
            </div>
            <div>

              <button
                className="m-3 w-full text-center bg-slate-100 rounded-lg py-3 px-4 hover:bg-orange-600"
                onClick={() => setComponent(0)}
              >
                Personal Information
              </button>

              <button
                className="m-3 w-full text-center bg-slate-100 rounded-lg py-3 px-4 hover:bg-orange-600"
                onClick={() => setComponent(1)}
              >
                Change Password
              </button>

              <button
                className="m-3 w-full text-center bg-slate-100 rounded-lg py-3 px-4 hover:bg-orange-600"
                onClick={() => setComponent(2)}
              >
                My Favourites
              </button>

              <button
                className="m-3 w-full text-center bg-slate-100 rounded-lg py-3 px-4 hover:bg-orange-600"
                onClick={logOut}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="col-span-2">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default index;
