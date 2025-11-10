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
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/Components/UI/breadcrumb"; // Ensure the correct path
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/Components/UI/accordion";
import {Link} from "react-router";

const Contact = () => {
  return (
    <div>
      <div
        className="relative h-80 w-full bg-cover bg-left"
        style={{ backgroundImage: "url('/Contacts/bg.jpeg')" }}
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
                    CONTACT
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Title */}
          <div>
            <h1 className="text-white font-bold text-5xl my-20 font-sans">
              CONTACT
            </h1>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div
        className="h-80 w-full bg-left relative"
        style={{ backgroundImage: "url('/Contact/map.png')" }}
      >
        <div className="flex justify-center items-center gap-3 py-10">
          <img
            className="w-20 h-20 relative z-20"
            src="/Contact/Vector.png"
            alt="contact-icon"
          />
        </div>
      </div>
      <div className="container">
        <div className="grid my-8 grid-cols-2">
          <div>
            <h2 className="text-xl my-3 font-semibold ">Store address:</h2>
            <p className="my-3">c. Busan, st. Gimhae, ap. 45</p>
            <h2 className="text-xl my-3 font-semibold ">Working hours:</h2>
            <p className="my-3">Monday, Sunday from 10:00 to 20:00</p>
            <p className="my-3">NO DAYS OFF</p>
            <h2 className="text-xl my-3 font-semibold ">Phone:</h2>
            <p className="my-3">
              +82 10-1234-5678
              <br />
              +82 10-8765-4321
            </p>
            <h2 className="text-xl my-3 font-semibold ">E-mail:</h2>
            <p className="my-3">
              info@example.com
              <br />
              support@example.com
              <br />
              sales@example.com
            </p>
          </div>
          <div>
            <h2 className="text-xl my-3 font-semibold ">Legal information:</h2>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Name:</h2>
              <p className="my-1">IP INTREBIN YOO DONG YUUN</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Tax payer ID number:</h2>
              <p className="my-1">8987 4453 6685</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">OGRN:</h2>
              <p className="my-1">1234 5677 8899</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Actual address:</h2>
              <p className="my-1 text-end">
                c. Busan, st. Gimhae, ap. 45
                <br />
                (Registered office: c. Seoul, st. Jungkook, 37)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1">Legal address:</h2>
              <p className="my-1 text-end">
                c. Busan, st. Gimhae, ap. 45
                <br />
                (Registered office: c. Seoul, st. Jungkook, 37)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Current account:</h2>
              <p className="my-1">9238746592837659876</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Bank:</h2>
              <p className="my-1 text-end">
                Bank of Korea (Kobe Branch)
                <br />
                (Account number: 12345678901234567890)
              </p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">Correspondent account:</h2>
              <p className="my-1">9238746592837659876</p>
            </div>
            <div className="flex justify-between items-center">
              <h2 className="text-md my-1 ">BIK:</h2>
              <p className="my-1 text-end">
                BK12345678901234567890
                <br />
                (Bank code: 123456)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-gradient-to-r from-[#F57520] to-[#e45300]">
        <div className="container">
          <div className="p-4">
            <h2 className="text-xl text-white font-bold mb-4">
              CONTACT US WITH
              <br />
              ANY QUESTIONS
            </h2>
            <div className="grid grid-cols-10 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="Name*"
                className="border-0 bg-slate-200 col-span-5  rounded-lg p-2  w-full"
                //onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name*"
                className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                //onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone*"
                className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                // onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail*"
                className="border-0 bg-slate-200 col-span-5 rounded-lg p-2  w-full"
                //onChange={handleChange}
              />
            </div>
            <textarea
              name="comment"
              placeholder="Comments for order*"
              className="border-0 bg-slate-200 my-2 h-28 rounded-lg   w-full"
              //onChange={handleChange}
            ></textarea>
            <button className="w-full bg-white hover:text-white hover:bg-black text-black py-3 rounded-lg font-bold">
              Confirm Order
            </button>
          </div>
        </div>
        <div
          className="w-full h-96 container bg-center  bg-cover"
          style={{ backgroundImage: "url('/Contacts/bg2.png')" }}
        ></div>
      </div>
      <div className="container">
        <div>
          <h2 className="text-2xl text-black font-semibold my-10">
            FREQUENTLY ASKED EUROPEAN QUESTIONS
          </h2>
        </div>
        <div className="w-[70%] my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg bg-orange-400 border-0 px-3 ">
                See more...
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white p-3 justify-start gap-2 text-[12px]">
                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper
                turpis enim natoque tempus a malesuada suspendisse iaculis
                adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a
                scelerisque id parturient ullamcorper ullamcorper class ad
                consectetur tristique et.
                <br />
                <br />
                Hendrerit mollis facilisi odio a montes scelerisque a
                scelerisque justo a praesent conubia aenean mi tempor.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[70%] my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                Will I receive the same item as in the picture?
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white p-3 justify-start gap-2 text-[12px]">
                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper
                turpis enim natoque tempus a malesuada suspendisse iaculis
                adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a
                scelerisque id parturient ullamcorper ullamcorper class ad
                consectetur tristique et.
                <br />
                <br />
                Hendrerit mollis facilisi odio a montes scelerisque a
                scelerisque justo a praesent conubia aenean mi tempor.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[70%] my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                How Can I return an item
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white p-3 justify-start gap-2 text-[12px]">
                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper
                turpis enim natoque tempus a malesuada suspendisse iaculis
                adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a
                scelerisque id parturient ullamcorper ullamcorper class ad
                consectetur tristique et.
                <br />
                <br />
                Hendrerit mollis facilisi odio a montes scelerisque a
                scelerisque justo a praesent conubia aenean mi tempor.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[70%] my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                Will you restock items marked as out of stock
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white p-3 justify-start gap-2 text-[12px]">
                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper
                turpis enim natoque tempus a malesuada suspendisse iaculis
                adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a
                scelerisque id parturient ullamcorper ullamcorper class ad
                consectetur tristique et.
                <br />
                <br />
                Hendrerit mollis facilisi odio a montes scelerisque a
                scelerisque justo a praesent conubia aenean mi tempor.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-[70%] my-3 mx-auto ">
          <Accordion type="multiple">
            <AccordionItem
              value="item-2 "
              className="  bg-orange-400 rounded-lg"
            >
              <AccordionTrigger className="rounded-lg  border-0 px-3 ">
                What types of delivery do you work with?
              </AccordionTrigger>
              <AccordionContent className="flex items-center bg-white p-3 justify-start gap-2 text-[12px]">
                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper
                turpis enim natoque tempus a malesuada suspendisse iaculis
                adipiscing himenaeos tincidunt.Tellus pharetra dis nostra urna a
                scelerisque id parturient ullamcorper ullamcorper class ad
                consectetur tristique et.
                <br />
                <br />
                Hendrerit mollis facilisi odio a montes scelerisque a
                scelerisque justo a praesent conubia aenean mi tempor.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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

export default Contact;
