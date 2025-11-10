import {
  Breadcrumb,
  BreadcrumbItem,
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
import {Link} from "react-router";

const PaymentDelivery = () => {
  return (
    <div>
      <div>
        <div
          className="relative h-80 w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/Payment/img1.png')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="relative z-10 container">
            {/* Breadcrumb */}
            <div className="py-10">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <Link className="text-white" to="/">
                      HOME
                    </Link>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-orange-600">
                      DELIVERY AND PAYMENT
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Title */}
            <div>
              <h1 className="text-white font-bold text-5xl my-20 font-sans">
                DELIVERY AND PAYMENT
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <p className="text-black text-2xl my-20 font-sans">
            DELIVERY INFORMATION
          </p>
          <p className="text-md text-gray-500 my-10 font-sans">
            For the convenience of our customers, several delivery options are
            available. We offer delivery within Moscow and <br />
            the Moscow Region, delivery to other regions of Russia, and
            self-pickup. Any of these options can be selected when placing{" "}
            <br />
            an order through the website or with our operators.
          </p>
          <p className="text-base text-gray-500  my-5">
            Bicycles and bike trainers are delivered fully assembled and
            adjusted.
          </p>
          <p>
            Our operators will answer any questions regarding delivery rules and
            costs. <span className="text-orange-600">070-1234-5678</span>
          </p>
        </div>
      </div>
      <div className="container">
        <div className="w-full my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                Delivery within Moscow, inside the Moscow Ring Road (MKAD)
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Orders with a value of up to 1000 USD
                  </p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    "Orders with a value of over 1000 USD"
                  </p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Delivery of oversized goods is calculated separately.
                  </p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    The delivery time is no more than 2 days from the moment the
                    order is confirmed. For delivery within Moscow, payment for
                    the goods can be made to the courier.
                  </p>
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
                Delivery within the Moscow Region
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">50 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Delivery to other regions of Russia
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                The store — pickup point in Moscow
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div>
          <div>
            <p className="text-black text-2xl my-20 font-sans">
              PAYMENT INFORMATION
            </p>
            <p className="text-md text-gray-500 my-10 font-sans">
              "For the convenience of our customers, several payment methods are
              available. Below, you can <br />
              review the details and choose the most suitable option. Any of
              these methods can be selected when placing <br />
              an order through the cart or with our operators."
            </p>
          </div>
        </div>
        <div className="w-full my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                Cash payment
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Payment by bank card
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Payment through the website
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Security of electronic payments
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Installment payment with the 'Halva' card
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">8000 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Payment for orders upon delivery within Russia
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
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
                Purchase on credit
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Shortening the fork stem
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Install a disposable anchor
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">Anchor dismanting</p>
                  <p className="text-gray-600 text-md m-2">800 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the air fork
                  </p>
                  <p className="text-gray-600 text-md m-2">600 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Single crown fork remove/install
                  </p>
                  <p className="text-gray-600 text-md m-2">500 USD</p>
                </div>
              </AccordionContent>
              <AccordionContent className="flex items-center bg-white  justify-start gap-2 text-[12px]">
                <div className="flex w-full justify-between items-center gap-2">
                  <p className="text-gray-600 text-md m-2">
                    Pumping up the rear shock absorber
                  </p>
                  <p className="text-gray-600 text-md m-2">300 USD</p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default PaymentDelivery;
