import Header2 from "./../../../public/images/wille.png";
import Header3 from "./../../../public/images/head2.png";
import Header4 from "./../../../public/images/trek.png";
import Header5 from "./../../../public/images/tacx.png";
import Header6 from "./../../../public/images/sram.png";
import Header7 from "./../../../public/images/shimano.png";
import Header8 from "./../../../public/images/topeak.png";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
type Props = {};

const Workshop = (props: Props) => {
  return (
    <div>
      <div
        className="relative h-80 w-full bg-cover bg-left"
        style={{ backgroundImage: "url('/Workshop/work.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 container">
          {/* Breadcrumb */}
          <div className="py-10">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink className="text-white" href="/">
                    HOME
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-orange-600">
                    BICYCLE WORKSHOP
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-white font-bold text-5xl my-20 font-sans">
              BICYCLE WORKSHOP
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-[#2E2E2E]">
        <div className="container">
          <div className="grid grid-cols-7 gap-5 py-10">
            <div className="col-span-3">
              <p className="text-gray-200 text-sm">
                If you bought a bicycle from our store, you don’t have to worry
                about setup and inspection, as we take care of it as part of the
                pre-sale preparation. However, if you've been riding for a
                season and your trusty steed looks and feels worn out, we’ll be
                happy to bring it back to top condition. Our bike workshop
                operates daily and provides not only regular maintenance but
                also repairs of any complexity.
              </p>
            </div>
            <div className="col-span-4">
              <div className="">
                <p className="text-gray-200 text-sm">
                  Excellent equipment and experienced specialists ensure the
                  shortest possible repair time. No matter the breakdown, our
                  large stock of components and spare parts allows us to quickly
                  restore your bike’s functionality. We service mountain bikes,
                  road bikes, and city bikes.
                  <br />
                  <br />
                  As professional cyclists, our specialists quickly and
                  accurately identify any issues and offer the most effective
                  repair solutions. Your bike will be back on the road in no
                  time!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <h1 className="text-black font-bold text-4xl my-20 font-sans">
            COST OF BASIC SERVICES
          </h1>
        </div>
        <div className="grid grid-cols-2 my-4 gap-4">
          <div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Diagnosis</p>
              <p className="text-gray-600 text-md m-4">Foe free</p>
            </div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Technical service</p>
              <p className="text-gray-600 text-md m-4">25 000 KRW</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Washing</p>
              <p className="text-gray-600 text-md m-4">15 000 KRW</p>
            </div>
          </div>
          <div>
            <div className="flex bg-gray-100 justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">
                Comprehensive tech.about service
              </p>
              <p className="text-gray-600 text-md m-4">50 000 KRW</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-gray-600 text-md m-4">Individual assembly</p>
              <p className="text-gray-600 text-md m-4">50 000 - 90 000 KRW</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="text-black font-semibold text-4xl my-20 font-sans">
          ADDITIONAL SERVICES
        </h1>
        <div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-orange-400 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  Drive repair
                </AccordionTrigger>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Shortening the fork stem
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Install a disposable anchor
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Anchor dismanting
                    </p>
                    <p className="text-gray-600 text-md m-2">80 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the air fork
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Single crown fork remove/install
                    </p>
                    <p className="text-gray-600 text-md m-2">50 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the rear shock absorber
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-orange-400 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  Steering
                </AccordionTrigger>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Shortening the fork stem
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Install a disposable anchor
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Anchor dismanting
                    </p>
                    <p className="text-gray-600 text-md m-2">80 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the air fork
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Single crown fork remove/install
                    </p>
                    <p className="text-gray-600 text-md m-2">50 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the rear shock absorber
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-orange-400 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  Wheels
                </AccordionTrigger>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Shortening the fork stem
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Install a disposable anchor
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Anchor dismanting
                    </p>
                    <p className="text-gray-600 text-md m-2">80 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the air fork
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Single crown fork remove/install
                    </p>
                    <p className="text-gray-600 text-md m-2">50 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the rear shock absorber
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-orange-400 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  Frame
                </AccordionTrigger>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Shortening the fork stem
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Install a disposable anchor
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Anchor dismanting
                    </p>
                    <p className="text-gray-600 text-md m-2">80 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the air fork
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Single crown fork remove/install
                    </p>
                    <p className="text-gray-600 text-md m-2">50 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the rear shock absorber
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-orange-400 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  Fork
                </AccordionTrigger>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Shortening the fork stem
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Install a disposable anchor
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Anchor dismanting
                    </p>
                    <p className="text-gray-600 text-md m-2">80 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the air fork
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Single crown fork remove/install
                    </p>
                    <p className="text-gray-600 text-md m-2">50 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the rear shock absorber
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full my-3 mx-auto ">
            <Accordion type="multiple">
              <AccordionItem
                value="item-2 "
                className="  bg-orange-400 rounded-lg"
              >
                <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                  Additional equipment (accessories)
                </AccordionTrigger>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Shortening the fork stem
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Install a disposable anchor
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Anchor dismanting
                    </p>
                    <p className="text-gray-600 text-md m-2">80 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the air fork
                    </p>
                    <p className="text-gray-600 text-md m-2">60 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Single crown fork remove/install
                    </p>
                    <p className="text-gray-600 text-md m-2">50 000 KRW</p>
                  </div>
                </AccordionContent>
                <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                  <div className="flex w-full justify-between items-center gap-2">
                    <p className="text-gray-600 text-md m-2">
                      Pumping up the rear shock absorber
                    </p>
                    <p className="text-gray-600 text-md m-2">30 000 KRW</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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

export default Workshop;
