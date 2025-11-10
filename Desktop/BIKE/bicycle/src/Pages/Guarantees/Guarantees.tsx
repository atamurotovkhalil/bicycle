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
import { FaCheck } from "react-icons/fa6";
import {Link} from "react-router";

const Guarantees = () => {
  return (
    <div>
      <div>
        <div>
          <div
            className="relative h-80 w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/Guarantee/img1.jpeg')" }}
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
                        GUARANTEES
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-white font-bold text-5xl my-20 font-sans">
                  GUARANTEES
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className=" grid grid-cols-2 gap-10 p-10">
          <div className="">
            <p className="text-gray-700 text-sm leading-relaxed">
              One of the important aspects of our online store's operations is
              that the products sold are certified and come with a
              manufacturer's warranty from the producers.
            </p>
          </div>
          <div className="">
            <p className="text-gray-700 text-sm leading-relaxed">
              "Also, for the convenience of our customers, our store assists
              (participates) in the formation of warranty claims for all the
              brands listed below. In the event of any warranty issue, you can
              contact us directly."
            </p>
          </div>
        </div>
        <div className="container">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 text-start">Brand</th>
                  <th className="py-2 px-4 text-end">Warranty</th>
                  <th className="py-2 px-4 text-start">Brand</th>
                  <th className="py-2 px-4 text-end">Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4">BMC</td>
                  <td className="py-2 px-4 text-end">
                    2 years +1 year with website registration
                  </td>
                  <td className="py-2 px-4">Kask</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Bont</td>
                  <td className="py-2 px-4 text-end">6 months</td>
                  <td className="py-2 px-4">Koo</td>
                  <td className="py-2 px-4 text-end">-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Campagnolo</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                  <td className="py-2 px-4">Lightweight</td>
                  <td className="py-2 px-4 text-end">-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Cervelo</td>
                  <td className="py-2 px-4 text-end">48 months</td>
                  <td className="py-2 px-4">Officine Mattio</td>
                  <td className="py-2 px-4 text-end">36 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Cipollini</td>
                  <td className="py-2 px-4 text-end">60 months</td>
                  <td className="py-2 px-4">Pinarello</td>
                  <td className="py-2 px-4 text-end">
                    24 months + 12 months with website registration
                  </td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Colnago</td>
                  <td className="py-2 px-4 text-end">24 months</td>
                  <td className="py-2 px-4">Rohloff</td>
                  <td className="py-2 px-4 text-end">60 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Continental</td>
                  <td className="py-2 px-4 text-end">-</td>
                  <td className="py-2 px-4">Sclcon</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">CrankBrothers</td>
                  <td className="py-2 px-4 text-end">-</td>
                  <td className="py-2 px-4">Scott</td>
                  <td className="py-2 px-4 text-end">60 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Early Rider</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                  <td className="py-2 px-4">Selleroyal</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Easton</td>
                  <td className="py-2 px-4 text-end">-</td>
                  <td className="py-2 px-4">Shimano</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Elite</td>
                  <td className="py-2 px-4 text-end">-</td>
                  <td className="py-2 px-4">Sigma</td>
                  <td className="py-2 px-4 text-end">-</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Fox</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                  <td className="py-2 px-4">SKS</td>
                  <td className="py-2 px-4 text-end">6 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Garmin</td>
                  <td className="py-2 px-4 text-end">24 months</td>
                  <td className="py-2 px-4">Tacx</td>
                  <td className="py-2 px-4 text-end">12 months</td>
                </tr>
                <tr>
                  <td className="py-2 px-4">Giant</td>
                  <td className="py-2 px-4 text-end">60 months</td>
                  <td className="py-2 px-4">Willer</td>
                  <td className="py-2 px-4 text-end">24 months</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <p className="text-gray-700 font-semibold text-[20px] my-10 leading-relaxed">
            For warranty service, the following are required:
          </p>
          <div>
            <div className="flex items-center justify-start gap-5 my-5">
              <FaCheck className="text-orange-600 text-xl" />
              <p>
                a correctly and fully filled warranty card, which must include
                the model and serial number of the product, the date of sale,
                and the stamp of the selling organization;
              </p>
            </div>
            <div className="flex items-center justify-start gap-5 my-5">
              <FaCheck className="text-orange-600 text-xl" />
              <p>a document confirming the purchase (sales invoice);</p>
            </div>
            <div className="flex items-center justify-start gap-5 my-5">
              <FaCheck className="text-orange-600 text-xl" />
              <p>the complete set of the product</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="rounded-xl bg-gray-200 p-8">
            <p>
              "Please also note that upon receiving and paying for the order,
              the Buyer must check the completeness and appearance of the
              product in the presence of the courier for any physical defects
              (scratches, cracks, chips, etc.) and ensure the completeness of
              the set. Claims on these issues will not be accepted after the
              courier's departure."
            </p>
          </div>
        </div>
        <div className="container">
          <p className="text-gray-700 font-semibold text-[20px] my-10 leading-relaxed">
            Warranty service is NOT provided if:
          </p>
          <div className="grid grid-cols-3">
            <div className="col-span-2 ">
              <div className="p-5 rounded-xl bg-orange-500">
                <div>
                  <ul className="list-disc">
                    <li className="m-3 mx-4 text-gray-200">
                      the product is defective or damaged during shipping;
                    </li>
                    <li className="m-3 mx-4 text-gray-200">
                      the product is not in its original packaging;
                    </li>
                    <li className="m-3 mx-4 text-gray-200">
                      the product has been opened or altered;
                    </li>
                    <li className="m-3 mx-4 text-gray-200">
                      the product has been used or was sold after the warranty
                      period;
                    </li>
                    <li className="m-3 mx-4 text-gray-200">
                      the product has been stolen or lost.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-span-2 p-5 my-5    rounded-xl bg-gray-200">
                <p>
                  You can find a detailed description of the warranty conditions
                  in the documentation for the purchased product and/or on the
                  respective manufacturer's website.
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <img
                src={"/Guarantee/img2.jpeg"}
                alt="Warranty Service"
                className="object-cover w-full h-[21rem] mx-5 rounded-xl"
              />
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

export default Guarantees;
