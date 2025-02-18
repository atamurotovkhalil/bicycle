import map1 from "./../../../public/Contact/map.png";
import vector from "./../../../public/Contact/Vector.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaRegMessage } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
type Props = {};

const Contact = (props: Props) => {
  return (
    <div>
      <div className="container">
        <h1 className="text-black font-bold text-[48px] my-20 font-sans">
          CONTACT
        </h1>
      </div>
      <div
        style={{ backgroundImage: `url(${map1})` }}
        className="h-96 w-full  bg-black  to-black   bg-left"
      >
        <div className="flex justify-center text-2xl z-40 items-center text-orange-500 gap-3 py-10">
         
          <img
            className="w-40 h-40 relative z-20"
            src={vector}
            alt="contact-image"
          />
        </div>
      </div>
      <div className="container">
        <div className="m-6">
          <div className="grid grid-cols-4 gap-x-10 ">
            <div className="col-span-1">
              <div className="">
                <FaRegMessage className="text-5xl  mx-auto text-black" />
                <h3 className="text-2xl text-black text-center font-bold">
                  Email:
                </h3>

                <p className="text-sm text-center">info@cento10.com</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="">
                <IoIosPhonePortrait className="text-5xl mx-auto text-black" />
                <h3 className="text-2xl text-black text-center font-bold">
                  Phone:
                </h3>

                <p className="text-sm text-center">+123 456 7890</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="">
                <CiCalendar className="text-5xl mx-auto text-black" />
                <h3 className="text-2xl text-black font-bold text-center">
                  No days off:
                </h3>

                <p className="text-sm text-center">
                    Monday - Sunday, 9 AM - 5 PM
  
                </p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="">
                <CiLocationOn className="text-5xl mx-auto text-black" />
                <h3 className="text-2xl text-black font-bold text-center">
                  Address:
                </h3>

                <p className="text-sm text-center">
                  123 Main Street, City, State, Zip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
