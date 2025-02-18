import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";
import { PiBicycleBold } from "react-icons/pi";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import sub1 from "./../../public/Subscribe/sub1.png";

const Footer = () => {
  return (
    <div>
      <div className="bg-black">
        <div className="container">
          <div className="flex justify-around items-center">
            <div className="flex justify-center items-center">
              <img className="h-96 bg-cover w-96 bg-top" src={sub1} alt="subscribe-image" />
            </div>
            <div className="">
              <h1 className="text-white font-bold text-[48px] my-10 font-sans">
                SUBSCRIBE OUR NEWS
              </h1>

              <form className="flex justify-center">
                <input
                  className="border-2 border-white w-96 rounded-md py-3 px-6 text-sm"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="ml-4 text-white bg-orange-500 rounded-md py-3 px-6 text-sm">
                  Subscribe
                </button>
              </form>
              <div className="m-6">
                <input type="checkbox" id="terms" name="terms" />
                <label className="text-white">
                  {" "}
                  I agree to the Terms and Conditions
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="text-white">
          <div className=" container md:px-10 sm:px-5 px-1">
            <div className="grid lg:grid-cols-6 gap-6 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 p-10">
              <div className="col-span-2 gap-4">
                <div className="flex lg:justify-start justify-center items-center gap-2 p-3">
                  <div className="flex items-center justify-center rounded-full w-10 h-10 bg-yellow">
                    <PiBicycleBold className="text-xl text-green1" />
                  </div>
                  <p className="text-2xl">Elelctro-bicycles</p>
                </div>
                <p className="p-3 text-center lg:text-left">
                  Компания World-specialized for selling any kind of bicycles.
                </p>
                <div className="sm:flex flex justify-evenly items-center gap-1 p-2">
                  <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                    <FaFacebook className="text-xl text-white" />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                    <FaTwitter className="text-xl text-white" />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                    <FaPinterest className="text-xl text-white" />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                    <FaInstagramSquare className="text-xl text-white" />
                  </div>
                  <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                    <FaYoutube className="text-xl text-white" />
                  </div>
                </div>
              </div>
              <div className="col-span-2 gap-5">
                <div className="lg:flex gap-10">
                  <div className=" text-center lg:text-left mb-4">
                    <p className="text-2xl p-3">Catalog</p>
                    <ul className="inline-block cursor-pointer">
                      <li className="p-2 hover:text-[18px] hover:text-orange-600">
                        Trade In
                      </li>
                      <li className="p-2 hover:text-[18px] hover:text-orange-600">
                        Bicycles
                      </li>
                      <li className="p-2 hover:text-[18px] hover:text-orange-600">
                        Spares
                      </li>
                      <li className="p-2 hover:text-[18px] hover:text-orange-600">
                        Equipment
                      </li>
                      <li className="p-2 hover:text-[18px] hover:text-orange-600">
                        Accessories
                      </li>
                      <li className="p-2 hover:text-[18px] hover:text-orange-600">
                        Trainers
                      </li>
                    </ul>
                  </div>

                  <div className=" text-center lg:text-left">
                    <div className=" text-center lg:text-left mb-4">
                      <p className="text-2xl p-3">For Clients</p>
                      <ul className="inline-block cursor-pointer">
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          About Us
                        </li>
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          Delivery and payment
                        </li>
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          Blog
                        </li>
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          Contact
                        </li>
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          Storage
                        </li>
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          Bicycle workshop
                        </li>
                        <li className="p-2 hover:text-[18px] hover:text-orange-600">
                          Guarantee
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 col-span-2">
                <p className="text-2xl p-3">Address</p>
                <ul className="inline-block">
                  <li className="p-2 flex items-center justify-start gap-4">
                    <IoIosPhonePortrait className="text-5xl  text-orange-700" />
                    <span>+82101234567</span>
                  </li>
                  <li className="p-2 flex items-center justify-start gap-4">
                    <FaRegMessage className="text-5xl  text-orange-700" />
                    <span>example@gmail.com</span>
                  </li>
                  <li className="p-2 flex items-center justify-start gap-4">
                    <CiLocationOn className="text-5xl  text-orange-700" />
                    <span>123456, Royal, Messey, New Jersey</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-orange-700">
          <div className="container px-1 ">
            <div className="flex justify-between items-center ">
              <div className="flex justify-between items-center gap-3 p-1">
                <p className="text-white flex justify-center items-center">
                  Copyright <FaRegCopyright className="mx-3" /> 2024
                  Electro-bike selling platform. All rights Reserved.
                </p>
              </div>
              <div>
                <div className="flex justify-evenly items-center gap-4 py-2 px-4">
                  <p className="text-black">
                    User Terms & Conditions | Privacy Policy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
