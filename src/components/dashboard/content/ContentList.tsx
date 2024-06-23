"use client"

import React from "react";
import { ISiteInfo } from "../../../types";
import acept from "../../../../public/dashboard/png/check.png";
import clear from "../../../../public/dashboard/svg/delete.svg";
import Image from "next/image";

interface Props {
  item: ISiteInfo;
  sort: string;
}

export const ContentList: React.FC<Props> = ({ item, sort }) => {
  const [text, setText] = React.useState(item.value);

  const saveData = () => {
    //делаем логику ссохранения
  };

  const deleteData = () => {
    setText(item.value)
  };

  return (
    <>
      <div
        className="flex flex-col w-full min-h-16 border-x-neutral-600 mb-6"
        key={item.title}
      >
        <label className="text-sm text-slate-500" htmlFor={item.title}>
          {item.title}
        </label>
        <div className="flex flex-row items-center justify-center relative">
          <button className={`absolute right-8 top-[-30px] ${text !== item.value ? "opacity-1" : "opacity-0"}`} onClick={() => saveData()}>
            <Image className="w-[24px]" src={acept} alt="acept" />
          </button>
          <button className={`absolute right-0 top-[-30px] ${text !== item.value ? "opacity-1" : "opacity-0"}`} onClick={() => deleteData()}>
            <Image className="w-[24px]" src={clear} alt="clear" />
          </button>
          {sort === "Текст" ? (
            <input
              id={item.title}
              className="w-full"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <textarea
              className="w-full h-40 resize-none mb-10"
              id={item.title}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          )}
          
        </div>
      </div>
    </>
  );
};


// {buttons.map((item: string, id: number) => (
//   <button
//     key={id}
//     className={`mx-4 menuButton bg-slate-600 ${
//       active === id
//         ? "border-[2px] border-slate-600 bg-transparent text-black"
//         : "text-white"
//     }`}
//     onClick={active ? () => saveData(id) : () => deleteData(id)}
//   >
//     {item}
//   </button>
// ))}