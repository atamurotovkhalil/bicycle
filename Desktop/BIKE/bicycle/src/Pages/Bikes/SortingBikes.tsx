import Ban1 from "./../../../public/MountainBikes/bg1.jpeg";
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
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { Switch } from "@/Components/UI/switch";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import { Checkbox } from "@/Components/UI/checkbox";
import { Slider } from "@/Components/UI/slider";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaWonSign } from "react-icons/fa6";
import clsx from "classnames";
import Bikes from "./Bikes";
import {
  categories,
  brand,
  framematerial,
  Product,
} from "@/App/Admin/AddProduct";
import { useProductStore } from "./store/bikes-store";

type Props = {};
type SliderProps = React.ComponentProps<typeof Slider>;

interface ColorType {
  value: number;
  color: string;
  label: string;
}

let colors = [
  {
    value: 1,
    color: "#F8312F",
    label: "Red",
  },
  {
    value: 2,
    color: "#FFB900",
    label: "Orange",
  },
  {
    value: 3,
    color: "#0077B6",
    label: "Blue",
  },
  {
    value: 4,
    color: "#00C853",
    label: "Green",
  },
  {
    value: 5,
    color: "#FF8000",
    label: "Yellow",
  },
  {
    value: 6,
    color: "#C70039",
    label: "Pink",
  },
  {
    value: 7,
    color: "#3366CC",
    label: "Indigo",
  },
  {
    value: 8,
    color: "#66CC99",
    label: "Cyan",
  },
  {
    value: 9,
    color: "#999999",
    label: "Gray",
  },
  {
    value: 10,
    color: "#FF0000",
    label: "Red",
  },
  {
    value: 11,
    color: "#00FF00",
    label: "Green",
  },
  {
    value: 12,
    color: "#0000FF",
    label: "Blue",
  },
  {
    value: 13,
    color: "#FFFF00",
    label: "Yellow",
  },
  {
    value: 14,
    color: "#000000",
    label: "Black",
  },
  {
    value: 15,
    color: "#FFFFFF",
    label: "White",
  },
  {
    value: 16,
    color: "#FFA500",
    label: "Orange",
  },
  {
    value: 17,
    color: "#800080",
    label: "Purple",
  },
  {
    value: 18,
    color: "#008000",
    label: "Green",
  },
  {
    value: 19,
    color: "#808080",
    label: "Gray",
  },
  {
    value: 20,
    color: "#00008B",
    label: "Navy",
  },
];

