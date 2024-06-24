import Image from "next/image";
import React from "react";

const Price = () => {
  return (
    <div className="mx-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px]">
      <h2 className="text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[78%] left-[-40px]">
        Prices
      </h2>
      <div className="w-full h-auto text-left">
        <h2 className="text-[30px] font-[500] leading[109%] tracking-[0.13em] uppercase ml-[18%]">
          Design services
        </h2>
        <div className="flex w-full h-auto px-[18%] overflow-y-scroll relative ">
          <div className="w-full h-[450px]  overflow-y-scroll">
            {new Array(5).fill("").map(() => (
              <>
                <div className="flex max-w-[600px] h-auto justify-between items-center">
                  <Image
                    className="m-[26px] ml-0"
                    src="/service.png"
                    alt="service"
                    width={254}
                    height={126}
                  />
                  <div className="flex flex-col justify-between">
                    <h3 className="font-[700] text-[20px] leading-[109%] tracking-[0.13em] uppercase">
                      Name of the service
                    </h3>
                    <p className="font-[400] my-4 font-sans font text-[13px] leading-[155%] tracking-[0.06em]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua
                    </p>
                    <p className="font-[700] text-[20px] leading-[109%] tracking-[0.13em] uppercase">
                      100 <span>$</span>
                    </p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
