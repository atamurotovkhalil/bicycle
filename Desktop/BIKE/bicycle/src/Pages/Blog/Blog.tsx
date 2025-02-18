import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { Link } from "react-router";
type Props = {};

const Blog = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <div
            className="relative h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Blog/img1.png')" }}
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
                        BLOG
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-white font-bold text-5xl my-20 font-sans">
                  BLOG
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="m-10">
            <div className="grid grid-cols-3 pb-9 text-white  gap-8">
              <div className="col-span-1  bg-black  border rounded-xl">
                {/* Top Section */}

                {/* Main Image */}
                <div className="">
                  <img
                    className=" object-cover h-80 rounded-lg"
                    src="/Blog/img2.png"
                    alt="new-image"
                  />
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-white">24.01.2023</span>
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-orange-500">#SHOW</span>
                </div>

                {/* Title */}
                <p className="mt-4 mx-3 font-semibold">
                  Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
                </p>

                {/* Price */}
                <div className="m-3 flex items-center gap-3">
                  <Link
                  to="/blog-detail"
                   className="hover:text-orange-600 font-medium">
                    See more...
                  </Link>
                </div>
              </div>

              <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
                {/* Top Section */}

                {/* Main Image */}
                <div className="">
                  <img
                    className="h-80 object-cover rounded-lg"
                    src="/Blog/img3.png"
                    alt="new-image"
                  />
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-white">24.01.2023</span>
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-orange-500">#SHOW</span>
                </div>

                {/* Title */}
                <p className="mt-4 mx-3 font-semibold">
                  Trek Verve 1 Disc Low Step Era <br />
                  White HYBD 2022
                </p>

                {/* Price */}
                <div className="m-3 flex items-center gap-3">
                  <Link
                  to="/blog-detail"
                   className="hover:text-orange-600 font-medium">
                    See more...
                  </Link>
                </div>
              </div>
              <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
                {/* Top Section */}

                {/* Main Image */}
                <div className="">
                  <img
                    className="h-80 object-cover rounded-lg"
                    src="/Blog/img4.png"
                    alt="new-image"
                  />
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-white">24.01.2023</span>
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-orange-500">#SHOW</span>
                </div>

                {/* Title */}
                <p className="mt-4 mx-3 font-semibold">
                  Trek Dual Sport 1 Quicksilver
                  <br /> Hybrid 2022
                </p>

                {/* Price */}
                <div className="m-3 flex items-center gap-3">
                  <Link
                  to="/blog-detail"
                   className="hover:text-orange-600 font-medium">
                    See more...
                  </Link>
                </div>
              </div>
              <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
                {/* Top Section */}

                {/* Main Image */}
                <div className="">
                  <img
                    className="h-80 object-cover rounded-lg"
                    src="/Blog/img5.png"
                    alt="new-image"
                  />
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-white">24.01.2023</span>
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-orange-500">#SHOW</span>
                </div>

                {/* Title */}
                <p className="mt-4 mx-3 font-semibold">
                  Trek Dual Sport 1 Quicksilver
                  <br /> Hybrid 2022
                </p>

                {/* Price */}
                <div className="m-3 flex items-center gap-3">
                  <Link
                  to="/blog-detail"
                   className="hover:text-orange-600 font-medium">
                    See more...
                  </Link>
                </div>
              </div>
              <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
                {/* Top Section */}

                {/* Main Image */}
                <div className="">
                  <img
                    className="h-80 object-cover rounded-lg"
                    src="/Blog/img6.png"
                    alt="new-image"
                  />
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-white">24.01.2023</span>
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-orange-500">#SHOW</span>
                </div>

                {/* Title */}
                <p className="mt-4 mx-3 font-semibold">
                  Trek Dual Sport 1 Quicksilver
                  <br /> Hybrid 2022
                </p>

                {/* Price */}
                <div className="m-3 flex items-center gap-3">
                  <Link
                  to="/blog-detail"
                   className="hover:text-orange-600 font-medium">
                    See more...
                  </Link>
                </div>
              </div>
              <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
                {/* Top Section */}

                {/* Main Image */}
                <div className="">
                  <img
                    className="h-80 object-cover rounded-lg"
                    src="/Blog/img7.png"
                    alt="new-image"
                  />
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-white">24.01.2023</span>
                </div>
                <div className="mt-3 mx-3 flex items-center gap-3">
                  <span className="font-medium text-orange-500">#SHOW</span>
                </div>

                {/* Title */}
                <p className="mt-4 mx-3 font-semibold">
                  Trek Dual Sport 1 Quicksilver
                  <br /> Hybrid 2022
                </p>

                {/* Price */}
                <div className="m-3 flex items-center gap-3">
                  <Link
                  to="/blog-detail"
                   className="hover:text-orange-600 font-medium">
                    See more...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-10">
            <div className="flex justify-center gap-10">
              <button className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-600 hover:text-white">
                SEE ALL...
              </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
