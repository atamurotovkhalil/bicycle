import { GiCheckMark } from "react-icons/gi"; // Import GiCheckMark from react-icons/gi
import { usePopupStore } from "./PopupStore";
import { FaWonSign } from "react-icons/fa";
import { LuMousePointerClick } from "react-icons/lu";
type Props = {};

const Popup = (props: Props) => {
  const confirmedOrder = usePopupStore((state: any) => state.confirmedOrder);
  const popup = usePopupStore((state: any) => state.popup);
  const product = usePopupStore((state: any) => state.product);
  const closePopup = usePopupStore((state: any) => state.closePopup);
  const detailPopup = usePopupStore((state: any) => state.detailPopup);
  const closeDetail = usePopupStore((state: any) => state.closeDetail);
  return (
    <div>
      <div>
        {popup && (
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-primary/50 z-50
                backdrop-blur-xs"
          >
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    p-0  shadow-md bg-white/80  rounded-xl duration-200
                     w-[400px]  h-[400px]"
            >
              <div className="flex text-black w-full h-full items-center justify-center">
                <div className="mx-auto">
                  <GiCheckMark className="w-16 mx-auto  h-16" />
                  <h1 className="text-3xl text-center">
                    DONE!
                  </h1>
                  <p className="text-center m-3">
                    The customer is very happy to be followed. Everyone's
                    homework is pure flavor. The wretched ultricies of the diam,
                    but the easy ones, are now a bed for chocolate. Nisl
                    pulvinar adipscing turpis ultricies possuere nibh faucibus.
                  </p>
                  <div className="flex items-center justify-center">
                    <button
                      className="mt-4 px-8 py-2 text-white bg-primary hover:bg-primary-dark rounded-md"
                      onClick={() => {
                        closePopup();
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {detailPopup && (
          <div
            className="h-screen w-screen fixed top-0 left-0 bg-primary/50 z-50
                backdrop-blur-xs"
          >
            <div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    p-0  shadow-md bg-white/80  rounded-xl duration-200"
            >
              <div className="flex text-black w-full h-full items-center justify-center">
                <div className="mx-auto">
                  <li className=" hover:drop-shadow-xl bg-white group-hover:h-[529px] border rounded-xl group relative">
                    <div className="flex items-center justify-between">
                      <p className="text-md text-green-600 m-4 px-3 bg-gray-100 rounded-lg text-right py-2">
                        {product?.country}
                      </p>
                      <p className="text-md text-green-600 m-4 px-3 bg-gray-100 rounded-lg text-right py-2">
                        Part: {product?.part}
                      </p>
                    </div>
                    <div className="m-3">
                      {/* Main Image */}
                      <div className="flex items-center justify-center">
                        <img
                          className="w-[320px] h-[220px] object-contain rounded-lg"
                          src={product?.imageUrl}
                          alt="new-image"
                        />
                      </div>
                      <p className="text-md text-green-600 m-4 px-3 bg-gray-100 rounded-lg text-left py-2">
                        Manufacturer: {product?.manufacturer}
                      </p>
                      <p className="text-md text-green-600 m-4 px-3 bg-gray-100 rounded-lg text-left py-2">
                        Types: : {product?.types}
                      </p>
                      {/* Title */}
                      <p className="mt-4 mx-3">{product?.description}</p>

                      {/* Price */}
                      <div className="mt-3 mx-3 flex items-center justify-around gap-3">
                        <FaWonSign className="text-gray-600 text-lg" />
                        <span className="font-medium">889 000 KRW</span>
                        <button
                          onClick={() => confirmedOrder()}
                          className="bg-[#F57520] flex items-center justify-center gap-1 w-[150px] p-1  rounded-lg text-black text-md hover:bg-[#E1610C]"
                        >
                          <LuMousePointerClick className="text-gray-200 text-sm" />
                          Place order
                        </button>
                      </div>
                      <p className="text-md text-green-600 font-semibold m-4 px-3 bg-gray-100 rounded-lg text-left py-2">
                        Warranty: {product?.warranty}
                      </p>
                    </div>
                    <div className="flex items-center justify-center my-2">
                      <button
                        className="mt-4 px-8 py-2 text-white bg-orange-600 hover:bg-primary-dark rounded-md"
                        onClick={() => {
                          closeDetail();
                        }}
                      >
                        Close
                      </button>
                    </div>
                  </li>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
