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
type Props = {};

const Agreement = (props: Props) => {
  return (
    <div>
      <div className="container">
        <div className="py-10">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-gray-600" href="/">
                  HOME
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-orange-600">
                  USER AGREEMENT
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <h1 className="text-black font-bold text-[48px] my-20 font-sans">
          USER AGREEMENT
        </h1>
        <p className="my-3">
          Интернет-магазин «http://world-bike.ru», расположенный на доменном
          имени: www.world-bike.ru
        </p>
        <p className="my-3">
          "Sole Proprietor Netrebin Vladislav Vyacheslavovich, hereinafter
          referred to as the 'Seller,' publishes a Public Offer for the remote
          sale of Goods."
        </p>
        <div className="rounded-lg bg-gray-200 m-5 p-5">
          <div>
            <h2 className="text-black font-bold  my-6 font-sans">
              1. DEFINITION OF TERMS
            </h2>
            <p className="my-3 text-[14px]">
              "1.1. Public Offer (hereinafter referred to as the 'Offer') — a
              public proposal by the Seller, addressed to an indefinite number
              of persons, to enter into a distance sales contract (hereinafter
              referred to as the 'Contract') with the Seller on the terms
              outlined in this Offer, including all Attachments."
            </p>
            <p className="my-3 text-[14px]">
              "1.2. Order of Goods on the Online Store website — items selected
              by the Buyer from the range of Goods offered for sale when placing
              an order for the purchase of Goods on the Online Store website or
              through the Operator."
            </p>
          </div>
          <div>
            <h2 className="text-black font-bold  my-6 font-sans">
              2. GENERAL PROVISIONS
            </h2>
            <p className="my-3 text-[14px]">
              2.1. The Buyer’s order for Goods placed on the Online Store
              website means that the Buyer agrees to all the terms of this
              Offer.
            </p>
            <p className="my-3 text-[14px]">
              2.2. The administration of the Online Store website has the right
              to make changes to the Offer without notifying the Buyer.
            </p>
            <p className="my-3 text-[14px]">
              2.3. The validity period of the Offer is unlimited, unless
              otherwise specified on the Online Store website.
            </p>
            <p className="my-3 text-[14px]">
              2.4. The Seller provides the Buyer with complete and accurate
              information about the Goods, including details on the main
              consumer properties of the Goods, the place of manufacture, as
              well as information about the warranty period and shelf life of
              the Goods on the Online Store website, in the section
              http://world-bike.ru.
            </p>
          </div>
          <div>
            <h2 className="text-black font-bold  my-6 font-sans">
              3. PRICE OF GOODS
            </h2>
            <p className="my-3 text-[14px]">
              3.1. The price for each item of the Goods is indicated on the
              Online Store website.
            </p>
            <p className="my-3 text-[14px]">
              3.2. The Seller has the right to unilaterally change the price of
              any item of the Goods.
            </p>
            <p className="my-3 text-[14px]">
              3.3. In case of a price change for the ordered Goods, the Seller
              is obligated to inform the Buyer about the price change within
              five working days.
            </p>
            <p className="my-3 text-[14px]">
              3.4. The Buyer has the right to either confirm or cancel the Order
              for the purchase of Goods if the price has been changed by the
              Seller after the Order was placed.
            </p>
            <p className="my-3 text-[14px]">
              3.5. The Seller is not allowed to change the price of the Goods
              that have been paid for by the Buyer.
            </p>
            <p className="my-3 text-[14px]">
              3.6. The Seller indicates the cost of delivery of the Goods on the
              Online Store website or informs the Buyer during the order process
              through the Operator.
            </p>
            <p className="my-3 text-[14px]">
              3.7. The Buyer’s obligations to pay for the Goods are considered
              fulfilled from the moment the Seller receives the payment.
            </p>
            <p className="my-3 text-[14px]">
              3.8. Calculations between the Seller and the Buyer for the Goods
              are made using the methods specified on the website of the Online
              Store in the section http://world-bike.ru/pay/
            </p>
          </div>
          <div>
            <h2 className="text-black font-bold  my-6 font-sans">
              4. ORDER PLACEMENT
            </h2>
            <p className="my-3 text-[14px]">
              4.1. The Buyer places an order for the Product through the
              Operator by phone: +7 (495) 055-75-86 or via the online store
              website service at http://world-bike.ru/.
            </p>
            <div>
              <p className="my-3 text-[14px]">
                4.2. When registering on the online store website, the Buyer
                agrees to provide the following registration information:
              </p>
              <ol className="my-3 text-[14px]">
                <li className="my-3 text-[14px]">
                  * Last name, first name, and patronymic (if applicable) of the
                  Buyer or the specified person (recipient);
                </li>
                <li className="my-3 text-[14px]">
                  * The address to which the product should be delivered (if
                  delivery is to the Buyer’s address).
                </li>
                <li className="my-3 text-[14px]">* Email address.</li>
                <li className="my-3 text-[14px]">* Contact phone number.</li>
              </ol>
            </div>
          </div>
          <div className="my-6">
            <h1 className=" font-bold my-3">
              5. DELIVERY AND TRANSFER OF GOODS TO THE BUYER
            </h1>
            <p className="my-3 text-[14px]">
              5.1. The Seller provides the Buyer with delivery services of the
              Goods by one of the methods specified on the Online Store website.
            </p>
            <p className="my-3 text-[14px]">
              5.2. If the sales contract for the goods is concluded remotely
              (hereinafter referred to as the Contract) with the condition of
              delivery of the Goods to the Buyer, the Seller is obliged to
              deliver the Goods to the location specified by the Buyer within
              the time frame set by the Contract, and if the delivery location
              is not specified by the Buyer, then to the Buyer’s place of
              residence or registration.
            </p>
            <p className="my-3 text-[14px]">
              5.3. The Buyer specifies the delivery address when placing the
              Order for the purchase of the Goods.
            </p>
            <p className="my-3 text-[14px]">
              5.4. The delivery time of the Goods to the Buyer consists of the
              order processing time and the delivery time.
            </p>
            <p className="my-3 text-[14px]">
              5.5. The delivered Goods are handed over to the Buyer, and in the
              absence of the Buyer — to any person presenting a receipt or other
              document confirming the conclusion of the Contract or the
              arrangement of the Goods' delivery.
            </p>
            <p className="my-3 text-[14px]">
              5.6. Information about the Goods is provided to the Buyer in the
              technical documentation attached to the Goods, on the labels,
              through markings, or by other means accepted for specific types of
              goods.
            </p>
            <p className="my-3 text-[14px]">
              5.7. Information about the mandatory confirmation of the Goods'
              compliance is provided in the manner and by the methods
              established by the legislation of the Russian Federation on
              technical regulation, and includes information about the document
              number confirming such compliance, its validity period, and the
              organization that issued it.
            </p>

            <h2 className="font-bold my-6">6. RETURN, EXCHANGE OF GOODS</h2>
            <p className="my-3 text-[14px]">
              6.1. The Goods are accepted for return in case of warranty
              malfunctions or manufacturer defects within the warranty period
              specified by the manufacturer.
            </p>
            <p className="my-3 text-[14px]">
              6.2. After the expiration of the warranty service period for the
              product specified by the manufacturer on the official website, the
              goods are not accepted for warranty repair or exchange.
            </p>
            <p className="my-3 text-[14px]">
              6.3. Return or exchange of goods within 14 calendar days is
              carried out according to the rules described in the "Consumer
              Rights Protection Law, Article 25."
            </p>
            <p className="my-3 text-[14px]">
              6.4. The rules for returning goods under warranty or exchange: The
              Goods must be complete, corresponding to the description on the
              box, in clean condition, and accompanied by the receipt. The
              return of goods is carried out at the following address: Moscow,
              Moscow, Dovatora, 7/8, bldg. 1 (please inform in advance about
              your visit). Pickup of the goods by a courier within Moscow for
              warranty assessment or exchange is available at a cost of 600 RUB.
            </p>
            <p className="my-3 text-[14px]">
              6.5. Requests for the return or exchange of goods are made through
              the "Product Return" form.
            </p>

            <h2 className="font-bold my-6">
              7. SELLER DETAILS / LEGAL INFORMATION
            </h2>
            <p className="my-3 text-[14px]">
              Name: Individual Entrepreneur NETREBIN VLADISLAV VYACHESLAVOVICH
            </p>
            <p className="my-3 text-[14px]">TIN: 402573939444</p>
            <p className="my-3 text-[14px]">OGRN: 317402700004683</p>
            <p className="my-3 text-[14px]">
              Legal address: Moscow, Usacheva St., 33
            </p>
            <p className="my-3 text-[14px]">
              Actual address: Moscow, Dovatora, 7/8, bldg. 1
            </p>
            <p className="my-3 text-[14px]">
              Settlement account: 40802810800000085888
            </p>
            <p className="my-3 text-[14px]">Bank: JSC "TINKOFF BANK"</p>
            <p className="my-3 text-[14px]">
              Correspondent account: 30101810145250000974
            </p>
            <p className="my-3 text-[14px]">BIC: 044525974</p>
          </div>
          <div>
            <p className="text-[14px]">
              Carefully review the text of the public offer, and if you do not
              agree with any point of the offer, you have the right to refuse
              the purchase of Goods provided by the Seller and refrain from
              performing the actions specified in paragraph 2.1 of this Offer.
            </p>
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

export default Agreement;
