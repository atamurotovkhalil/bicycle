import Header1 from "./../../../public/images/header.png";
import Header2 from "./../../../public/images/wille.png";
import Header3 from "./../../../public/images/head2.png";
import Header4 from "./../../../public/images/trek.png";
import Header5 from "./../../../public/images/tacx.png";
import Header6 from "./../../../public/images/sram.png";
import Header7 from "./../../../public/images/shimano.png";
import Header8 from "./../../../public/images/topeak.png";
import { Link } from "react-router";
const Header = () => {
  return (
    <div className="bg-black">
      <div className="">
        <div
          style={{ backgroundImage: `url(${Header1})` }}
          className="h-90vh w-full  bg-black bg-linear-to-r to-black bg-cover  bg-left"
        >
          <div className="container grid grid-cols-2 ">
            <div className="col-span-1 p-20">
              <h1 className="text-left text-white text-5xl font-bold">
                <span className="my-[30px]"> ELECTRO </span> <br />
                <span className="my-[30px]"> BICYCLES </span>
              </h1>
              <p className=" text-xs py-14 text-white text-left">
                Cento10 Hybrid - lorem ipsum dolor sit amet,
                <br /> consectetur adipiscing elit Discover the best deals, get
                free shipping, <br /> and save money on your bicycle purchases.
              </p>
              <button className="ml-2 bg-[#F57520] px-4 rounded-sm hover:bg-[#E1610C] text-white text-xl">
                <Link to="/blog-detail"> In Detail</Link>
              </button>
            </div>
          </div>
          <div className="bg-black">
            <div className="container grid grid-cols-3 mt-10">
              <div className="col-span-1 bg-[#101010]">
                <h3 className="text-white p-10 text-base font-bold">
                  Why Choose Cento10 Hybrid?
                </h3>
              </div>
              <div className="col-span-1 bg-[#1A1A1A]">
                <h3 className="text-white p-10 text-base font-bold">
                  Why Choose Cento10 Hybrid?
                </h3>
              </div>
              <div className="col-span-1 bg-[#2E2E2E]">
                <h3 className="text-white p-10 text-base font-bold">
                  Why Choose Cento10 Hybrid?
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-black  flex">
          <div className="flex justify-start items-center text-white text-xs w-full rounded-br-xl">
            <span>�� 2022 Cento10 Hybrid. All rights reserved.</span>
          </div>
          <div className="flex bg-white w-full border-b-0 rounded-tl-lg rounded-tr-lg justify-start items-center text-white text-xl">
            <span></span>
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

export default Header;
