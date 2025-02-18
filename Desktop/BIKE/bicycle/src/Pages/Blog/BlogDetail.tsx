import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
type Props = {};

const BlogDetail = (props: Props) => {
  return (
    <div>
      <div>
        <div>
          <div className="relative h-80 w-full bg-cover bg-center">
            <div className="absolute inset-0 bg-white"></div>

            <div className="relative z-10 container">
              {/* Breadcrumb */}
              <div className="py-10">
                <Breadcrumb>
                  <BreadcrumbList>
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-black" href="/">
                        HOME
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbLink className="text-black" href="/">
                        BLOG
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="text-orange-600">
                        Pinarello Dogma F develops the next-generation carbon
                        road bike while maintaining the option for rim brakes!
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </BreadcrumbList>
                </Breadcrumb>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-black font-bold text-5xl my-20 font-sans">
                  PINARELLO DOGMA F DEVELOPS THE NEXT-GENERATION CARBON ROAD
                  BIKE WHILE MAINTAINING THE OPTION FOR RIM BRAKES!
                </h1>
              </div>
            </div>
          </div>
          <div className="container my-8">
            <img
              className="w-full h-[25rem] rounded-xl object-cover object-center"
              src="/Blog/image1.png"
              alt=""
            />
          </div>
          <div className="container">
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              "The new Dogma F from Pinarello is a lighter, more responsive, and
              aerodynamic version of their latest road racing bike, the F12. And
              while the overall asymmetric aerodynamic profile remains
              distinctly familiar with the decade-long curves of the Pinarello
              Dogma, the biggest surprise might be that it’s not just about disc
              brakes. While many bike manufacturers now exclusively use disc
              brakes, Pinarello professionals continue to win Grand Tours on
              bikes with rim brakes, so the Dogma F continues to evolve with
              both rim and disc brake options..."
            </p>
          </div>
        </div>

        <div className="container border-b-2">
          <div>
            <p className="text-gray-600 text-xl font-semibold mb-10 leading-relaxed">
              2022 Pinarello Dogma F Curved <br /> Aerodynamic Carbon Road
              Racing Bike
            </p>
          </div>
          <div>
            <div className="grid grid-cols-3 my-5">
              <div className="col-span-1">
                <img
                  src={"/Blog/image2.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[21rem] rounded-xl"
                />
              </div>
              <div className="col-span-2 ">
                <div className="col-span-2 p-3 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    "The shape of the new Pinarello Dogma F aerodynamic road
                    bike doesn't differ much from the previous Dogma, except for
                    a flatter top and slightly lower seat stays. But
                    interestingly, the model designation has been changed from
                    the latest Dogma F12 to this new seventh-generation Dogma F,
                    which, according to Pinarello, simplifies the connection
                    between the bikes and their long history (since 2000) and
                    their 'undeniable' superiority extending into the future."
                    <br />
                    <br />
                    "This is also a hint at the versatility of the new bike.
                    While previous generations had versions for climbers or
                    sprinters, this new Pinarello Dogma F is designed to be a
                    balanced all-round racing bike."
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-xl font-semibold mb-10 leading-relaxed">
                So what new?
              </p>
            </div>
            <div className="grid grid-cols-3 my-5">
              <div className="col-span-2 ">
                <div className="col-span-2 p-3 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    "The shape of the new Pinarello Dogma F aerodynamic road
                    bike doesn't differ much from the previous Dogma, except for
                    a flatter top and slightly lower seat stays. But
                    interestingly, the model designation has been changed from
                    the latest Dogma F12 to this new seventh-generation Dogma F,
                    which, according to Pinarello, simplifies the connection
                    between the bikes and their long history (since 2000) and
                    their 'undeniable' superiority extending into the future."
                    <br />
                    <br />
                    "This is also a hint at the versatility of the new bike.
                    While previous generations had versions for climbers or
                    sprinters, this new Pinarello Dogma F is designed to be a
                    balanced all-round racing bike."
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src={"/Blog/image3.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[21rem] rounded-xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 my-5">
              <div className="col-span-1 my-auto">
                <img
                  src={"/Blog/image4.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[21rem] rounded-xl"
                />
              </div>
              <div className="col-span-1 ">
                <div className="col-span-2 p-3 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    Slightly lowered seat stays and their smooth transition to
                    the seat tube helped improve aerodynamics while also adding
                    comfort to the saddle by absorbing vibrations.
                    <br />
                    <br />
                    The updated UCI regulations also allowed Pinarello to make
                    the new seat tube and seat post of the Dogma F narrower, as
                    well as slightly refine the down tube section to further
                    reduce drag.
                    <br />
                    <br />
                    The sleek Onda fork is also completely new in both rim and
                    disc brake versions, designed for reduced wind resistance
                    and based on the aerodynamic leg profile of the Bolide fork.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-xl font-semibold mb-10 leading-relaxed">
                How much faster is it really?
              </p>
            </div>
            <div className="grid grid-cols-3 my-5">
              <div className="col-span-2 my-auto">
                <div className="col-span-2 p-3 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    Pinarello claims the new disc brake bike is 4.8% more
                    aerodynamic than the previous disc-brake F12.
                    <br />
                    <br />
                    The rim brake version is also slightly faster, with
                    aerodynamics improved by 3.2% compared to the rim-brake F12.
                    These are relatively minor updates, but they still translate
                    to savings of up to 2.6W at a race pace of 50 km/h or even
                    1.3W at a more manageable 40 km/h for the rest of us.
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src={"/Blog/image5.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[21rem] rounded-xl"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-xl font-semibold mb-10 leading-relaxed">
                Technical details
              </p>
            </div>
            <div className="grid grid-cols-3 my-5">
              <div className="col-span-1 my-auto">
                <img
                  src={"/Blog/image6.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[15rem] rounded-xl"
                />
              </div>
              <div className="col-span-2 my-auto">
                <div className="col-span-2 p-3 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    Made from the same Japanese Toraya T1100 1K Dream carbon
                    fiber with Nanoalloy technology, the bikes with electronic
                    shifting and disc brakes are UCI-approved and feature the
                    improved asymmetrical aerodynamic Dogma F12 frame of the
                    latest generation, with fully internal cable routing, fork
                    axle covers, a smooth yet still externally hidden seatpost
                    clamp, multi-position bottle cage mounts on the seat tube,
                    Italian-threaded bottom bracket, a 1.5-inch insertable
                    straight steerer tube, flat discs, and 12mm thru-axles (disc
                    brake model), along with 28+mm tire clearance on modern wide
                    rims.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-600 text-xl font-semibold mb-10 leading-relaxed">
                2022 Pinarello Dogma F – prices, options, and availability
              </p>
            </div>
            <div className="grid grid-cols-3 my-5">
              <div className="col-span-2 ">
                <div className="col-span-2 p-3 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    As with previous generations, the new 2022 Dogma will still
                    be available in both disc brake Pinarello Dogma F models and
                    rim brake Dogma F models, though actual delivery to
                    consumers is likely to take at least a couple more months.
                    Pinarello Dogma F 2022 frame sets are sold at a retail price
                    of €5770, regardless of whether you choose rim or disc
                    brakes.
                    <br />
                    <br />
                    Both are available with high-end electronic drivetrains from
                    Shimano, SRAM, and Campagnolo, as well as carbon wheelsets
                    available from local Pinarello dealers. The price for a
                    complete bike starts at €12,000 with rim brakes, but can
                    quickly rise to €15,000 for a disc brake bike with
                    electronic shifting and premium carbon wheels.
                  </p>
                </div>
              </div>
              <div className="col-span-1 my-auto">
                <img
                  src={"/Blog/image7.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[21rem] rounded-xl"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 my-5">
              <div className="col-span-1">
                <img
                  src={"/Blog/image8.png"}
                  alt="Warranty Service"
                  className="object-cover w-full h-[30rem] rounded-xl"
                />
              </div>
              <div className="col-span-1 my-auto">
                <div className="col-span-2 px-10 py-2 text-[20px]    rounded-xl ">
                  <p className="text-gray-600 m-3 text-[18px]">
                    The new Dogma F is available in 11 frame sizes, 16
                    handlebar/stem sizes, and 2 seatpost offsets to fit any
                    rider. Three standard paint schemes are available: Plutonium
                    Flash with a black-to-gray gradient, Eruption Red with a
                    black-to-red gradient, and a completely black-on-black
                    design.
                    <br />
                    <br />
                    Interestingly, the only complete bikes we've seen with
                    Shimano groupsets are the Grenadier team edition bikes,
                    which feature only rim brakes and will debut in the Tour de
                    France races this coming weekend. We'll take this as another
                    hint that new Dura-Ace groupsets should be coming soon...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex items-center justify-start m-10">
            <div className="text-center font-semibold text-xl">
              Share:
            </div>
            <div className=" flex justify-start items-center gap-5">
              <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer">
                <FaFacebook className="text-xl text-black" />
              </div>
              <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer">
                <FaTwitter className="text-xl text-black" />
              </div>
              <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer">
                <FaPinterest className="text-xl text-black" />
              </div>
              <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer">
                <FaInstagramSquare className="text-xl text-black" />
              </div>
              <div className="flex items-center justify-center rounded-full w-10 h-10 cursor-pointer">
                <FaYoutube className="text-xl text-black" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
