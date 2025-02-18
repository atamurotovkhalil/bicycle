import { Link } from "react-router";
import vel1 from "./../../../public/Latest/vel1.png";
import vel2 from "./../../../public/Latest/vel2.png";
import vel3 from "./../../../public/Latest/vel3.png";
import vel4 from "./../../../public/Latest/vel4.png";

type Props = {};

const Latest = (props: Props) => {
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="text-black font-bold text-[48px] my-20 font-sans">
            LATEST REVIEWS
          </h1>
        </div>
        <div className="">
          <div className="grid-cols-3 pb-9 text-white flex gap-1 justify-end items-center">
            <div className="col-span-1 drop-shadow-xl bg-black group-hover:h-[529px] border rounded-xl group relative">
              {/* Top Section */}

              {/* Main Image */}
              <div className="">
                <img
                  className="w-[300px] h-[200px] object-cover rounded-lg"
                  src={vel1}
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
                <button className="hover:text-orange-600 font-medium">
                  See more...
                </button>
              </div>
            </div>

            <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
              {/* Top Section */}

              {/* Main Image */}
              <div className="">
                <img
                  className="w-[300px] h-[200px] object-cover rounded-lg"
                  src={vel2}
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
                <button className="hover:text-orange-600 font-medium">
                  <Link to="/mountainbikes">See more...</Link>
                </button>
              </div>
            </div>
            <div className="col-span-1 drop-shadow-xl bg-black border rounded-xl group relative">
              {/* Top Section */}

              {/* Main Image */}
              <div className="">
                <img
                  className="w-[300px] h-[200px] object-cover rounded-lg"
                  src={vel3}
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
                <button className="hover:text-orange-600 font-medium">
                  <Link to="/mountainbikes">See more...</Link>
                </button>
              </div>
            </div>
            <div className="col-span-1 drop-shadow-xl bg-black border rounded-l-xl group relative">
              {/* Top Section */}

              {/* Main Image */}
              <div className="">
                <img
                  className="w-[300px] h-[200px] object-cover rounded-lg"
                  src={vel4}
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
                <button className="hover:text-orange-600 font-medium">
                  <Link to="/mountainbikes">See more...</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;
