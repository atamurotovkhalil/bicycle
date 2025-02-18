import { Link } from "react-router";
import Vec1 from "./../../../public/Mountain/Vector1.png";
import Vec2 from "./../../../public/Mountain/Vector2.png";
import Vec3 from "./../../../public/Mountain/Vector3.1.png";
import Vec4 from "./../../../public/Mountain/Vector4.png";
import Vel1 from "./../../../public/Mountain/vel1.jpeg";
type Props = {};

const Mountain = (props: Props) => {
  return (
    <div className="container">
      <div>
        <div>
          <p className="text-black text-[64px] font-sans">
            MOUNTAIN <br />
            BIKES
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-12">
        <div className="col-span-1">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <div className="py-10 m-2 bg-black border rounded-xl">
                <div className="flex justify-around items-center">
                  <p className="text-white text-[20px]">Frame</p>
                  <img className="h-12" src={Vec1} alt="mountain-vector" />
                </div>
                <div>
                  <p className="text-[12px] m-6 text-gray-300 ">
                    It is a long established fact that <br />
                    a reader will be distracted by the <br />
                    the readable content of
                  </p>
                </div>
              </div>
              <div className="py-10 m-2 bg-black border rounded-xl">
                <div className="flex justify-around items-center">
                  <p className="text-white text-[20px]">On Board Computer</p>
                  <img className="h-12" src={Vec2} alt="mountain-vector" />
                </div>
                <div>
                  <p className="text-[12px] m-6 text-gray-300 ">
                    It is a long established fact that <br />
                    a reader will be distracted by the <br />
                    the readable content of
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1  ">
              <div className="py-10 m-2 bg-black border rounded-xl">
                <div className="flex justify-around items-center">
                  <p className="text-white text-[20px]">Transmission</p>
                  <img className="h-12" src={Vec3} alt="mountain-vector" />
                </div>
                <div>
                  <p className="text-[12px] m-6 text-gray-300 ">
                    It is a long established fact that <br />
                    a reader will be distracted by the <br />
                    the readable content of
                  </p>
                </div>
              </div>
              <div className="py-10 m-2 bg-black border rounded-xl">
                <div className="flex justify-around items-center">
                  <p className="text-white text-[20px]">Equipment</p>
                  <img className="h-12" src={Vec4} alt="mountain-vector" />
                </div>
                <div>
                  <p className="text-[12px] m-6 text-gray-300 ">
                    It is a long established fact that <br />
                    a reader will be distracted by the <br />
                    the readable content of
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 m-2">
          <div>
            <img
              className=" rounded-2xl h-80 object-cover"
              src={Vel1}
              alt="mountain-vector"
            />
          </div>
          <div className="my-8">
            <p className="text-[12px]">
              Mountain bikes, despite their name, are often and actively used in
              <br />
              mountainous regions, where the terrain is steep and the terrain{" "}
              <br />
              can be quite dangerous.
            </p>
          </div>
          <div className="my-8">
            <button className=" bg-[#F57520] px-4 rounded-md hover:bg-[#E1610C] text-white text-xl">
            <Link
                to='/guarantees'
                >Catalog</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mountain;
