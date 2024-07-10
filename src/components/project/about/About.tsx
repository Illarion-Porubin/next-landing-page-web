import { ISection } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  about: ISection;
}

const About: React.FC<Props> = ({about}) => {
  if(about.content && about.images)
  return (
    <div className="mx-16 pr-16 text-white flex w-full h-screen relative border-l-[1px]" id="about">
      <h2 className=" text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[60%] left-[-180px]">INFORMATION ABOUT</h2>
      <div className="flex flex-col w-full h-full items-start justify-center text-left px-[15%]">
        <h3 className="font[600px] text-[30px] leading-[168%] tracking-[0.13em] mb-10 uppercase">{about.content[0].value}</h3>
        <div className="flex w-full h-auto items-center justify-between">
            <div className="flex flex-row items-end justify-between">
                <p className="block font-[400] text-[15px] leading-[159%] tracking-[159%] max-w-[267px] h-auto mr-6">
                    {about.content[1].value}
                </p>
            </div>
            <div className="w-[400px] h-[230px] relative">
                <div className=" absolute w-[340px] h-[200px] z-10">
                <   Image className=" w-full h-full " src={about.images[0].url || ""} alt={'converse'} width={340} height={200}/>
                </div>
                <div className=" absolute w-[340px] h-[200px] z-20 left-[30px] top-[30px]">
                    <Image className=" w-full h-full " src={about.images[1].url || ""} alt={'converse'} width={340} height={200}/>
                </div>
                <h2 className="absolute text-[60px] font-[600] leading-[109%] uppercase text-white z-30 bottom-[-30px] right-0">Design</h2>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
