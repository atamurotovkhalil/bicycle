import { GoPerson } from "react-icons/go";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { TbMenuDeep } from "react-icons/tb";
import { PiBicycleBold } from "react-icons/pi";
import { FaCaretDown } from "react-icons/fa";
import DropdownLinks from "./DropDownLinks1.json";
import DropdownLinks1 from "./DropDownLinks2.json";
import dropImg from "./../../public/Navbar/nav1.png";
import { Link } from "react-router";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Items from "./Items.json";
import Popup from "@/Features/Popups/Popup";
import {PopupStore, usePopupStore} from "@/Features/Popups/PopupStore";
import {UserStore, useUserStore} from "@/Features/Signup&Login/getUsers-store";


const Navbar = () => {
  const [nav, setNav] = useState(true);
  const popup = usePopupStore((state: PopupStore) => state.popup);
  const detailPopup = usePopupStore((state: PopupStore) => state.detailPopup);
  const user = useUserStore((state: UserStore) => state.user);
  const fetchUserData = useUserStore((state: UserStore) => state.fetchUserData);

  useEffect(() => {
      (async()=>{
          try{
              await fetchUserData();
          }catch (e) {
              alert("Failed to fetch user data" + e);
          }
      })()
  }, [fetchUserData]);
  return (
    <div className="bg-black text-white p-2">
      {popup && <Popup />}
      {detailPopup && <Popup />}
      <div className="container">
        <div className="flex text-[12px] items-center justify-between">
          <div>
            <Link to="/" className="text-4xl font-bold">
              <PiBicycleBold />
            </Link>
          </div>
          <div className="flex items-center  justify-end">
            <ul className="flex items-center justify-center gap-5">
              <li className="group relative cursor-pointer">
                <Link
                  to="/mountainbikes"
                  className="flex items-center hover:text-warning  gap-[2px] py-2"
                >
                  BIKES
                  <span>
                    <FaCaretDown
                      className="transition-all
                            duration-200 text-sm
                            group-hover:rotate-180"
                    ></FaCaretDown>
                  </span>
                </Link>
                <div
                  className="absolute z-[9999] border border-gray-300 bg-black  hidden group-hover:block w-[400px] 
                    rounded-md h-[380px]  p-2 text-white shadow-md"
                >
                  <div className="">
                    <div className="gap-1 flex items-center justify-between">
                      <ul>
                        {DropdownLinks.map((item) => (
                          <li key={item.id}>
                            <Link
                              to={item.link}
                              className="inline-block  w-full rounded-md p-3
                                    hover:text-orange-600"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      <ul>
                        {DropdownLinks1.map((item) => (
                          <li key={item.id}>
                            <Link
                              to={item.link}
                              className="inline-block  w-full rounded-md p-3
                                    hover:text-orange-600"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <img
                        className="w-full h-[160px] object-top overflow-hidden object-cover"
                        src={dropImg}
                        alt="new-image"
                      />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/frame-and-forks" className="ml-2 hover:text-warning">
                  FRAME AND FORKS
                </Link>
              </li>
              <li>
                <Link to="wheels-and-tires" className="ml-2 hover:text-warning">
                  WHEELS AND TIRES
                </Link>
              </li>
              <li>
                <Link to="/braking-system" className="ml-2 hover:text-warning">
                  BRAKING SYSTEM
                </Link>
              </li>
              <li>
                <Link to="/drivetrain" className="ml-2 hover:text-warning">
                  DRIVETRAIN
                </Link>
              </li>
              <li>
                <Link
                  to="/handlebar-and-stem"
                  className="ml-2 hover:text-warning"
                >
                  HANDLEBAR AND STEM
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <button className=" hover:text-warning text-white font-bold py-2 px-3  rounded">
              <Link to={user? "/mypage" : "/signup" }>
                <GoPerson className="text-[16px]" />
              </Link>
            </button>
            <button className=" hover:text-warning text-white font-bold py-2 px-3  rounded">
              <Link to="/cart">
                <PiShoppingCartSimpleLight className="text-[16px]" />
              </Link>
            </button>
            <button
              onClick={() => setNav(false)}
              className=" hover:text-warning text-white font-bold py-2 px-3  rounded"
            >
              <TbMenuDeep className="text-[16px]" />
            </button>
            <div
              className={
                !nav
                  ? "fixed z-50   right-0 top-0 w-[30%] h-[100%] border bg-white ease-in-out duration-500"
                  : "fixed right-[-100%]"
              }
            >
              <div
                className="flex items-center justify-between p-4 px-4"
                onClick={() => setNav(true)}
              >
                <div className="flex items-center  justify-end w-full">
                  <div className="flex gap-3">
                    {/* {ctx.isLoggedIn && ( */}

                    {/* )} */}
                  </div>
                  {!nav ? (
                    <div className="pl-5">
                      <AiOutlineClose
                        className="text-base text-black  drop-shadow-sm
                    cursor-pointer"
                        size={20}
                      />
                    </div>
                  ) : (
                    <div>
                      <AiOutlineMenu
                        className="text-base text-white  drop-shadow-sm
                    cursor-pointer"
                        size={20}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-2xl mx-4 font-bold-600 text-start text-black">
                  ADDITIONAL INFORMATION
                </p>
                {/* <Link
                  to="/signup"
                  className="text-xl bg-black p-2 rounded-full  mx-2 font-bold-600 text-start text-white"
                >
                  signup
                </Link> */}
              </div>
              <div className="flex  items-center  justify-start">
                <ul className="pt-15 px-8  text-black font-bold-300">
                  {Items.map((item) => (
                    <li
                      key={item?.id}
                      className="p-2 text-base hover:text-orange-600"
                    >
                      <Link to={item.link}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
