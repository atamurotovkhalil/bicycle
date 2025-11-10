import Nothing1 from "./../../../public/Nothing/nothing.jpeg";
import { FaPlay } from "react-icons/fa";
import { TbBrandComedyCentral } from "react-icons/tb";
import { FaLifeRing } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbHours24 } from "react-icons/tb";
import {Link} from "react-router";

const Nothing = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <p className="text-[64px] m-10 font-bold">
              NOTHING CAN <br />
              STOP YOU
            </p>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="text-[16px] m-10 ">
              <p>
                Our company specializes in the sale <br />
                of goods for cycling bicycles, <br />
                spare parts, accessories and various
                <br /> sports equipment for active sports and <br />
                recreation
              </p>
              <Link to={"/mountainbikes"} className="my-4  rounded-sm  text-gray-500 text-xl">
                {" "}
                In Detail...{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="overflow-hidden w-[100%] h-[890px]">
          <div
            style={{
              backgroundImage: `url(${Nothing1})`,
              width: "100%",
              height: 700,
            }}
            className="object-top  bg-cover "
          >
            <div className="flex justify-center py-[300px]">
              <div className="border-2 rounded-full p-2 flex text-center justify-center items-center border-orange-700 ">
                <FaPlay className="text-orange-700 text-center pl-3 text-7xl" />
              </div>
            </div>
            <div className="bg-[#2E2E2E]">
              <div className="container">
                <div className="grid grid-cols-4">
                  <div className="col-span-1 p-10 text-white text-[16px]  text-center">
                    <div className="flex items-center justify-start gap-6">
                      <FaLifeRing className="text-4xl text-[#4C4C4C]" />
                      <p className="font-bold">European Brands</p>
                    </div>
                    <div className="flex items-center mt-4     justify-start">
                      <p className="text-left text-gray-300">
                        Introducing dozens <br /> European brands
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 p-10 text-white text-[16px]  text-center">
                    <div className="flex items-center justify-start gap-6">
                      <TbBrandComedyCentral className="text-4xl text-[#4C4C4C]" />
                      <p className="font-bold">Lifetime Guarantee</p>
                    </div>
                    <div className="flex items-center mt-4     justify-start">
                      <p className="text-left text-gray-300">
                        For some brands <br /> we provide a lifetime guarantee
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 p-10 text-white text-[16px]  text-center">
                    <div className="flex items-center justify-start gap-6">
                      <IoSettingsOutline className="text-4xl text-[#4C4C4C]" />
                      <p className="font-bold">Pre-sales setup</p>
                    </div>
                    <div className="flex items-center mt-4     justify-start">
                      <p className="text-left text-gray-300">
                      Specialists will setup your <br /> bike in the best way
                      </p>
                    </div>
                  </div>
                  <div className="col-span-1 p-10 text-white text-[16px]  text-center">
                    <div className="flex items-center justify-start gap-2">
                      <TbHours24 className="text-4xl text-[#4C4C4C]" />
                      <p className="font-bold">Delivery in 24 hours</p>
                    </div>
                    <div className="flex items-center mt-4     justify-start">
                      <p className="text-left text-gray-300">
                        We deliver goods to everyone  popular transport companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nothing;
