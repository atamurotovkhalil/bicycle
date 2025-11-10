import vel1 from "./../../../public/Catalog/velosiped.png";
import vel2 from "./../../../public/Catalog/tardein.png";
import vel3 from "./../../../public/Catalog/zapchast.png";
import vel4 from "./../../../public/Catalog/aksessuar.png";
import vel5 from "./../../../public/Catalog/ekipi.png";
import vel6 from "./../../../public/Catalog/velostanki.png";

const Catalog = () => {
    return (
        <div className="container">
            <div className="">
                <div>
                    <h1 className="text-5xl m-5 my-10 font-bold">Catalog</h1>
                </div>
                <div className="bg-[#F57520] h-64 border flex items-center justify-around rounded-xl relative">
                    {/* Text */}
                    <div>
                        <p className="text-white font-semibold text-[64px]">BICYCLE</p>
                    </div>

                    <div className="w-[800px] h-[250px] overflow-hidden rounded-xl">
                        <img alt={"Hi there"} src={vel1} className="w-[800px] h-[600px] object-cover mt-2"/>
                    </div>
                </div>

                <div className="grid grid-cols-3 text-center">
                    <div className="col-span-1 m-2">
                        <div className="bg-black h-96 border rounded-xl relative">

                            <div>
                                <p className="text-white font-semibold text-[64px]">TRADE IN</p>
                            </div>

                            <div className="w-[400px] h-[280px] overflow-hidden rounded-xl flex items-start">
                                <img alt={"Hi there"} src={vel2} className="w-[390px] h-[500px] object-cover"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 m-2">
                        <div
                            className="bg-black -space-x-10 h-36 border flex items-center justify-around rounded-xl relative">
                            {/* Text */}
                            <div>
                                <p className="text-white ml-4 font-semibold text-[64px]">
                                    SPARE
                                </p>
                            </div>
                            <div
                                className="w-[300px] h-[130px] pt-12 flex items-end justify-end overflow-hidden rounded-xl">
                                <img alt={"Hi there"} src={vel3} className="w-[200px] h-[180px] object-cover"/>
                            </div>
                        </div>
                        <div
                            className="bg-black -space-x-10 h-60 border flex items-center justify-around rounded-xl relative">
                            {/* Text */}
                            <div>
                                <p className="text-white ml-4 font-semibold text-[32px]">
                                    ACCESSORIES
                                </p>
                            </div>

                            {/* Image Wrapper (Controls Cropping) */}
                            <div
                                className="w-[300px] h-[200px] pt-12 flex items-end justify-end overflow-hidden rounded-xl">
                                <img
                                    alt={"Hi there"}
                                    src={vel4}
                                    className="w-[200px] rotate-45 h-[200px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 m-2">
                        <div
                            className="bg-black -space-x-10 h-60 border flex items-center justify-around rounded-xl relative">

                            <div>
                                <p className="text-white ml-4 font-semibold text-[32px]">
                                    EQUIPMENT
                                </p>
                            </div>
                            <div
                                className="w-[300px] h-[200px] pt-12 flex items-end justify-end overflow-hidden rounded-xl">
                                <img
                                    alt={"Hi there"}
                                    src={vel5}
                                    className="w-[200px] rotate-45 h-[200px] object-cover"
                                />
                            </div>
                        </div>
                        <div
                            className="bg-black -space-x-10 h-36 border flex items-center justify-around rounded-xl relative">
                            {/* Text */}
                            <div>
                                <p className="text-white ml-4 font-semibold text-[32px]">
                                    BIKE STANDS
                                </p>
                            </div>

                            <div
                                className="w-[300px] h-[130px] pt-12 flex items-end justify-end overflow-hidden rounded-xl">
                                <img alt={"Hi there"} src={vel6} className="w-[200px] h-[180px] object-cover"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Catalog;
