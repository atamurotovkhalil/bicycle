import Header2 from "./../../../public/images/wille.png";
import Header3 from "./../../../public/images/head2.png";
import Header4 from "./../../../public/images/trek.png";
import Header5 from "./../../../public/images/tacx.png";
import Header6 from "./../../../public/images/sram.png";
import Header7 from "./../../../public/images/shimano.png";
import Header8 from "./../../../public/images/topeak.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import {Link} from "react-router";
const AboutUs = () => {
  return (
    <div>
      <div>
        <div
          className="relative h-80 w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/AboutUs/img1.png')" }}
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
                      ABOUT US
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-white font-bold text-5xl my-20 font-sans">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="text-black font-bold text-6xl my-20 font-sans">
            <span className="text-orange-500">BICYCLE </span> IS MORE THAN{" "}
            <br /> JUST A MEANS OF TRANSPORTATION!
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
            fermentum nunc, non feugiat ex molestie vel. Nullam sodales
            condimentum nunc, ac fermentum odio consequat ac.
          </p>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-[#F57520]  ">
              <div className="px-8 py-4 rounded-s-full bg-[#101010]">
                <h1 className="font-semibold text-gray-200 my-4">Storage</h1>
                <p className="text-[12px] text-gray-200 my-4">
                  If you love riding, be ready to park your bike in your
                  apartment for the winter—or leave it with us for storage and
                  maintenance!
                </p>
                <button className=" my-4 py-2 text-gray-200 font-bold rounded-md ">
                  More...
                </button>
              </div>
            </div>
            <div>
              <div className="px-8 py-4 rounded-xl  bg-[#101010]">
                <h1 className="font-semibold text-gray-200 my-4">
                  Bicycle workshop
                </h1>
                <p className="text-[12px] text-gray-200 my-4">
                  If you purchased a bicycle from our store, you don't need to
                  worry about setup and inspection, as we take care of it as
                  part of the pre-sale preparation.
                </p>
                <button className=" my-4 py-2 text-gray-200 font-bold rounded-md ">
                  More...
                </button>
              </div>
            </div>
            <div className="bg-[#F57520]">
              <div className="px-8 py-4 rounded-e-full  bg-[#101010]">
                <h1 className="font-semibold text-gray-200 my-4">Guarantee</h1>
                <p className="text-[12px] text-gray-200 my-4">
                  Also, for the convenience of our customers, our store assists
                  (participates) in the formation of warranty claims for all the
                  brands listed below.
                </p>
                <button className=" my-4 py-2 text-gray-200 font-bold rounded-md ">
                  More...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-10">
        <div className="grid grid-cols-2">
          <div className="container bg-black py-16  my-auto">
            <div className=" px-8 py-4 rounded-xl  ">
              <h1 className="font-semibold text-4xl text-gray-200 my-4">
                A FEW WORDS ABOUT US AND OUR WORK
              </h1>
              <p className="text-[12px] text-gray-200 my-4">
                A bicycle is not just a means of transportation. We, the
                World-Bike team, firmly believe in this. For us, a bicycle is a
                whole way of life, filled with freedom, drive, adventure, and
                new discoveries.
                <br />
                <br />
                We sincerely love what we do and strive to make bicycles an
                essential part of your life as well.
              </p>
              <div className=" flex justify-start items-center gap-5 p-2">
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaFacebook className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaTwitter className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaPinterest className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaInstagramSquare className="text-xl text-white" />
                </div>
                <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer hover:w-12 hover:h-12 transition-all duration-300 bg-bgGreen">
                  <FaYoutube className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-full h-[35rem] object-cover object-center"
              src="/AboutUs/img2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="">
          <h1 className="text-black font-bold text-6xl my-20 font-sans">
            WE HAVE GATHERED THE BEST FROM THE WORLD OF CYCLING FOR YOU
          </h1>
          <p className="text-white text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
            fermentum nunc, non feugiat ex molestie vel. Nullam sodales
            condimentum nunc, ac fermentum odio consequat ac.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-1">
            <p className="text-md p-10">
              World-Bike specializes in the sale and maintenance of bicycles,
              spare parts, accessories, and gear.
            </p>
          </div>
          <div className="col-span-2">
            <p className="text-md p-10 text-gray-500">
              We know the value of quality. That's why World-Bike offers only
              high-quality premium products at corresponding prices. And upon
              request, we will assemble a custom bicycle for you with a unique
              design and technical specifications!
            </p>
          </div>
        </div>
      </div>
      <div>
        <img
          className="w-full h-[30rem] object-cover object-center"
          src="/AboutUs/img3.jpeg"
          alt=""
        />
      </div>
      <div>
        <div className="container">
          <div className="grid grid-cols-3 gap-10 my-8">
            <div className="bg-[#2E2E2E] py-4 px-5 rounded-xl">
              <h1 className="text-white font-bold text-xl my-5 font-sans">
                Bicycle
              </h1>
              <p className="text-white text-sm leading-relaxed">
                BMC Cervelo Cipollini Colnago Early Rider Giant Look Orbea
                Pinarello Scott Wilier Officine Mattio
              </p>
            </div>
            <div className="bg-[#101010] py-4 px-5 rounded-xl">
              <h1 className="text-white font-bold text-xl my-5 font-sans">
                Accessories
              </h1>
              <p className="text-white text-sm leading-relaxed">
                SKS Selle Royal Elite Crank Brothers Scicon Garmin Look Wellgo
                Pedros Fizik Blackburn Sigma sport Tacx
              </p>
            </div>
            <div className="bg-[#F57520] py-4 px-5 rounded-xl">
              <h1 className="text-white font-bold text-xl my-5 font-sans">
                Spare parts
              </h1>
              <p className="text-white text-sm leading-relaxed">
                Campagnolo Lightweight Shimano Mavic Fox Continental Vittoria
                Tufo Easton Astute Sram Rohloff 3T
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-10">
        <div className="grid bg-gradient-to-r from-[#F57520] to-[#F57520] grid-cols-2">
          <div className="container  py-12  my-auto">
            <div className=" px-8 py-4 rounded-xl  ">
              <h1 className="font-semibold text-3xl text-gray-200 my-4">
                ANY QUESTIONS LEFT?
              </h1>
              <p className=" text-gray-200 my-4">Call Us At</p>
              <div className="text-gray-200 text-5xl  gap-5 p-2">
                <p>+82 10 1234 5678</p>
              </div>
              <p className=" text-gray-200 my-4">
                We are at your service! And, of course, come visit our store to
                see the products in person, assess the quality firsthand, and
                make the right choice!
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-full h-[25rem] -scale-x-100 object-cover object-center"
              src="/AboutUs/img4.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div>
            <h1 className="text-black font-bold text-5xl my-20 font-sans">
              WORLD-BIKE IS FIRST AND FOREMOST A TEAM!
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-10 my-8">
            <div className="my-auto">
              <p className="text-md py-10 text-gray-500">
                All our employees are former professional cyclists, champions,
                and prize-winners of European and Korean competitions, as well
                as members of the national team. Rest assured, if anyone can
                provide you with truly professional advice, it’s them.
              </p>
              <p className="text-base font-semibold py-5 text-black">
                World-Bike consultants are here to assist you with any question:
              </p>
              <div className="flex items-center justify-start gap-5 my-5">
                <FaCheck className="text-orange-600 text-xl" />
                <p>
                  selecting a bike tailored to your height, weight, riding
                  style, and the purpose of your purchase;
                </p>
              </div>
              <div className="flex items-center justify-start gap-5 my-5">
                <FaCheck className="text-orange-600 text-xl" />
                <p>
                  assistance in choosing spare parts, accessories, and gear;
                </p>
              </div>
              <div className="flex items-center justify-start gap-5 my-5">
                <FaCheck className="text-orange-600 text-xl" />
                <p>consultations on any topic related to sports.</p>
              </div>
            </div>
            <div>
              {" "}
              <img
                className="w-full h-[33rem] rounded-xl object-cover object-center"
                src="/AboutUs/img5.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h1 className="text-black font-bold text-5xl my-20 font-sans">
            PHOTO GALLERY
          </h1>
        </div>
        <div className="grid grid-cols-5">
          <div className="mr-5 ">
            <img
              className="w-full rounded-r-xl h-[10rem] object-cover object-center"
              src="/AboutUs/img6.jpeg"
              alt=""
            />
          </div>
          <div className="mx-5 ">
            <img
              className="w-full rounded-xl h-[10rem] object-cover object-center"
              src="/AboutUs/img7.jpeg"
              alt=""
            />
          </div>
          <div className="mx-5 ">
            <img
              className="w-full rounded-xl h-[10rem] object-cover object-center"
              src="/AboutUs/img8.jpeg"
              alt=""
            />
          </div>
          <div className="mx-5 ">
            <img
              className="w-full rounded-xl h-[10rem] object-cover object-center"
              src="/AboutUs/img9.jpeg"
              alt=""
            />
          </div>
          <div className="ml-5 ">
            <img
              className="w-full rounded-l-xl h-[10rem] object-cover object-center"
              src="/AboutUs/img10.jpeg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <h1 className="text-black font-bold text-5xl my-20 font-sans">
            CONTACT US
          </h1>
        </div>
      </div>
      <div
        className="h-80 w-full bg-left relative"
        style={{ backgroundImage: "url('/Contact/map.png')" }}
      >
        <div className="flex justify-center items-center gap-3 py-10">
          <img
            className="w-20 h-20 relative z-20"
            src="/Contact/Vector.png"
            alt="contact-icon"
          />
        </div>
      </div>
      <div className="container">
        <div className="grid my-8 grid-cols-2">
          <div>
            <h2 className="text-xl my-3 font-semibold ">Store address:</h2>
            <p className="my-3">c. Busan, st. Gimhae, ap. 45</p>
            <h2 className="text-xl my-3 font-semibold ">Working hours:</h2>
            <p className="my-3">Monday, Sunday from 10:00 to 20:00</p>
            <p className="my-3">NO DAYS OFF</p>
            <h2 className="text-xl my-3 font-semibold ">Phone:</h2>
            <p className="my-3">
              +82 10-1234-5678
              <br />
              +82 10-8765-4321
            </p>
            <h2 className="text-xl my-3 font-semibold ">E-mail:</h2>
            <p className="my-3">
              info@example.com
              <br />
              support@example.com
              <br />
              sales@example.com
            </p>
          </div>
          <div>
            <h2 className="text-xl my-3 font-semibold ">Legal information:</h2>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Name:</h2>
              <p className="my-1">IP INTREBIN YOO DONG YUUN</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Tax payer ID number:</h2>
              <p className="my-1">8987 4453 6685</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">OGRN:</h2>
              <p className="my-1">1234 5677 8899</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Actual address:</h2>
              <p className="my-1 text-end">
                c. Busan, st. Gimhae, ap. 45
                <br />
                (Registered office: c. Seoul, st. Jungkook, 37)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1">Legal address:</h2>
              <p className="my-1 text-end">
                c. Busan, st. Gimhae, ap. 45
                <br />
                (Registered office: c. Seoul, st. Jungkook, 37)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Current account:</h2>
              <p className="my-1">9238746592837659876</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Bank:</h2>
              <p className="my-1 text-end">
                Bank of Korea (Kobe Branch)
                <br />
                (Account number: 12345678901234567890)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Correspondent account:</h2>
              <p className="my-1">9238746592837659876</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">BIK:</h2>
              <p className="my-1 text-end">
                BK12345678901234567890
                <br />
                (Bank code: 123456)
              </p>
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

export default AboutUs;
