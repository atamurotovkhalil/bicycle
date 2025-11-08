import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import {FaWonSign} from "react-icons/fa6";
import {AiOutlineClose} from "react-icons/ai";
import {LuMousePointerClick} from "react-icons/lu";
import {useEffect, useMemo, useState} from "react";
import {Link} from "react-router";
import {useAddToCartStore} from "@/Pages/addToCartStore";
import {useUserStore} from "@/Features/Signup&Login/getUsers-store";
import {server_api} from "@/Shared/Lib/config";
import {RiDeleteBin6Fill} from "react-icons/ri";

const Cart = () => {
    const {fetchCartData, cartProducts, clearCart, addToCart} = useAddToCartStore();
    const {fetchUserData} = useUserStore();

    const [productCounts, setProductCounts] = useState<Record<string, number>>({});

    useEffect(() => {
        fetchCartData();
    }, [fetchCartData, addToCart, fetchUserData]);

    // ✅ Recalculate total only when cartProducts or productCounts change
    const totalPrice = useMemo(
        () =>
            cartProducts.reduce(
                (sum: number, product: any) =>
                    sum + product.price * (productCounts[product.id] || 1),
                0
            ),
        [cartProducts, productCounts]
    );

    const updateCount = (productId: string, increment: boolean) => {
        setProductCounts((prev) => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) + (increment ? 1 : -1), 1),
        }));
    };

    const handleClearCart = async () => {
        await clearCart();
        await fetchCartData();
    };

    const deleteProduct = async (id: string) => {
        await addToCart(id);
        await fetchCartData();
    };

    const formatPrice = (price: number) =>
        new Intl.NumberFormat("ko-KR").format(price);

    return (
        <div className="container">
            {/* Breadcrumb */}
            <div className="py-10">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-white-600" href="/">
                                HOME
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <BreadcrumbLink className="text-orange-600" href="/cart">
                                CART
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <h1 className="text-black font-bold text-[48px] my-10 font-sans">CART</h1>

            <div className="grid grid-cols-4">
                {/* Cart Items */}
                <div className="col-span-3 my-5">
                    <div className="flex items-center justify-between mb-5">
                        <Link
                            to="/mountainbikes"
                            className="text-orange-600 hover:text-black transition-all duration-300"
                        >
                            Back to Shopping
                        </Link>
                        <button
                            onClick={handleClearCart}
                            className="text-orange-600 hover:text-black transition-all duration-300"
                        >
                            Clear Cart
                        </button>
                    </div>

                    {cartProducts.length === 0 ? (
                        <p className="text-gray-500 text-lg text-center mt-10">
                            Your cart is empty 🛒
                        </p>
                    ) : (
                        cartProducts.map((product: any) => (
                            <div
                                key={product.id}
                                className="flex justify-between gap-5 items-center bg-white border-b relative group p-2"
                            >
                                {/* Product Image */}
                                <img
                                    className="w-[180px] h-[180px] object-contain rounded-lg"
                                    src={
                                        product.images?.[0]
                                            ? `${server_api.replace(/\/$/, "")}/${encodeURI(
                                                product.images[0].path
                                            )}/${encodeURIComponent(product.images[0].storageName)}`
                                            : "/default-placeholder.jpg"
                                    }
                                    alt={product.name}
                                />

                                {/* Product Info */}
                                <p className="font-semibold flex-1 mx-3">{product.name}</p>

                                {/* Quantity */}
                                <div className="flex items-center justify-between gap-2">
                                    <button
                                        disabled={(productCounts[product.id] || 1) === 1}
                                        onClick={() => updateCount(product.id, false)}
                                        className="border-2 border-gray-400 rounded-md w-8 h-8"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={productCounts[product.id] || 1}
                                        className="w-12 text-center border rounded-md"
                                    />
                                    <button
                                        onClick={() => updateCount(product.id, true)}
                                        className="border-2 border-gray-400 rounded-md w-8 h-8"
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Price */}
                                <div className="flex items-center gap-1 text-orange-700">
                                    <FaWonSign className="text-gray-600"/>
                                    <span>{formatPrice(product.price)}</span>
                                </div>

                                {/* Delete */}
                                <button
                                    onClick={() => deleteProduct(product.id)}
                                    className="text-gray-600 hover:text-red-600 ml-3"
                                >
                                    <RiDeleteBin6Fill size={25}/>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Summary */}
                <div className="bg-white sticky top-20 h-[220px] border rounded-lg p-5 m-5 shadow-md">
                    <div className="flex justify-between items-center text-sm mb-2">
                        <span className="text-gray-500">Order number</span>
                        <span className="text-orange-700 font-medium">884 566</span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Subtotal</span>
                        <span className="text-orange-700 font-medium flex items-center gap-1">
                    {formatPrice(totalPrice)} <FaWonSign/>
                    </span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Discount</span>
                        <span className="text-orange-700 font-medium flex items-center gap-1">
                                 87,000 <FaWonSign/>
                         </span>
                    </div>
                    <div className="flex justify-between text-base font-semibold mb-4">
                        <span className="text-gray-700">Total</span>
                        <span className="text-orange-700 flex items-center gap-1">
                    {formatPrice(totalPrice - 87000)} <FaWonSign/>
                        </span>
                    </div>

                    <Link to="/place-order">
                        <button
                            className="w-full bg-[#F57520] hover:bg-[#E1610C] text-white p-1 rounded-lg flex items-center justify-center gap-3 text-lg">
                            <LuMousePointerClick size={30} className={'ml-3'}/>
                            Place an Order
                        </button>
                    </Link>
                </div>
            </div>

            {/* Related Products (future feature) */}
            <div className="my-10">
                <p className="text-4xl text-black font-semibold mx-5">RELATED PRODUCTS</p>
                <div className="grid grid-cols-4 gap-3 justify-center items-center my-5">
                    {/* Future related product cards */}
                </div>
            </div>
        </div>
    );
};

export default Cart;
