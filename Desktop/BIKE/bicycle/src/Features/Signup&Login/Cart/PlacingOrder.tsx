import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { useState } from "react";
import { FaDollarSign } from "react-icons/fa";
import {PopupStore, usePopupStore} from "@/Features/Popups/PopupStore";
import {Link} from "react-router";

const PlacingOrder = () => {
  const confirmedOrder = usePopupStore((state: PopupStore) => state.confirmOrder);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    house: "",
    apartment: "",
    phone: "",
    email: "",
    deliveryMethod: "courier",
    paymentMethod: "online",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };
  return (
    <div className="container">
      <div>
        <div className="py-10 ">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link className="text-white-600" to="/">
                  HOME
                </Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-white-600" href="/cart">
                  CART
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="text-orange-600">
                PLACING ORDER
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-black font-bold text-[48px] my-20 font-sans">
            PLACING ORDER
          </h1>
          <div className="">
            <div className=" mx-auto bg-white p-6 shadow-md rounded-lg">
              <div className="grid grid-cols-3  gap-6">
                {/* Payment Details */}
                <div className="col-span-2">
                  <div className="border p-4  rounded-lg">
                    <h2 className="text-xl font-bold mb-4">
                      1. PAYMENT DETAIL
                    </h2>
                    <div className="grid grid-cols-10 gap-3">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Name*"
                        className="border-0 bg-slate-200 col-span-5  rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last name*"
                        className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="city"
                        placeholder="City*"
                        className="border-0 bg-slate-200 col-span-3 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="street"
                        placeholder="Street*"
                        className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="house"
                        placeholder="House*"
                        className="border-0 bg-slate-200 col-span-1 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="apartment"
                        placeholder="Apartment*"
                        className="border-0 bg-slate-200 col-span-1 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone*"
                        className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="E-mail*"
                        className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                        onChange={handleChange}
                      />
                    </div>
                    <textarea
                      name="comment"
                      placeholder="Comments for order*"
                      className="border-0 bg-slate-200 my-2 h-32 rounded-lg   w-full"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* Delivery Details */}
                <div className="border p-4 col-span-1 rounded-lg">
                  <h2 className="text-xl font-bold mb-4">2. DELIVERY DETAIL</h2>
                  <h3 className="font-semibold mb-2">Delivery method</h3>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="courier"
                      checked={formData.deliveryMethod === "courier"}
                      onChange={handleChange}
                      className="accent-orange-500 size-6"
                    />{" "}
                    Courier delivery
                  </label>
                  <label className="flex items-center gap-2 mb-4">
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value="pickup"
                      checked={formData.deliveryMethod === "pickup"}
                      onChange={handleChange}
                      className="accent-orange-500 size-5"
                    />{" "}
                    Pickup
                  </label>

                  <h3 className="font-semibold mb-2">Payment method</h3>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="online"
                      checked={formData.paymentMethod === "online"}
                      onChange={handleChange}
                      className="accent-orange-500 size-5"
                    />{" "}
                    Payment online, on the website
                  </label>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={formData.paymentMethod === "card"}
                      onChange={handleChange}
                      className="accent-orange-500 size-5"
                    />{" "}
                    Payment to the courier by card
                  </label>
                  <label className="flex items-center gap-2 mb-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={handleChange}
                      className="accent-orange-500 size-5"
                    />{" "}
                    Payment to the courier in cash
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="store"
                      checked={formData.paymentMethod === "store"}
                      onChange={handleChange}
                      className="accent-orange-500 size-5"
                    />{" "}
                    Payment in store
                  </label>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border grid grid-cols-3 items-center justify-between p-4 mt-6 rounded-lg">
                <div className="">
                  <h2 className="text-xl font-bold mb-4">3. YOUR ORDER</h2>
                </div>
                <div>
                  <p className="text-orange-500 font-bold">Courier delivery</p>
                  <p>
                    <span className="font-semibold">Address:</span> c. Busan,
                    st. Gimhae, ap. 45
                  </p>
                  <p>
                    <span className="font-semibold">To:</span> John Smith
                  </p>
                  <p>
                    <span className="font-semibold">Phone:</span> 010 1122 3344
                  </p>
                  <p>
                    <span className="font-semibold">E-mail:</span>{" "}
                    example@gmail.com
                  </p>
                </div>
                <div>
                  <div className="flex justify-between items-center mt-4">
                    <p className="font-semibold">Total 3 products</p>
                    <p className="text-xl font-bold">1 230 000 </p>
                    <FaDollarSign />
                  </div>

                  <button
                    onClick={() => confirmedOrder()}
                    className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg font-bold"
                  >
                    Confirm Order
                  </button>

                  <p className="text-xs text-gray-500 mt-2">
                    Your personal data will be used for processing your orders,
                    facilitating your work with the site and for other purposes
                    described in our privacy policy
                    <a href="#" className="text-orange-500 underline">
                      privacy policy
                    </a>
                    .
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

export default PlacingOrder;
