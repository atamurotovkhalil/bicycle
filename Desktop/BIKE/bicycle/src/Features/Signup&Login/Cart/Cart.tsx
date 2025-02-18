import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { FaWonSign } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { LuMousePointerClick } from "react-icons/lu";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import { useAddToCartStore } from "@/Pages/addToCartStore";
import { useUserStore } from "@/Features/Signup&Login/getUsers-store";
import { useProductStore } from "@/Pages/Bikes/store/bikes-store";
import { Product } from "@/App/Admin/AddProduct";
import { server_api } from "@/Shared/Lib/config";

type Props = {};

const Cart = (props: Props) => {
  const fetchCartData = useAddToCartStore((state: any) => state.fetchCartData);
  const cartProducts = useAddToCartStore((state: any) => state.cartProducts);
  const clearCart = useAddToCartStore((state: any) => state.clearCart);
  const products = useProductStore((state: any) => state.products);
  const fetchProducts = useProductStore((state: any) => state.fetchProducts);
  const user = useUserStore((state: any) => state.user);
  const fetchUserData = useUserStore((state: any) => state.fetchUserData);

  // State to track product quantities
  const [productCounts, setProductCounts] = useState<{ [key: string]: number }>(
    {}
  );
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCartData();
    fetchProducts();
    fetchUserData();
  }, [fetchCartData, fetchProducts, fetchUserData]);

  // Filter cart products by the current user
  const userCartProducts = cartProducts?.filter(
    (product: any) => product.userId === user?._id
  );

  // Filter products to only show those in the user's cart
  const filteredProducts = products.filter((product: Product) =>
    userCartProducts.some((cartItem: any) => cartItem.productId === product._id)
  );

  // Handle removing a product from the cart
  const removeProd = async (id: any) => {
    const cartItemToRemove = cartProducts.find(
      (cartItem: any) => cartItem.productId === id
    );
    try {
      let url = `http://localhost:3000/cart/${cartItemToRemove._id}`; // Correct URL initialization
      const token = localStorage.getItem("token"); // Retrieve token from localStorage

      //if (token) {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Uncomment if using authentication
        },
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        console.error("Failed to fetch users data:", response.statusText);
      }
      //}
    } catch (error) {
      console.error("Error fetching users data:", error);
    }
    fetchCartData();
  };
  console.log(cartProducts);
  console.log(user);
  console.log(products);

  // Handle updating the product count
  const updateCount = (productId: string, increment: boolean) => {
    setProductCounts((prev) => ({
      ...prev,
      [productId]: Math.max((prev[productId] || 1) + (increment ? 1 : -1), 1),
    }));
    setTotalPrice(
      cartProducts.reduce(
        (sum: any, product: any) =>
          sum + product.price * productCounts[product._id],
        0
      )
    );
  };

  // Handle clearing the cart
  const handleClearCart = () => {
    clearCart();
    fetchCartData();
  };

  return (
    <div className="container">
      <div>
        <div className="py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white-600" href="/">
                  HOME
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-orange-600" href="/cart">
                  CART
                </BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-black font-bold text-[48px] my-10 font-sans">
          CART
        </h1>
        <div>
          <div className="grid grid-cols-4">
            <div className="pb-9 my-5 col-span-3 gap-3">
              <div className="flex items-center justify-between">
                <button>
                  <Link
                    to="/mountainbikes"
                    className="text-orange-600 hover:text-black transition-all duration-300"
                  >
                    Back to Shopping
                  </Link>
                </button>
                <button onClick={handleClearCart}>
                  <Link
                    to="/productdetail"
                    className="text-orange-600 hover:text-black transition-all duration-300"
                  >
                    Clear Cart
                  </Link>
                </button>
              </div>
              {filteredProducts.map((product: any) => (
                <div className="flex justify-between items-center bg-white border-b group relative">
                  {/* Main Image */}
                  <div className="mt-4 mx-3">
                    <img
                      className="w-[320px] h-[220px] object-contain rounded-lg"
                      src={
                        product?.images[0]
                          ? `${server_api.replace(
                              /\/$/,
                              ""
                            )}/${product?.images[0]
                              .split("/")
                              .map(encodeURIComponent)
                              .join("/")}`
                          : "default-placeholder.jpg"
                      }
                      alt="new-image"
                    />
                  </div>

                  {/* Title */}
                  <p className="mt-4 mx-3 font-semibold">{product.name}</p>
                  <div className="flex items-center m-5 justify-center">
                    <button
                      disabled={productCounts[product._id] === 1}
                      onClick={() => updateCount(product._id, false)}
                      className="border-2 active:ring-2 border-gray-400 rounded-md w-20 h-10"
                    >
                      {" "}
                      -{" "}
                    </button>
                    <input
                      type="number"
                      readOnly
                      className="border-0 h-8 active:ring-2 text-center border-gray-300 w-[100px] p-2 rounded-md"
                      value={productCounts[product._id] || 1}
                    />
                    <button
                      onClick={() => updateCount(product._id, true)}
                      className="border-2 active:ring-2 border-gray-400 rounded-md w-20 h-10"
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>

                  {/* Price */}
                  <div className="mt-3 mx-3 flex items-center gap-3">
                    <FaWonSign className="text-gray-600 text-lg" />
                    <span className="font-medium text-orange-700">
                      {product.price} KRW
                    </span>
                  </div>
                  <div className="mt-3 mx-3 flex items-center gap-3">
                    <button onClick={() => removeProd(product._id)}>
                      <AiOutlineClose className="text-gray-600 text-lg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-white border rounded-lg p-3 m-5">
                <div className="flex justify-between items-center ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-black text-[12px] my-3 font-sans">
                      Order number
                    </h2>
                  </div>
                  <div className="text-orange-700 flex items-center justify-between gap-1 text-[12px] font-medium">
                    884 566
                  </div>
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 text-[12px] my-3 font-sans">
                      {totalPrice} <br /> (without discount)
                    </h2>
                  </div>
                  <div className="text-orange-700 flex items-center justify-between gap-1 text-[12px] font-medium">
                    692 370 <FaWonSign />
                  </div>
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 text-[12px] my-3 font-sans">
                      Discount
                    </h2>
                  </div>
                  <div className="text-orange-700 flex items-center justify-between gap-1 text-[12px] font-medium">
                    87 000 <FaWonSign />
                  </div>
                </div>
                <div className="flex justify-between items-center ">
                  <div className="flex items-center justify-between">
                    <h2 className="text-gray-500 text-[12px] my-3 font-sans">
                      Total
                    </h2>
                  </div>
                  <div className="text-orange-700 flex items-center justify-between gap-1 text-[12px] font-medium">
                    1 867 000 <FaWonSign />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <button className="bg-[#F57520] flex items-center justify-center gap-4 px-4 rounded-lg text-white text-xl hover:bg-[#E1610C]">
                    <Link
                      className="flex items-center justify-center gap-3"
                      to="/place-order"
                    >
                      <LuMousePointerClick className="flex text-gray-200 text-xl" />
                      Place an order
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-4xl text-black font-semibold mx-5 my-10">
          RELATED PRODUCTS
        </p>
        <div className="grid-cols-4 pb-9 my-5 flex gap-3 justify-center items-center">
          {/* Example product card */}
          {/* Repeat similar cards for each related product */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
