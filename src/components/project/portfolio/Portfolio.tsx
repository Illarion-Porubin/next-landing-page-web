import { IPicture, ISection } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  portfolio: ISection;
}

const Portfolio: React.FC<Props> = ({ portfolio }) => {
  if (portfolio.gallery)
    return (
      <div
        className="mx-16 pr-16 text-white flex w-full h-screen justify-center items-center relative border-l-[1px]"
        id="works"
      >
        <h2 className="text-[30px] font-[800] leading[109%] tracking-[0.13em] uppercase rotate-[270deg] absolute top-[72%] left-[-80px]">
          portfolio
        </h2>
        <div className="works_wrap">
          <div className="works">
            {portfolio.gallery.map((item: IPicture, id: number) => (
              <div key={id}>
                <Link
                  href="/#"
                  className="w-[340px] h-[200px] flex items-center justify-center"
                  
                >
                  <Image
                    className="w-auto h-auto "
                    src={item.url}
                    alt={"converse"}
                    width={340}
                    height={200}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Portfolio;
