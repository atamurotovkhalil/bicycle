import Good1 from "./../../../public/Good/Good1.png";
import { FaDollarSign } from "react-icons/fa6";
import news1 from "./../../../public/Good/vel1.png";
import news2 from "./../../../public/Good/vel2.png";
import news3 from "./../../../public/Good/vel3.png";
import flag1 from "./../../../public/images/italyflag.png";
import flag2 from "./../../../public/images/americaflag.png";

const Good = () => {
  return (
    <div className="bg-black">
      <div
        className="bg-black w-[full] h-[650px]"
        style={{ backgroundImage: `url(${Good1})` }}
      >
        <div className="container">
          <div className="absolute">
            <div>
              <h1 className="text-white text-[64px] font-sans">
                BEST MODELS <br />
                FOR WINTER <br /> RIDE
              </h1>
            </div>
          </div>
        </div>
        <div className="relative top-44">
          <div className="grid-cols-3 pb-9 flex gap-1 justify-end items-center">
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
                  className="w-[320px] h-[220px] object-cover rounded-lg"
                  src={news1}
                  alt="new-image"
                />
              </div>

              {/* Title */}
              <p className="mt-4 mx-3 font-semibold">
                Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
              </p>

              {/* Price */}
              <div className="mt-3 mx-3 flex items-center gap-3">
                <FaDollarSign className="text-gray-600 text-lg" />
                <span className="font-medium">800 USD</span>
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
                <p className="text-md text-red-600 mr-4 text-right py-2">
                  Sold Out
                </p>
              </div>

              {/* Main Image */}
              <div className="mt-4 mx-3">
                <img
                  className="w-[320px] h-[220px] object-cover rounded-lg"
                  src={news2}
                  alt="new-image"
                />
              </div>

              {/* Title */}
              <p className="mt-4 mx-3 font-semibold">
                Trek Verve 1 Disc Low Step Era <br />
                White HYBD 2022
              </p>

              {/* Price */}
              <div className="mt-3 mx-3 flex items-center gap-3">
                <FaDollarSign className="text-gray-600 text-lg" />
                <span className="font-medium">9 000 USD</span>
              </div>
            </div>
            <div className="col-span-1 drop-shadow-xl bg-white border rounded-l-xl group relative">
              {/* Top Section */}
              <div className="flex items-center justify-between">
                <img
                  className="w-[88px] h-[46px] rounded-tl-xl object-cover border"
                  src={flag2}
                  alt="new-image"
                />
                <p className="text-md text-red-600 mr-4 text-right py-2">
                  Sold Out
                </p>
              </div>

              {/* Main Image */}
              <div className="mt-4 mx-3">
                <img
                  className="w-[320px] h-[220px] object-cover rounded-lg"
                  src={news3}
                  alt="new-image"
                />
              </div>

              {/* Title */}
              <p className="mt-4 mx-3 font-semibold">
                Trek Dual Sport 1 Quicksilver
                <br /> Hybrid 2022
              </p>

              {/* Price */}
              <div className="mt-3 mx-3 flex items-center gap-3">
                <FaDollarSign className="text-gray-600 text-lg" />
                <span className="font-medium">1 100 USD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Good;
