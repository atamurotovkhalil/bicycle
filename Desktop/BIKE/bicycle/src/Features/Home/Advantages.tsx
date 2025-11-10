import { Link } from "react-router";
import Adv from "./../../../public/Advantages/Adv1.png";

const Advantages = () => {
  return (
    <div>
      <div>
        <div className="container">
          <h1 className="text-black font-bold text-[48px] my-20 font-sans">
            ADVANTAGES
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img alt={"Hi there"} className="w-[100%] rounded-r-2xl h-[550px]" src={Adv} />
          </div>
          <div>
            <div className="grid grid-cols-2">
              <div className="col-span-1">
                <div className=" m-2 p-7 bg-orange-500 border rounded-xl">
                  <div className="flex justify-around items-center">
                    <p className="text-white text-[20px]">FREE SHIPPING</p>
                  </div>
                  <div>
                    <p className="text-[12px] m-6 text-gray-300 ">
                      It is a long established fact that <br />
                      a reader will be distracted by the <br />
                      the readable content of
                    </p>
                    <button className="  rounded-sm  text-gray-900 text-xl">
                      <Link
                      to='/payment-delivery'
                      >
                      In Detail...
                      </Link>
                    </button>
                  </div>
                </div>
                <div className=" m-2 p-7  bg-orange-600 border rounded-xl">
                  <div className="flex justify-around items-center">
                    <p className="text-white text-[20px]">
                      EXCHANGE AND RETURN
                    </p>
                  </div>
                  <div>
                    <p className="text-[12px] m-6 text-gray-300 ">
                      It is a long established fact that <br />
                      a reader will be distracted by the <br />
                      the readable content of
                    </p>
                  </div>
                  <button className="  rounded-sm  text-gray-900 text-xl">
                  <Link
                      to='/agreement'
                      >
                      In Detail...
                      </Link>
                  </button>
                </div>
              </div>
              <div className="col-span-1  ">
                <div className=" m-2 p-7 bg-orange-500 border rounded-xl">
                  <div className="flex justify-around items-center">
                    <p className="text-white text-[20px]">ADDITIONAL SERVICE</p>
                  </div>
                  <div>
                    <p className="text-[12px] m-5 text-gray-300 ">
                      It is a long established fact that <br />
                      a reader will be distracted by the <br />
                      the readable content of
                    </p>
                  </div>
                  <button className="  rounded-sm  text-gray-900 text-xl">
                  <Link
                      to='/blog'
                      >
                      In Detail...
                      </Link>
                  </button>
                </div>
                <div className=" m-2 p-8  bg-orange-600 border rounded-xl">
                  <div className="flex justify-around items-center">
                    <p className="text-white text-[20px]">ONLINE PAYMENT</p>
                  </div>
                  <div>
                    <p className="text-[12px] m-6 text-gray-300 ">
                      It is a long established fact that <br />
                      a reader will be distracted by the <br />
                      the readable content of
                    </p>
                  </div>
                  <button className="  rounded-sm  text-gray-900 text-xl">
                  <Link
                      to='/storage'
                      >
                      In Detail...
                      </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[500px] rounded-l-2xl bg-black h-[550px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
