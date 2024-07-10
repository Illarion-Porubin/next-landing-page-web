
import { ISection } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  prices: ISection;
}

const Price: React.FC<Props> = ({ prices }) => {
  if (prices.services)
    return (
      <div
        className="mx-16 pr-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px]"
        id="price"
      >
        <h2 className="text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[78%] left-[-40px]">
          Prices
        </h2>
        <div className="w-full h-auto text-left px-[15%]">
          <h2 className="text-[30px] font-[500] leading[109%] tracking-[0.13em] uppercase">
            Design services
          </h2>
          <div className="flex w-full h-auto relative">
            <div className="w-full h-[450px] overflow-y-scroll">
              {prices.services.map((item: IService, id: number) => (
                <div key={id}>
                  <div className="flex max-w-[600px] h-auto items-center">
                    <div className="w-[254px] h-[126px] m-[26px] ml-0">
                      <Image
                        className="w-auto h-auto "
                        src={item.image}
                        alt="service"
                        width={254}
                        height={126}
                      />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3 className="font-[700] text-[20px] leading-[109%] tracking-[0.13em] uppercase">
                        {item.title}
                      </h3>
                      <p className="font-[400] my-2 font-sans font text-[13px] leading-[155%] tracking-[0.06em]">
                        {item.desc}
                      </p>
                      <p className="font-[700] text-[20px] leading-[109%] tracking-[0.13em] uppercase">
                        {item.price} <span>$</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Price;
