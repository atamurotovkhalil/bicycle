import { FaDollarSign } from "react-icons/fa6";
import Img1 from "./../../../public/Equipment/Img1.png";
import Img2 from "./../../../public/Equipment/Img2.png";
import Img3 from "./../../../public/Equipment/Img3.png";
import { Link } from "react-router";

const Equipment = () => {
  return (
    <div className=" bg-gray-100">
      <div className="container">
        <div>
          <h1 className="text-black font-bold text-[48px] my-20 font-sans">
            EQUIPMENT
          </h1>
        </div>
        <div className="grid-cols-3 pb-9 gap-10 flex justify-end items-center">
          <div className="col-span-1 drop-shadow-xl bg-white group-hover:h-[529px] border rounded-xl group relative">
            <div className="flex items-center justify-end">
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            <div className="mt-4 mx-3">
              <img
                className="w-[368px] h-[287px] scale-75 object-cover rounded-lg"
                src={Img1}
                alt="new-image"
              />
            </div>

            <p className="mt-4 mx-3 font-semibold">
              Bianchi ARCADEX GRX600 <br /> 40 Blue 2022
            </p>

            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaDollarSign className="text-gray-600 text-lg" />
              <span className="font-medium">890 USD</span>
            </div>
          </div>

          <div className="col-span-1 drop-shadow-xl bg-white border rounded-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-end">
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[368px] h-[287px]  object-cover rounded-lg"
                src={Img2}
                alt="new-image"
              />
            </div>

            {/* Title */}
            <p className="mt-4 mx-3 font-semibold">
              Trek Verve 1 Disc Low Step Era <br />
              White HYBRID 2022
            </p>

            {/* Price */}
            <div className="mt-3 mx-3 flex items-center gap-3">
              <FaDollarSign className="text-gray-600 text-lg" />
              <span className="font-medium">900 USD</span>
            </div>
          </div>
          <div className="col-span-1 drop-shadow-xl bg-white border rounded-l-xl group relative">
            {/* Top Section */}
            <div className="flex items-center justify-end">
              <p className="text-md text-red-600 mr-4 text-right py-2">
                Sold Out
              </p>
            </div>

            {/* Main Image */}
            <div className="mt-4 mx-3">
              <img
                className="w-[368px] h-[287px] object-cover rounded-lg"
                src={Img3}
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
              <span className="font-medium">1180 USD</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button className="text-black  my-4 font-sans">
            <Link to="/frame-and-forks">See more...</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
