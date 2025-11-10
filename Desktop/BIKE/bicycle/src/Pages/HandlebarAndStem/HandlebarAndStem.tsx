import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import {FaSearch, FaDollarSign} from "react-icons/fa";
import {LuMousePointerClick} from "react-icons/lu";
import {PopupStore, usePopupStore} from "@/Features/Popups/PopupStore";
import React, {useEffect, useState} from "react";
import {useSparePartsStore} from "../spareparts-store";
import {SpareParts} from "@/Shared/Types/SpareParts.ts";
import {server_api} from "@/Shared/Lib/config.ts";
import {
    Pagination,
    PaginationContent, PaginationEllipsis,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/Components/UI/pagination.tsx";
import {Link} from "react-router";

const HandlebarAndStem = () => {
    const [search, setSearch] = useState({
        term: "",
        category: "HANDLEBAR_AND_STEM",
    });

    const [pagination, setPagination] = useState({page: 1, size: 6});

    const confirmDetail = usePopupStore((state: PopupStore) => state.confirmDetail);
    const {spareProducts, fetchSpareProducts} = useSparePartsStore();

    useEffect(() => {
        (async()=>{
            try{
                await fetchSpareProducts(search, pagination.page, pagination.size);
            } catch (e){
                alert(e);
            }
        })()

    }, [search, pagination.page, pagination.size, fetchSpareProducts]);

    // ✅ Handle input change
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch((prev) => ({...prev, term: e.target.value}));
    };

    // ✅ Trigger manual search
    const handleSearch = async() => {
        setPagination((prev) => ({...prev, page: 1})); // reset page
        await fetchSpareProducts(search, 1, pagination.size);
    };

    // ✅ Pagination handler
    const handlePageChange = (page: number) => {
        setPagination((prev) => ({...prev, page}));
    };
    return (
        <div>
            {/* Banner */}
            <div
                className="relative h-80 w-full bg-cover bg-left"
                style={{backgroundImage: "url('/EssentialComponents/forkframe.webp')"}}
            >
                <div className="absolute inset-0 bg-black/70"/>
                <div className="relative z-10 container py-10">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <Link className="text-white" to="/">
                                    HOME
                                </Link>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator/>
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-orange-600">
                                    FRAME AND FORKS
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>

                    <h1 className="text-white font-bold text-5xl my-20 font-sans">
                        FRAME AND FORKS
                    </h1>
                </div>
            </div>

            {/* Search Bar */}
            <div className="bg-black p-4">
                <div className="container">
                    <p className="text-xl text-white p-4 italic">Searching:</p>
                    <div className="w-[250px] flex">
                        <input
                            type="text"
                            value={search.term}
                            onChange={handleSearchChange}
                            className="border border-orange-500 rounded-r-none rounded-md px-2 py-1 focus:outline-none"
                            placeholder="Search..."
                        />
                        <button
                            onClick={handleSearch}
                            className="border border-orange-500 rounded-l-none rounded-md text-white text-sm px-3 bg-orange-600 hover:bg-orange-700"
                        >
                            <FaSearch className="text-sm"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Product List */}
            <div className="container my-6">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {spareProducts?.map((product: SpareParts) => (
                        <li
                            key={product.id}
                            className="hover:shadow-xl bg-white border rounded-xl p-4 flex flex-col justify-between"
                        >
                            <div>
                                <p className="text-sm text-green-600 bg-gray-100 rounded-lg px-3 py-2 w-fit mb-2">
                                    {product.country}
                                </p>

                                <div className="flex items-center justify-center">
                                    <img
                                        className="w-[300px] h-[200px] object-contain rounded-lg"
                                        src={
                                            product.images?.[0]
                                                ? `${server_api.replace(/\/$/, "")}/${encodeURI(
                                                    product.images[0].path
                                                )}/${encodeURIComponent(
                                                    product.images[0].storageName
                                                )}`
                                                : "/default-placeholder.jpg"
                                        }
                                        alt={product.name || "Spare Part"}
                                    />
                                </div>

                                <p className="text-md text-green-600 mt-3 bg-gray-100 rounded-lg px-3 py-2">
                                    Manufacturer: {product.manufacturer}
                                </p>
                                <p className="text-md bg-gray-100 rounded-lg px-3 py-2">
                                    Type: {product.category}
                                </p>
                            </div>

                            <div className="mt-4 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-1">
                                    <FaDollarSign className="text-gray-600 text-lg"/>
                                    <span className="font-semibold">
                    {product.price?.toLocaleString() || "N/A"} USD
                  </span>
                                </div>

                                <button
                                    onClick={() => confirmDetail(product)}
                                    className="bg-orange-600 hover:bg-orange-700 flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium"
                                >
                                    <LuMousePointerClick/>
                                    See in detail
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Pagination */}
            <div className="my-8">
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                onClick={() => handlePageChange(Math.max(1, pagination.page - 1))}
                                href="#"
                            />
                        </PaginationItem>

                        {[1, 2, 3].map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => handlePageChange(page)}
                                    isActive={pagination.page === page}
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}

                        <PaginationItem>
                            <PaginationEllipsis/>
                        </PaginationItem>

                        <PaginationItem>
                            <PaginationNext
                                onClick={() => handlePageChange(pagination.page + 1)}
                                href="#"
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
};

export default HandlebarAndStem;
