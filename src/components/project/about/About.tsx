import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-16 text-white flex w-full h-screen relative border-l-[1px]">
      <h2 className=" text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[60%] left-[-180px]">INFORMATION ABOUT</h2>
      <div className="flex flex-col w-full h-full items-start justify-center pl-[115px] text-left">
        <h3 className="font[600px] text-[30px] leading-[168%] tracking-[0.13em] mb-10 uppercase">Want a unique design? <span className="block">We will help you!</span></h3>
        <div className="flex w-[1200px] h-auto justify-between">
            <div className="flex flex-row items-end justify-between w-[600px]">
                <p className="block font-[400] text-[15px] leading-[159%] tracking-[159%] w-[267px] h-auto text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna
                </p>
                <p className="block font-[400] text-[15px] leading-[159%] tracking-[159%] w-[267px] h-auto text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis
                </p>
            </div>
            <div className="w-[400px] h-auto relative">
                <div className=" absolute w-[340px] h-[200px] z-10">
                <   Image className=" w-full h-full " src="/converse1.png" alt={'converse'} width={340} height={200}/>
                </div>
                <div className=" absolute w-[340px] h-[200px] z-20 left-[30px] top-[30px]">
                    <Image className=" w-full h-full " src="/converse2.png" alt={'converse'} width={340} height={200}/>
                </div>
                <h2 className="absolute text-[60px] font-[600] leading-[109%] uppercase text-white z-30 bottom-[50px] right-0">Design</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
