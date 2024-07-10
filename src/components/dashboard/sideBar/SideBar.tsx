"use client";

import React from "react";
import arrow from "../../../../public/dashboard/svg/arrow_prev.svg";
import Image from "next/image";
import Link from "next/link";

const SideBar = () => {
  const [active, setActive] = React.useState<boolean>(false);

  const adminMenu = [
    { title: "Пользователь", link: "/admin/user"},
    { title: "Главная", link: "/admin/main"},
  ];

  return (
    <div
      className={`h-screen w-[200px] bg-slate-800 text-left text-white absolute transition-all ${
        active ? "left-[-200px]" : "left-0 z-10"
      }`}
    >
      <button
        className={`w-[40px] h-10 bg-slate-800 rounded-r-2xl absolute top-0 right-[-40px] z-10`}
        onClick={() => setActive(!active)}
      >
        <Image
          className={`w-8 h-8 transition-all ${
            active ? "rotate-180" : "rotate-0"
          }`}
          src={arrow}
          alt="arrow"
        />
      </button>
      <div className="p-10 pb-20">
        <Link
          className="hover:text-blue-500 transition-all text-[18px]"
          href={"/"}
        >
          выход
        </Link>
      </div>
      <ul>
        {adminMenu.map((menu, id: number) => (
          <li className="flex flex-col" key={id}>
            <Link
              className="flex items-center text-left pl-10 w-full min-h-8 border-b-[1px] hover:border-blue-500"
              href={menu.link}
            >
              {menu.title}
            </Link>
          </li>
        ))}
      </ul>
      <span className="text-[12px] text-slate-400 absolute bottom-4 left-8">
        Created by Lars: v1.0.0
      </span>
    </div>
  );
};

export default SideBar;
