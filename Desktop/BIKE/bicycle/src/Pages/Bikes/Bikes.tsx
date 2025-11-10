import { useState } from "react";
import { Link } from "react-router";
import {
  Accordion,
} from "@/Components/UI/accordion";
import { BsGrid3X3Gap } from "react-icons/bs";
import { IoGridOutline } from "react-icons/io5";
import { FaDollarSign } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { BikeDTO } from "@/Shared/Types/Product";
import { server_api } from "@/Shared/Lib/config";

type Props = {
  products: BikeDTO[]
}

const Bikes = ({products}: Props) => {
  const [grid, setGrid] = useState(true);

  return (
    <div>
      <div className="absolute z-40">
        <div>
          <Accordion
            type="single"
            className="border rounded-lg bg-white   mx-3 w-72"
            collapsible
          >
          </Accordion>
        </div>
      </div>

      <div className="flex relative items-center justify-end">
        <button onClick={() => setGrid(true)}>
          <BsGrid3X3Gap className="size-8 m-1" />
        </button>
        <button onClick={() => setGrid(false)}>
          <IoGridOutline className="size-8  m-1" />
        </button>
      </div>
      <div className="m-3 mt-7 relative">
        <ul
          className={
            grid
              ? "grid grid-cols-3 pb-9   gap-2 justify-end items-center"
              : "grid grid-cols-2 pb-9   gap-2 justify-end items-center"
          }
        >
          {products?.map((product: BikeDTO) => (
            <li key={product?.id}>
              <div className=" hover:drop-shadow-xl h-[400px] bg-white group-hover:h-[529px] border rounded-xl group relative">
                {/* Top Section */}
                <div className="flex items-center justify-between">
                    <p className="text-xs text-red-600 m-2 text-right py-2">
                        {product?.country}
                    </p>
                  <p className="text-xs text-red-600 mr-2 text-right py-2">
                    {product?.status}
                  </p>
                </div>
                <div className="m-3 h-[350px]">
                  {/* Main Image */}
                  <div className="flex items-center justify-center">
                    <img
                      className="w-[320px] h-[220px] object-contain rounded-lg"
                      src={
                        product.images && product.images[0]
                          ? `${server_api.replace(/\/$/, "")}/${encodeURI(
                              product.images[0].path
                            )}/${encodeURIComponent(
                              product.images[0].storageName
                            )}`
                          : "default-placeholder.jpg"
                      }
                      alt="bike-image"
                    />
                  </div>

                  {/* Title */}
                  <p className="mt-4 mx-3">{product?.name}</p>
                    <p className="mt-4 mx-3">{product?.brand}</p>

                  {/* Price */}
                  <div className="flex  items-end justify-center">
                    <div className="mt-3 mx-3 flex  items-center justify-around gap-3">
                      <FaDollarSign className="text-gray-600 text-lg" />
                      <span className="font-medium">{product.price}</span>
                      <Link
                        to={`/productdetail/${product.id}`}
                        className="bg-[#F57520] flex items-center justify-center gap-1 w-[150px] p-1  rounded-lg text-black text-md hover:bg-[#E1610C]"
                      >
                        <LuMousePointerClick className="text-gray-200 text-sm" />
                        One click
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bikes;
