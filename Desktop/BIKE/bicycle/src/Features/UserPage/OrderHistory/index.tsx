import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import { AiOutlineClose } from "react-icons/ai";
import { FaDollarSign } from "react-icons/fa6";

const index = () => {
  return (
    <div className="">
      <div>
        <div>
          <h1 className="text-black font-bold text-2xl font-sans">
            ORDER HISTORY
          </h1>
        </div>
        <div>
          <div>
            <h1 className="text-black font-bold text-lg font-sans">
              New Orders
            </h1>
          </div>
          <div className="flex items-center justify-between w-full">
            <p>Date:</p>
            <p>Order ID:</p>
            <p>Total price:</p>
            <p>Status:</p>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-gray-200 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  <div className="flex items-center justify-between w-full">
                    <p>12.01.2025</p>
                    <p>643769837483</p>
                    <p>700 USD</p>
                    <p>New Order</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" bg-white p-3 gap-2 text-[12px]">
                  <div className=" flex justify-between items-center bg-white group-hover:h-[529px] border-b group relative">
                    {/* Main Image */}
                    <div className="mt-4 mx-3">
                      <img
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                        src="/public/OrderHistory/img1.png"
                        alt="new-image"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 mx-3 font-semibold">
                      Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                    </p>

                    {/* Price */}
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium text-orange-700">
                        8000 USD
                      </span>
                    </div>
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <button>
                        <AiOutlineClose className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>

                  <div className=" flex justify-between items-center bg-white group-hover:h-[529px] border-b group relative">
                    {/* Main Image */}
                    <div className="mt-4 mx-3">
                      <img
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                        src="/public/OrderHistory/img2.jpeg"
                        alt="new-image"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 mx-3 font-semibold">
                      Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                    </p>

                    {/* Price */}
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium text-orange-700">
                        8 890 USD
                      </span>
                    </div>
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <button>
                        <AiOutlineClose className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center bg-white group-hover:h-[529px] border-b group relative">
                    {/* Main Image */}
                    <div className="mt-4 mx-3">
                      <img
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                        src="/public/OrderHistory/img3.jpeg"
                        alt="new-image"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 mx-3 font-semibold">
                      Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                    </p>

                    {/* Price */}
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium text-orange-700">
                        8 800 USD
                      </span>
                    </div>
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <button>
                        <AiOutlineClose className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div>
            <h1 className="text-black font-bold text-lg font-sans">
              Completed Orders
            </h1>
          </div>
          <div className="flex items-center justify-between w-full">
            <p>Date:</p>
            <p>Order ID:</p>
            <p>Total price:</p>
            <p>Status:</p>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-gray-200 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  <div className="flex items-center justify-between w-full">
                    <p>12.12.2024</p>
                    <p>643762347483</p>
                    <p>8 000 USD</p>
                    <p>Completed Orders</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className=" bg-white p-3 gap-2 text-[12px]">
                  <div className=" flex justify-between items-center bg-white group-hover:h-[529px] border-b group relative">
                    {/* Main Image */}
                    <div className="mt-4 mx-3">
                      <img
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                        src="/public/OrderHistory/img1.png"
                        alt="new-image"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 mx-3 font-semibold">
                      Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                    </p>

                    {/* Price */}
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium text-orange-700">
                        880 USD
                      </span>
                    </div>
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <button>
                        <AiOutlineClose className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>

                  <div className=" flex justify-between items-center bg-white group-hover:h-[529px] border-b group relative">
                    {/* Main Image */}
                    <div className="mt-4 mx-3">
                      <img
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                        src="/public/OrderHistory/img2.jpeg"
                        alt="new-image"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 mx-3 font-semibold">
                      Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                    </p>

                    {/* Price */}
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium text-orange-700">
                        8890 USD
                      </span>
                    </div>
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <button>
                        <AiOutlineClose className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>
                  <div className=" flex justify-between items-center bg-white group-hover:h-[529px] border-b group relative">
                    {/* Main Image */}
                    <div className="mt-4 mx-3">
                      <img
                        className="w-[250px] h-[150px] object-cover rounded-lg"
                        src="/public/OrderHistory/img3.jpeg"
                        alt="new-image"
                      />
                    </div>

                    {/* Title */}
                    <p className="mt-4 mx-3 font-semibold">
                      Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                    </p>

                    {/* Price */}
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium text-orange-700">
                        8890 USD
                      </span>
                    </div>
                    <div className="mt-3 mx-3 flex items-center gap-3">
                      <button>
                        <AiOutlineClose className="text-gray-600 text-lg" />
                      </button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
