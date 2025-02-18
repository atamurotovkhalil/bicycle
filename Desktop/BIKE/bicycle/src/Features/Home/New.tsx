type Props = {};
import news1 from "./../../../public/images/news1.png";
import news2 from "./../../../public/images/news2.png";
import news3 from "./../../../public/images/news3.png";
import flag1 from "./../../../public/images/italyflag.png";
import flag2 from "./../../../public/images/americaflag.png";
import { FaWonSign } from "react-icons/fa6";
import { LuMousePointerClick } from "react-icons/lu";
import { Link } from "react-router";
const New = (props: Props) => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="container">
        <div>
          <h2 className="text-5xl p-10 font-bold">New Releases</h2>
        </div>
        <div className="grid-cols-3 pb-9 flex gap-5 justify-between items-center">
          <div className="col-span-1 drop-shadow-xl bg-white group-hover:h-[529px] border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag1}
                alt="new-image"
              />
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[368px] h-[287px] object-cover rounded-lg"
                src={news1}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium">1000000 KRW</span>
            </div>

            {/* Button (Initially Hidden) */}
            <div className="mt-5 m-3 flex items-center justify-center transition-all duration-300 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              <button className="bg-[#F57520] flex items-center justify-center gap-4 px-4 w-[368px] h-[57px] rounded-lg text-white text-xl hover:bg-[#E1610C]">
                <LuMousePointerClick className="text-gray-200 text-lg" />
                <Link to="/mountainbikes">See In Detail...</Link>
              </button>
            </div>
          </div>

          <div className="col-span-1 drop-shadow-xl bg-white border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag1}
                alt="new-image"
              />
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[368px] h-[287px] object-cover rounded-lg"
                src={news2}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium">1000000 KRW</span>
            </div>

            {/* Button (Initially Hidden) */}
            <div className="mt-5 m-3 flex items-center justify-center transition-all duration-300 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              <button className="bg-[#F57520] flex items-center justify-center gap-4 px-4 w-[368px] h-[57px] rounded-lg text-white text-xl hover:bg-[#E1610C]">
                <LuMousePointerClick className="text-gray-200 text-lg" />
                <Link to="/mountainbikes">See In Detail...</Link>
              </button>
            </div>
          </div>
          <div className="col-span-1 drop-shadow-xl bg-white border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-between">
              <img
                className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                src={flag2}
                alt="new-image"
              />
              <p className="text-md text-green-600 mr-4 text-right py-2">
                In Store
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[368px] h-[287px] object-cover rounded-lg"
                src={news3}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Bianchi AQUILA L DURA ACE DI2 TEAM <br /> JUMBO 2021
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaWonSign className="text-gray-600 text-lg" />
              <span className="font-medium">1000000 KRW</span>
            </div>

            {/* Button (Initially Hidden) */}
            <div className="mt-5 m-3 flex items-center justify-center transition-all duration-300 opacity-0 scale-95 translate-y-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0">
              <button className="bg-[#F57520] flex items-center justify-center gap-4 px-4 w-[368px] h-[57px] rounded-lg text-white text-xl hover:bg-[#E1610C]">
                <LuMousePointerClick className="text-gray-200 text-lg" />
                <Link to="/mountainbikes">See In Detail...</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
