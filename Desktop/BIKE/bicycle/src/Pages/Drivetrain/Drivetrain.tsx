import { usePopupStore } from "@/Features/Popups/PopupStore";
import Categories from "./../categories.json";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { FaSearch, FaWonSign } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
import { SpareProduct } from "@/App/Admin/AddSpareParts";
import { useEffect, useState } from "react";
import { useSparePartsStore } from "../spareparts-store";
type Props = {};

const Drivetrain = (props: Props) => {
  const [search, setSearchTerm] = useState("");
  const confirmDetail = usePopupStore((state: any) => state.confirmDetail);
  const spareProducts = useSparePartsStore((state: any) => state.spareProducts);
  const fetchSpareProducts = useSparePartsStore(
    (state: any) => state.fetchSpareProducts
  );

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   fetchSpareProducts("search", search);
  // };
  const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const searchProducts = () => {
    fetchSpareProducts("keyword", search);
  };
  console.log(spareProducts);

  useEffect(() => {
    fetchSpareProducts();
  }, [fetchSpareProducts]);

  const spares = spareProducts.filter(
    (product: SpareProduct) => product.category === "drivetrain"
  );

  function onCategory(categroy: any) {
    confirmDetail(categroy);
  }
  return (
    <div>
      <div>
        <div
          className="relative h-80 w-full bg-cover bg-left"
          style={{
            backgroundImage: "url('/EssentialComponents/drivetrain.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 container">
            {/* Breadcrumb */}
            <div className="py-10">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-white" href="/">
                      HOME
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-orange-600">
                      DRIVETRAIN
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-white font-bold text-5xl my-20 font-sans">
                DRIVETRAIN
              </h1>
            </div>
          </div>
        </div>
        <div className="bg-black p-4">
          <div className="container">
            <p className="text-xl text-white p-4 italic">Searching:</p>
            <div className="w-[200px]  flex">
              <input
                type="text"
                onChange={(e) => searchProduct(e)}
                className=" border  border-orange-500 rounded-r-none rounded-md"
              ></input>
              <button
                onClick={searchProducts}
                className="border border-primary border-orange-500 rounded-l-none rounded-md bg-primary text-white text-sm hover:bg-primary-dark duration-75"
              >
                <FaSearch className="text-sm bg-primary text-white  m-2" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="m-5 p-5">
              <ul className="grid grid-cols-3 gap-5">
                {spares?.map((category: SpareProduct) => (
                  <li className=" hover:drop-shadow-xl bg-white group-hover:h-[529px] border rounded-xl group relative">
                    {/* Top Section */}
                    <div className="flex items-center justify-between">
                      <p className="text-md text-green-600 m-4 px-3 bg-gray-100 rounded-lg text-right py-2">
                        {category.country}
                      </p>
                    </div>
                    <div className="m-3">
                      {/* Main Image */}
                      <div className="flex items-center justify-center">
                        <img
                          className="w-[320px] h-[220px] object-contain rounded-lg"
                          src={category.imageUrl}
                          alt="new-image"
                        />
                      </div>
                      <p className="text-md text-green-600 m-4 px-3 bg-gray-100 rounded-lg text-left py-2">
                        Manufacturer: {category.manufacturer}
                      </p>
                      <p className="text-md  m-4 px-3 bg-gray-100 rounded-lg text-left py-2">
                        Types: : {category.types}
                      </p>
                      {/* Title */}

                      {/* Price */}
                      <div className="mt-3 mx-3 flex items-center justify-around gap-3">
                        <FaWonSign className="text-gray-600 text-lg" />
                        <span className="font-medium">889 000 KRW</span>
                        <button
                          onClick={() => onCategory(category)}
                          className="bg-[#F57520] flex items-center justify-evenly gap-1 w-[200px] p-2  rounded-lg text-black text-md hover:bg-[#E1610C]"
                        >
                          <LuMousePointerClick className="text-gray-200 text-sm" />
                          See in detail
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drivetrain;
