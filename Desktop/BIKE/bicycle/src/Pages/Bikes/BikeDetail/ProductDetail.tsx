import { useEffect, useState } from "react";
import { FaWonSign } from "react-icons/fa6";
import flag1 from "./../../../../public/images/italyflag.png";
import flag2 from "./../../../../public/images/americaflag.png";
import new1 from "./../../../../public/ProductDetails/vel1.png";
import new2 from "./../../../../public/ProductDetails/vel2.png";
import new3 from "./../../../../public/ProductDetails/vel3.jpeg";
import new4 from "./../../../../public/ProductDetails/vel4.jpeg";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { CiHeart } from "react-icons/ci";
import vel1 from "./../../../../public/ProductDetails/vel1.png";
import vel2 from "./../../../../public/ProductDetails/vel2.png";
import { Card, CardContent } from "@/Components/UI/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/Components/UI/carousel";
import deliver from "./../../../../public/ProductDetails/deliver.jpeg";
import { usePopupStore } from "@/Features/Popups/PopupStore";
import { useProductStore } from "../store/bikes-store";
import { Product } from "@/App/Admin/AddProduct";
import { Link, useParams } from "react-router";
import { server_api } from "@/Shared/Lib/config";
import { useAddToCartStore } from "@/Pages/addToCartStore";
import { useUserStore } from "@/Features/Signup&Login/getUsers-store";

type Props = {};