const MountainBikes = ({ className, ...props }: SliderProps) => {
  const [price, setPrice] = useState(0);
  const [checked, setChecked] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const [filtered, setFiltered] = useState([]);
  const [filtered1, setFiltered1] = useState([]);
  const [filtered2, setFiltered2] = useState([]);
  const [filtered3, setFiltered3] = useState([]);
  const [filtered4, setFiltered4] = useState([]);
  const [filtered5, setFiltered5] = useState([]);

  const [color, setColor] = useState<ColorType>({
    value: 1,
    color: "#F8312F",
    label: "Red",
  });
  const products = useProductStore((state: any) => state.products);
  const fetchProducts = useProductStore((state: any) => state.fetchProducts);
  const setFilteredProducts = useProductStore((state: any) => state.setFilteredProducts);
  const filteredProducts = useProductStore((state: any) => state.filteredProducts);
  useEffect(() => {
    if (products.length === 0) {
      fetchProducts();
    }
    //handleToggle();
  }, [ products, fetchProducts]);

  const handleToggle = () => {
    if (checked === true) {
      setFiltered(
        products?.filter(
          (product: Product) => product.status === "ACTIVE_PRODUCT"
        )
      );
      setFilteredProducts(products?.filter(
        (product: Product) => product.status === "ACTIVE_PRODUCT"
      ))
    } else if (checked === false) {
      setFiltered(
        products?.filter(
          (product: Product) => product.status === "SOLD_PRODUCT"
        )
      );
      setFilteredProducts(products?.filter(
        (product: Product) => product.status === "SOLD_PRODUCT"
      ))
    } 
    setChecked(!checked);
  };
  console.log(filtered);
  console.log(filteredProducts);

  const handleCheckboxChange = (value: string) => {
    setSelected((prev) => (prev === value ? null : value)); // Toggle selection
    console.log(value);

    const filteredProducts = products?.filter(
      (product: Product) => product.category === value
    );
    if (filteredProducts.length > 0) {
      setFiltered1(filteredProducts);
      setFilteredProducts(filteredProducts)
    } 
    // else {
    //   setFiltered1(filtered);
    // }
  };
  console.log(filtered1);

  const handleSliderChange = (value: number[]) => {
    setPrice(value[0]);
  };

  const setChoosenPrice = () => {
    if (filtered1?.filter((product: Product) => product.price === price)) {
      setFiltered2(
        filtered1?.filter((product: Product) => product.price === price)
      );
      setFilteredProducts(filtered1?.filter((product: Product) => product.price === price))
    } 
    // else
    //  {
    //   setFiltered2(filtered1);
    // }
  };
  console.log(filtered2);

  const handleBrandChange = (value: string) => {
    setSelectedBrand((prev) => (prev === value ? null : value)); // Toggle selection
    console.log(value);
    //console.log(selected);

    const filteredProducts = filtered2?.filter(
      (product: Product) => product.brand === value
    );
    if (filteredProducts) {
      setFiltered3(filteredProducts);
      setFilteredProducts(filteredProducts)
    } 
    // else {
    //   setFiltered3(filtered2);
    // }
  };
  console.log(filtered3);

  const handleFrameChange = (value: string) => {
    setSelectedFrame((prev) => (prev === value ? null : value)); // Toggle selection
    console.log(value);
    //console.log(selected);

    const filteredProducts = filtered3?.filter(
      (product: Product) => product.framematerial === value
    );
    if (filteredProducts) {
      setFiltered4(filteredProducts);
      setFilteredProducts(filteredProducts)
    } 
    // else {
    //   setFiltered4(filtered3);
    // }
  };
  console.log(filtered4, price);

  const handleColorChange = (value: any) => {
    const selectedColor = filtered4.filter((c: Product) => c.color === value.color);
    if (selectedColor) {
      setFilteredProducts(selectedColor);
    } 
    // else {
    //   setFilteredProducts(filtered4);
    // }
  };

  // const categoryChange = (category: any) => {
  //   console.log(category.value);
  // };
const clearfilter = (value: any) =>{
  setFilteredProducts(products);
  setSelected(null);
  setSelectedBrand(null);
  setSelectedFrame(null);
  setColor(colors[0]);
  setPrice(0);
}
  console.log(checked);

  return (
    <div>
      <div>
        <div className="relative h-[300px] z-30 w-full overflow-hidden">
          <div className="container relative  z-50">
            <div className="py-10 ">
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
            <p className="text-white  text-6xl py-10 font-bold text-start">
              BIKES
            </p>
          </div>
          <img
            src={Ban1}
            alt="background"
            className="absolute inset-0 z-40 w-full brightness-[.40]  h-full  object-cover "
          />
          <div></div>
        </div>
      </div>
      <div className="container">
        <div className="my-10">
          <div className="grid grid-cols-4">
            <div className="col-span-1">
              <div className="flex items-center py-5 border-b justify-between">
                <p>Only In stock</p>
                <Switch
                  checked={!checked}
                  onCheckedChange={handleToggle}
                  className="disabled"
                />
              </div>
              <div>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Product category</AccordionTrigger>
                    {categories?.map((category) => (
                      <AccordionContent className="flex items-center justify-start gap-2 text-[16px]">
                        <label
                          key={category?.id}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={selected === category?.value} // Only one can be checked
                            onChange={() =>
                              handleCheckboxChange(category?.value)
                            }
                          />
                          {category?.name}
                        </label>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Price</AccordionTrigger>
                    <AccordionContent className="gap-2 text-[20px]">
                      <Slider
                        defaultValue={[0]}
                        onValueChange={handleSliderChange}
                        max={2800000}
                        step={10000}
                        className={cn("w-[100%] py-2  ", className)}
                      />
                      <div className="flex items-center justify-between">
                        <p className="border flex items-center justify-between rounded-md text-center w-32 p-1 ">
                          0 <FaWonSign className="text-sm" />
                        </p>
                        -
                        <p className="border flex items-center justify-between rounded-md text-center w-32  p-1 ">
                          {price} <FaWonSign className="text-sm" />
                        </p>
                      </div>
                      <div className="m-2">
                        <button
                          onClick={() => setChoosenPrice()}
                          className="block w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-md bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                          Set Price
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Product brand</AccordionTrigger>
                    {brand?.map((category) => (
                      <AccordionContent className="flex items-center justify-start gap-2 text-[16px]">
                        <label
                          key={category?.id}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={selectedBrand === category?.value} // Only one can be checked
                            onChange={() => handleBrandChange(category?.value)}
                          />
                          {category?.name}
                        </label>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion type="multiple">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Product Frame material</AccordionTrigger>
                    {framematerial?.map((category) => (
                      <AccordionContent className="flex items-center justify-start gap-2 text-[16px]">
                        <label
                          key={category?.id}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            checked={selectedFrame === category?.value} // Only one can be checked
                            onChange={() => handleFrameChange(category?.value)}
                          />
                          {category?.name}
                        </label>
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      Colors{" "}
                      <div className="flex items-center justify-start mr-[120px]">
                        <button
                          onClick={() => handleColorChange(color.value)}
                          style={{ backgroundColor: color.color }}
                          key={color.value}
                          className={clsx("rounded-full m-1 border p-4")}
                        ></button>
                        <p>
                          <span className="text-gray-400">{color.label}</span>
                        </p>
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className=" border-b">
                      {filtered4?.map((color: Product) => (
                        <button
                          onClick={() => handleColorChange(color)}
                          style={{ backgroundColor: color.color }}
                          key={color._id}
                          className={clsx(
                            "rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 m-1 border p-4"
                          )}
                        ></button>
                      ))}
                    </AccordionContent>
                    <AccordionContent className=" gap-2 text-[16px]"></AccordionContent>
                    <AccordionContent className=" gap-2 text-[16px]"></AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div>
                <button
                onClick={clearfilter}
                 className="block w-full px-4 py-3 text-sm font-medium text-gray-700 rounded-md bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Clear filter
                </button>
              </div>
            </div>
            <div className="col-span-3">
              <Bikes />
            </div>
          </div>
        </div>
        <div className="my-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default MountainBikes;
