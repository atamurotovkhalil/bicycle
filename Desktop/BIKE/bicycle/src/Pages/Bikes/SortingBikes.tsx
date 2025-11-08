import { useEffect, useState } from "react";
import Ban1 from "./../../../public/MountainBikes/bg1.jpeg";
import { FaWonSign } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Bikes from "./Bikes";
import { useProductStore } from "./store/bikes-store";
import { categories, brand, framematerial } from "@/Shared/Types/Product";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/Components/UI/pagination";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { Switch } from "@/Components/UI/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import { Slider } from "@/Components/UI/slider";

type SliderProps = React.ComponentProps<typeof Slider>;

interface FilterState {
  priceFrom: number[];
  priceTo: number[];
  checked: boolean;
  category: string;
  brand: string;
  frame: string;
  color: string;
  searchByName: string;
}

const MountainBikes = ({ className, ...props }: SliderProps) => {
  // 🔹 Filter state
  const [sorting, setSorting] = useState<FilterState>({
    priceFrom: [0],
    priceTo: [0],
    checked: true,
    category: "",
    brand: "",
    frame: "",
    color: "",
    searchByName: "",
  });

  // 🔹 Price slider state
  const [price, setPrice] = useState({
    starts: [0],
    ends: [0],
  });

  // 🔹 Pagination
  const [pagination, setPagination] = useState({ page: 1, size: 9 });

  // 🔹 Zustand store
  const products = useProductStore((state: any) => state.products);
  const fetchProducts = useProductStore((state: any) => state.fetchProducts);

  // 🔹 Fetch on mount + whenever filter changes
  useEffect(() => {
    fetchProducts(sorting, pagination.page, pagination.size);
  }, [sorting, pagination.page, fetchProducts]);

  // 🔹 Handlers
  const handleToggle = (value: boolean) => {
    const newSorting = { ...sorting, checked: value };
    setSorting(newSorting);
  };

  const handleCategoryChange = (value: string) => {
    const newSorting = { ...sorting, category: value };
    setSorting(newSorting);
  };

  const handleBrandChange = (value: string) => {
    const newSorting = { ...sorting, brand: value };
    setSorting(newSorting);
  };

  const handleFrameChange = (value: string) => {
    const newSorting = { ...sorting, frame: value };
    setSorting(newSorting);
  };

  const handleStartPriceChange = (value: number[]) =>
    setPrice({ ...price, starts: value });

  const handleEndPriceChange = (value: number[]) =>
    setPrice({ ...price, ends: value });

  const setChoosenPrice = () => {
    const newSorting = {
      ...sorting,
      priceFrom: [price.starts[0]],
      priceTo: [price.ends[0]],
    };
    setSorting(newSorting);
  };

  const handlePageChange = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const clearFilter = () => {
    setSorting({
      priceFrom: [0],
      priceTo: [0],
      checked: true,
      category: "",
      brand: "",
      frame: "",
      color: "",
      searchByName: "",
    });
    setPrice({ starts: [0], ends: [0] });
    setPagination({ page: 1, size: 9 });
  };

  // 🔹 Render
  return (
    <div>
      {/* Hero Banner */}
      <div className="relative h-[300px] z-30 w-full overflow-hidden">
        <div className="container relative z-50">
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
                  <BreadcrumbLink
                    className="text-orange-600"
                    href="/mountainbikes"
                  >
                    BIKES
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </div>

        <div className="container absolute z-50">
          <p className="text-white text-6xl py-10 font-bold text-start">
            BIKES
          </p>
        </div>

        <img
          src={Ban1}
          alt="background"
          className="absolute inset-0 z-40 w-full h-full object-cover brightness-[.40]"
        />
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="my-10 grid grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="col-span-1">
            {/* In stock */}
            <div className="flex items-center py-5 border-b justify-between">
              <p>Only In Stock</p>
              <Switch checked={sorting.checked} onCheckedChange={handleToggle} />
            </div>

            {/* Category Filter */}
            <Accordion type="multiple">
              <AccordionItem value="category">
                <AccordionTrigger>Product Category</AccordionTrigger>
                {categories?.map((cat) => (
                  <AccordionContent
                    key={cat.value}
                    className="flex items-center gap-2 text-[16px]"
                  >
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={sorting.category === cat.value}
                        onChange={() => handleCategoryChange(cat.value)}
                      />
                      {cat.name}
                    </label>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>

            {/* Price Filter */}
            <Accordion type="multiple">
              <AccordionItem value="price">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent className="gap-2 text-[16px]">
                  <Slider
                    value={price.starts}
                    onValueChange={handleStartPriceChange}
                    max={2800000}
                    step={10000}
                    className={cn("w-full py-2", className)}
                  />
                  <Slider
                    value={price.ends}
                    onValueChange={handleEndPriceChange}
                    max={2800000}
                    step={10000}
                    className={cn("w-full py-2", className)}
                  />

                  <div className="flex items-center justify-between">
                    <p className="border flex items-center rounded-md text-center w-32 p-1">
                      {price.starts[0]} <FaWonSign className="text-sm ml-1" />
                    </p>
                    <span>-</span>
                    <p className="border flex items-center rounded-md text-center w-32 p-1">
                      {price.ends[0]} <FaWonSign className="text-sm ml-1" />
                    </p>
                  </div>

                  <div className="mt-3">
                    <button
                      onClick={setChoosenPrice}
                      className="w-full px-4 py-3 text-sm font-medium text-white rounded-md bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Set Price
                    </button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Brand Filter */}
            <Accordion type="multiple">
              <AccordionItem value="brand">
                <AccordionTrigger>Product Brand</AccordionTrigger>
                {brand?.map((b) => (
                  <AccordionContent
                    key={b.value}
                    className="flex items-center gap-2 text-[16px]"
                  >
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={sorting.brand === b.value}
                        onChange={() => handleBrandChange(b.value)}
                      />
                      {b.name}
                    </label>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>

            {/* Frame Material Filter */}
            <Accordion type="multiple">
              <AccordionItem value="frame">
                <AccordionTrigger>Frame Material</AccordionTrigger>
                {framematerial?.map((f) => (
                  <AccordionContent
                    key={f.value}
                    className="flex items-center gap-2 text-[16px]"
                  >
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={sorting.frame === f.value}
                        onChange={() => handleFrameChange(f.value)}
                      />
                      {f.name}
                    </label>
                  </AccordionContent>
                ))}
              </AccordionItem>
            </Accordion>

            {/* Clear Filter */}
            <button
              onClick={clearFilter}
              className="mt-6 block w-full px-4 py-3 text-sm font-medium text-white rounded-md bg-orange-500 hover:bg-orange-600 focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Clear Filter
            </button>
          </div>

          {/* Product Grid */}
          <div className="col-span-3">
            <Bikes products={products} />
          </div>
        </div>

        {/* Pagination */}
        <div className="my-6">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(Math.max(1, pagination.page - 1))}
                  href="#"
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(1)}
                  isActive={pagination.page === 1}
                >
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationEllipsis />
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
    </div>
  );
};

export default MountainBikes;