const ProductDetail = (props: Props) => {
  const [img, setImg] = useState("");
  const [count, setCount] = useState(0);
  const confirmedOrder = usePopupStore((state: any) => state.confirmedOrder);
  const productDetail = useProductStore((state: any) => state.productDetail);
  const fetchProducts = useProductStore((state: any) => state.fetchProducts);
  const products = useProductStore((state: any) => state.products);
  const addToCart = useAddToCartStore((state: any) => state.addToCart);
  const fetchUserData = useUserStore((state: any) => state.fetchUserData);
  const user = useUserStore((state: any) => state.user);

  useEffect(() => {
    fetchProducts();
    fetchUserData();
  }, [fetchProducts, fetchUserData]);
  const productId = useParams();

  const product = products.find((p: Product) => p._id === productId.id);

  console.log(productId.id);
  console.log(product?.socialnetworks?.website);
  console.log(product?.color);

  const setOrder = (product: Product) => {
    addToCart(product._id, user._id);
    confirmedOrder(product);
    confirmedOrder();
  };

  return (
    <div className="container">
      <div className="">
        <div className="">
          <div className="py-10 ">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-white-600" href="/">
                    HOME
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <Link className="text-white-600" to="/mountainbikes">
                    BIKES
                  </Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-orange-600">
                    NEW ONE
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2  gap-8">
            <div>
              <div className="col-span-1 flex items-center justify-center m-5">
                <img
                  className="w-96 h-96"
                  src={`${server_api.replace(/\/$/, "")}/${
                    img === ""
                      ? product.images?.[0]
                          .split("/")
                          .map(encodeURIComponent)
                          .join("/")
                      : img?.split("/").map(encodeURIComponent).join("/")
                  }`}
                  alt="Placeholder"
                />
              </div>
              <div className="flex justify-center items-center">
                <Carousel
                  opts={{
                    align: "start",
                  }}
                  className="w-full border-0  max-w-sm"
                >
                  <CarouselContent>
                    {product?.images
                      ?.slice(0, 4)
                      .map((image: any, index: number) => (
                        <CarouselItem
                          key={index}
                          onClick={() => setImg(image)}
                          className="flex justify-center items-center"
                        >
                          <img
                            key={index}
                            src={
                              image
                                ? `${server_api.replace(/\/$/, "")}/${image
                                    .split("/")
                                    .map(encodeURIComponent)
                                    .join("/")}`
                                : "default-placeholder.jpg"
                            }
                            alt={`Product ${index + 1}`}
                            className="w-40  h-40  flex items-center justify-center"
                          />
                        </CarouselItem>
                      ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            </div>
            <div>
              <div className="col-span-1">
                <div>
                  <p className="text-4xl">
                    {product?.name} <br />
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {product?.manufacturer}
                  </p>
                  <div className="flex text-sm text-gray-600 justify-between items-center">
                    <div>
                      <div className="flex justify-evenly items-center gap-1 p-2">
                        <div className="  w-10 h-10 cursor-pointer hover:w-11 hover:h-11 transition-all duration-300">
                          <Link
                            //to="https://www.google.com"
                            to={product?.socialnetworks?.website}
                          >
                            <CgWebsite className="text-xl text-black" />
                          </Link>
                        </div>
                        <div className="  w-10 h-10 cursor-pointer hover:w-11 hover:h-11 transition-all duration-300">
                          <Link to={product?.socialnetworks?.facebook}>
                            <FaFacebook className="text-xl text-black" />
                          </Link>
                        </div>
                        <div className="  w-10 h-10 cursor-pointer hover:w-11 hover:h-11 transition-all duration-300">
                          <Link to={product?.socialnetworks?.twitter}>
                            <FaTwitter className="text-xl text-black" />
                          </Link>
                        </div>

                        <div className="  w-10 h-10 cursor-pointer hover:w-11 hover:h-11 transition-all duration-300">
                          <Link to={product?.socialnetworks?.instagram}>
                            <FaInstagramSquare className="text-xl text-black" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p
                    className={`text-sm text-${
                      product?.status === "SOLD_PRODUCT" ? "red" : "green"
                    }-600`}
                  >
                    {product?.status}
                  </p>
                </div>
                <div className="flex my-5 justify-between items-center">
                  <p className="text-4xl">{product?.price} KRW</p>
                  {/* <p className="text-sm line-through  text-gray-600">
                    1 000 000 KRW
                  </p> */}
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    {product?.description}
                  </p>
                </div>
                <div className="my-5">
                  <p className="text-lg text-black">Size</p>
                </div>
                <div className="my-4">
                  <span
                    className={
                      product?.size === "S"
                        ? "text-xl m-3 border-2  text-white bg-black p-3 px-4 rounded-md "
                        : "text-xl m-3 border-2  text-black bg-white p-3 px-4 rounded-md "
                    }
                  >
                    S
                  </span>
                  <span
                    className={
                      product?.size === "M-L"
                        ? "text-xl m-3 border-2  text-white bg-black p-3 px-4 rounded-md "
                        : "text-xl m-3 border-2  text-black bg-white p-3 px-4 rounded-md "
                    }
                  >
                    M-L
                  </span>
                  <span
                    className={
                      product?.size === "M"
                        ? "text-xl m-3 border-2  text-white bg-black p-3 px-4 rounded-md "
                        : "text-xl m-3 border-2  text-black bg-white p-3 px-4 rounded-md "
                    }
                  >
                    M
                  </span>
                  <span
                    className={
                      product?.size === "L"
                        ? "text-xl m-3 border-2  text-white bg-black p-3 px-4 rounded-md "
                        : "text-xl m-3 border-2  text-black bg-white p-3 px-4 rounded-md "
                    }
                  >
                    L
                  </span>
                  <span
                    className={
                      product?.size === "XL"
                        ? "text-xl m-3 border-2  text-white bg-black p-3 px-4 rounded-md "
                        : "text-xl m-3 border-2  text-black bg-white p-3 px-4 rounded-md "
                    }
                  >
                    XL
                  </span>
                </div>
                <div>
                  <p className="text-lg text-black">Color</p>
                </div>
                <div>
                  <button
                    style={{ backgroundColor: product.color }}
                    className={`m-3 border border-black   p-4 rounded-full `}
                  ></button>
                </div>
              </div>
              <div className="col-span-1">
                <div className="flex justify-start items-center gap-2">
                  <div className="flex items-center m-5  justify-center">
                    <button
                      disabled={count === 0}
                      onClick={() => setCount(count - 1)}
                      className="border-2 active:ring-2 border-gray-400 rounded-md  w-20 h-10"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <input
                      type="number"
                      className="border-0 h-8 active:ring-2 text-center border-gray-300 w-[100px] p-2 rounded-md"
                      value={count}
                      onChange={() => setCount(count)}
                    />
                    <button
                      onClick={() => setCount(count + 1)}
                      className="border-2 active:ring-2  border-gray-400 rounded-md w-20 h-10"
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                  <Link to="/cart">
                    <button
                      onClick={() => setOrder(product)}
                      className="bg-orange-600 active:ring-2 text-white p-3 text-center text-sm  rounded-md"
                    >
                      Add to Cart
                    </button>
                  </Link>
                  <button
                    onClick={() => setOrder(product)}
                    className=" active:text-orange-600 text-4xl bg-gray-100 p-1 mx-3  rounded-md"
                  >
                    <CiHeart />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-600">
                    Estimated price: {product?.price * count}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <p className="text-4xl text-black font-semibold mx-5 my-10">
            DESCRIPTION
          </p>
        </div>
        <div className="my-5">
          <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
        <div>
          <p className="text-4xl text-black font-semibold mx-5 my-10">
            CHARACTERISTIC
          </p>
        </div>
        <div>
          <div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Color</p>
              <div className="text-gray-600 text-md m-4">
                <button
                  style={{ backgroundColor: product.color }}
                  className={`m-3 border border-black   p-4 rounded-full `}
                ></button>
              </div>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Year</p>
              <p className="text-gray-600 text-md m-4">{product?.year}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Wheel Diameter</p>
              <p className="text-gray-600 text-md m-4">
                {product?.wheeldiameter}
              </p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Frame Material</p>
              <p className="text-gray-600 text-md m-4">
                {product?.framematerial}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Size</p>
              <p className="text-gray-600 text-md m-4">{product?.size}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Country</p>
              <p className="text-gray-600 text-md m-4">{product?.country}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Manufacturer</p>
              <p className="text-gray-600 text-md m-4">
                {product?.manufacturer}
              </p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Tires</p>
              <p className="text-gray-600 text-md m-4">{product?.tires}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Frame</p>
              <p className="text-gray-600 text-md m-4">{product?.frame}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Seatpost</p>
              <p className="text-gray-600 text-md m-4">{product?.seatpost}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Saddle</p>
              <p className="text-gray-600 text-md m-4">{product?.saddle}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Fork</p>
              <p className="text-gray-600 text-md m-4">{product?.fork}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Stem</p>
              <p className="text-gray-600 text-md m-4">{product?.stem}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Wheels</p>
              <p className="text-gray-600 text-md m-4">{product?.wheels}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Handlebar</p>
              <p className="text-gray-600 text-md m-4">{product?.handlebar}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Brake Type</p>
              <p className="text-gray-600 text-md m-4">{product?.braketype}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Braking System</p>
              <p className="text-gray-600 text-md m-4">
                {product?.brakingsystem}
              </p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Shifters</p>
              <p className="text-gray-600 text-md m-4">{product?.shifters}</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Crankset</p>
              <p className="text-gray-600 text-md m-4">{product?.crankset}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Rear Derailleur</p>
              <p className="text-gray-600 text-md m-4">
                {product?.rearderailleur}
              </p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Chain</p>
              <p className="text-gray-600 text-md m-4">{product?.chain}</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Number of Speeds</p>
              <p className="text-gray-600 text-md m-4">
                {product?.numberofspeeds}
              </p>
            </div>

            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Warranty</p>
              <p className="text-gray-600 text-md m-4">{product?.warranty}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-4xl text-black font-semibold mx-5 my-10">DELIVERY</p>
      </div>
      <div>
        <img
          className="object-cover rounded-md w-full h-64"
          src={deliver}
          alt="Product Detail"
        />
      </div>
      <div>
        <p
          className="text-xl text-black mx-5 my-10"
          style={{ lineHeight: 1.5 }}
        >
          For the convinient of customers. there are several methods of delivery
          of goods
        </p>
        <li className="text-md mx-2 my-5 list-disc">
          Delivery i Busan, within the Ring Road
        </li>
        <li className="text-md mx-2 my-5 list-disc">
          Delivery in Yeoksam, within the Ring Road
        </li>
        <li className="text-md mx-2 my-5 list-disc">
          Delivery in Seoul, within the Ring Road
        </li>
        <span
          className="text-base text-gray-500 bg-gray-200  mx-5 px-2 rounded-sm py-2 my-5"
          style={{ lineHeight: 1 }}
        >
          Any of the methods is available when placing an order through the
          website or with operators
        </span>
        <p
          className="text-base text-gray-500  mx-5 my-5"
          style={{ lineHeight: 1 }}
        >
          Bicycles and bike trainers are delivered assembled and configured.
        </p>
        <p
          className="text-base text-gray-500  mx-5 my-5"
          style={{ lineHeight: 1 }}
        >
          If you have any questions regarding the delivery of goods, please
          contact our customer service at{" "}
          <span className="text-orange-600"> 070-1234-5678</span>
        </p>
        <p
          className="text-base text-gray-500 font-bold mx-5 my-5"
          style={{ lineHeight: 1 }}
        >
          Pick up from the store is possible for any orders
        </p>
      </div>
      <div>
        <div>
          <p className="text-4xl text-black font-semibold mx-5 my-10">
            RELATED PRODUCTS
          </p>
        </div>
        <div className="grid-cols-4 pb-9 my-5 flex gap-3 justify-center items-center">
          <div className="col-span-1 drop-shadow-xl bg-white group-hover:h-[529px] border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag1}
                alt="new-image"
              />
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[250px] h-[150px] object-cover rounded-lg"
                src={new1}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium text-orange-700">889 000 KRW</span>
            </div>
          </div>

          <div className="col-span-1 drop-shadow-xl bg-white border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag2}
                alt="new-image"
              />
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[250px] h-[150px] object-contain rounded-lg"
                src={new2}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Trek Verve 1 Disc Low Step Era <br />
              White HYBD 2022
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium text-orange-700">990 000 KRW</span>
            </div>
          </div>
          <div className="col-span-1 drop-shadow-xl bg-white border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag2}
                alt="new-image"
              />
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[250px] h-[150px] object-cover rounded-lg"
                src={new3}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Trek Dual Sport 1 Quicksilver
              <br /> Hybrid 2022
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium text-orange-700">1 180 000 KRW</span>
            </div>
          </div>
          <div className="col-span-1 drop-shadow-xl bg-white border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag2}
                alt="new-image"
              />
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[250px] h-[150px] object-cover rounded-lg"
                src={new4}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Trek Verve 1 Disc Low Step Era <br />
              White HYBD 2022
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium text-orange-700">990 000 KRW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
