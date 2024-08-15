import React from "react";
import Navigate from "../navigate/Navigate";
import Image from "next/image";
import Link from "next/link";

// http://localhost:3000"
const host = "https://next-landing-page-web.onrender.com/"

const Navbar = async () => {
  return (
    <div className="flex items-center justify-between bg-transparent w-full h-auto mt-8 fixed px-[120px] z-50">
      <a href={host}>
        <Image className="w-auto h-auto" src={"/logo.png"} alt="logo" width={130} height={80} priority/>
      </a>
      {/* <Navigate /> */}
      <div className="flex flex-row w-[280px] h-auto justify-between items-center">
        <Link href="/login">
          <Image src={"/user.svg"} alt="logo" width={30} height={30} />
        </Link>
        <a className="phone" href="tel:+1(674)-563-9114">
          +1(674)-563-9114
        </a>
        <button className="flex relative top-3 start w-10 h-10 text-white">
          <svg
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.97 6.37086C13.3053 7.13723 13.3103 9.06173 11.9789 9.83495L3.07055 15.0088C1.7392 15.782 0.0700676 14.8241 0.0661063 13.2845L0.0396002 2.98268C0.0356389 1.44309 1.69982 0.476556 3.03513 1.24292L11.97 6.37086Z"
              fill="#FB1B3D"
            />
          </svg>
          <span className="absolute w-[100px] h-full rotate-[270deg] right-[-24px] top-[60px]">{`Start a project`}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
