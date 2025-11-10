import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import {FaDollarSign} from "react-icons/fa6";
import {LuMousePointerClick} from "react-icons/lu";
import {RiDeleteBin6Fill} from "react-icons/ri";
import {Link} from "react-router";
import {useEffect, useMemo, useState, useCallback} from "react";
import {useAddToCartStore} from "@/Pages/addToCartStore";
import {useUserStore} from "@/Features/Signup&Login/getUsers-store";
import {server_api} from "@/Shared/Lib/config";
import {SpareParts} from "@/Shared/Types/SpareParts";
import {BikeDTO} from "@/Shared/Types/Product";

const formatPrice = (price: number) =>
    new Intl.NumberFormat("ko-KR").format(price);

interface CartItemProps {
    product: BikeDTO | SpareParts;
    count: number;
    onCountChange: (id: string, increment: boolean) => void;
    onDelete: (id: string) => void;
}

const CartItem = ({product, count, onCountChange, onDelete}: CartItemProps) => {
    const imageSrc = product.images?.[0]
        ? `${server_api.replace(/\/$/, "")}/${encodeURI(
            product.images[0].path
        )}/${encodeURIComponent(product.images[0].storageName)}`
        : "/default-placeholder.jpg";

    return (
        <div className="flex justify-between gap-5 items-center bg-white border-b p-2 group">
            {/* Product Image */}
            <img
                className="w-[180px] h-[180px] object-contain rounded-lg"
                src={imageSrc}
                alt={product.name}
            />

            {/* Info */}
            <p className="font-semibold flex-1 mx-3">{product.name}</p>

            {/* Quantity */}
            <div className="flex items-center gap-2">
                <button
                    disabled={count === 1}
                    onClick={() => onCountChange(product.id, false)}
                    className="border-2 border-gray-400 rounded-md w-8 h-8"
                >
                    -
                </button>
                <input
                    type="number"
                    readOnly
                    value={count}
                    className="w-12 text-center border rounded-md"
                />
                <button
                    onClick={() => onCountChange(product.id, true)}
                    className="border-2 border-gray-400 rounded-md w-8 h-8"
                >
                    +
                </button>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 text-orange-700">
                <FaDollarSign className="text-gray-600"/>
                <span>{formatPrice(product.price)}</span>
            </div>

            {/* Delete */}
            <button
                onClick={() => onDelete(product.id)}
                className="text-gray-600 hover:text-red-600 ml-3"
            >
                <RiDeleteBin6Fill size={25}/>
            </button>
        </div>
    );
};

const Cart = () => {
    const {
        fetchCartData,
        fetchPartCartData,
        partCartProducts,
        cartProducts,
        clearCart,
        addToCart,
        addToPartCart,
    } = useAddToCartStore();
    const {fetchUserData} = useUserStore();

    const [productCounts, setProductCounts] = useState<Record<string, number>>({});

    useEffect(() => {
        (async () => {
            await fetchCartData();
            await fetchPartCartData();
            await fetchUserData();
        })()

    }, [fetchCartData, fetchPartCartData, fetchUserData]);

    const updateCount = useCallback((productId: string, increment: boolean) => {
        setProductCounts((prev) => ({
            ...prev,
            [productId]: Math.max((prev[productId] || 1) + (increment ? 1 : -1), 1),
        }));
    }, []);

    const handleClearCart = useCallback(async () => {
        clearCart();
        await fetchCartData();
        await fetchPartCartData();
    }, [clearCart, fetchCartData, fetchPartCartData]);

    const handleDeleteBike = useCallback(
        async (id: string) => {
            await addToCart(id);
            await fetchCartData();
        },
        [addToCart, fetchCartData]
    );

    const handleDeletePart = useCallback(
        async (id: string) => {
            await addToPartCart(id);
            await fetchPartCartData();
        },
        [addToPartCart, fetchPartCartData]
    );

    // ✅ Total recalculated efficiently for both bike & part carts
    const totalPrice = useMemo(() => {
        const bikeTotal = cartProducts.reduce(
            (sum, p) => sum + p.price * (productCounts[p.id] || 1),
            0
        );
        const partTotal = partCartProducts.reduce(
            (sum, p) => sum + p.price * (productCounts[p.id] || 1),
            0
        );
        return bikeTotal + partTotal;
    }, [cartProducts, partCartProducts, productCounts]);

    return (
        <div className="container">
            {/* Breadcrumb */}
            <div className="py-10">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <Link to="/" className="text-white-600">
                                HOME
                            </Link>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator/>
                        <BreadcrumbItem>
                            <Link to="/cart" className="text-orange-600">
                                CART
                            </Link>
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

                    {/* Bike Cart */}
                    <div className={'border-2 border-orange-500 rounded-xl my-2'}>{cartProducts.length === 0 ? (
                        <p className="text-gray-500 text-lg text-center mt-10">
                            Your cart for Bikes is empty 🛒
                        </p>
                    ) : (
                        cartProducts.map((product: BikeDTO) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                count={productCounts[product.id] || 1}
                                onCountChange={updateCount}
                                onDelete={handleDeleteBike}
                            />
                        ))
                    )}</div>

                    {/* Spare Parts Cart */}
                    <div className={'border-2 border-orange-500 rounded-xl my-2'}>{partCartProducts.length === 0 ? (
                        <p className="text-gray-500 text-lg text-center mt-10">
                            Your cart for Spare Parts is empty 🛒
                        </p>
                    ) : (
                        partCartProducts.map((product: SpareParts) => (
                            <CartItem
                                key={product.id}
                                product={product}
                                count={productCounts[product.id] || 1}
                                onCountChange={updateCount}
                                onDelete={handleDeletePart}
                            />
                        ))
                    )}</div>
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
              {formatPrice(totalPrice)} <FaDollarSign/>
            </span>
                    </div>
                    <div className="flex justify-between text-sm mb-2">
                        <span className="text-gray-500">Discount</span>
                        <span className="text-orange-700 font-medium flex items-center gap-1">
              0 <FaDollarSign/>
            </span>
                    </div>
                    <div className="flex justify-between text-base font-semibold mb-4">
                        <span className="text-gray-700">Total</span>
                        <span className="text-orange-700 flex items-center gap-1">
              {formatPrice(totalPrice)} <FaDollarSign/>
            </span>
                    </div>

                    <Link to="/place-order">
                        <button
                            className="w-full bg-[#F57520] hover:bg-[#E1610C] text-white p-1 rounded-lg flex items-center justify-center gap-3 text-lg">
                            <LuMousePointerClick size={30} className="ml-3"/>
                            Place an Order
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
