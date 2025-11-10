import Header2 from "./../../../public/images/wille.png";
import Header3 from "./../../../public/images/head2.png";
import Header4 from "./../../../public/images/trek.png";
import Header5 from "./../../../public/images/tacx.png";
import Header6 from "./../../../public/images/sram.png";
import Header7 from "./../../../public/images/shimano.png";
import Header8 from "./../../../public/images/topeak.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import {Link} from "react-router";

const Storage = () => {
  return (
    <div>
      <div>
        <div>
          <div
            className="relative h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Storage/img1.jpeg')" }}
          >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 container">
              {/* Breadcrumb */}
              <div className="py-10">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <Link className="text-white" to="/">
                        HOME
                      </Link>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-orange-600">
                        STORAGE
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-white font-bold text-5xl my-20 font-sans">
                  STORAGE
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="container">
              <div className="grid grid-cols-3 gap-10 p-10">
                <div className="col-span-1 bg-orange-400 p-5 rounded-lg m-5">
                  <h2 className="text-gray-100 text-md">
                    Storage of a bicycle for 6 months from October to April for
                    only 5000 USD.
                  </h2>
                  <span className="text-gray-100">
                    _________________________________
                  </span>
                  <p className="text-gray-100 text-sm leading-relaxed">
                    "Comprehensive bicycle maintenance as a gift (instead of
                    3,500 RUB)."
                  </p>
                </div>
                <div className="col-span-2 flex items-center bg-gray-900 p-10 rounded-lg m-5">
                  <div className="my-auto ">
                    <p className="text-gray-100 text-sm leading-relaxed">
                      Your bicycle will be stored in a warm and dry room
                      throughout the entire storage period. Before packaging,
                      the bicycle is inspected and lubricated for preservation,
                      and upon delivery to you, comprehensive technical
                      maintenance is performed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex items-center justify-between">
        <div>
          <img className="w-40 h-18" src={Header2} alt="footer-image" />
        </div>
        <div>
          <img className="w-40 h-12" src={Header3} alt="footer-image" />
        </div>
        <div>
          <img className="w-40 h-12" src={Header4} alt="footer-image" />
        </div>
        <div>
          <img className="w-40 h-18" src={Header5} alt="footer-image" />
        </div>
        <div>
          <img className="w-40 h-16" src={Header6} alt="footer-image" />
        </div>
        <div>
          <img className="w-40 h-24" src={Header7} alt="footer-image" />
        </div>
        <div>
          <img className="w-40 h-24" src={Header8} alt="footer-image" />
        </div>
      </div>
    </div>
  );
};

export default Storage;
