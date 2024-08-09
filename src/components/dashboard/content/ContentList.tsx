"use client"

import React from "react";
import { IContent } from "../../../types";
import acept from "../../../../public/dashboard/png/check.png";
import clear from "../../../../public/dashboard/svg/delete.svg";
import Image from "next/image";
import { useUpdateTextMutation } from "@/lib/redux";
import Buttons from "../buttons/Buttons";

interface Props {
  item: IContent;
  page: string;
  sectionId: string;
  contentId: string;
}

const ContentList: React.FC<Props> = ({ item, page, sectionId, contentId }) => {
  const [updateText] = useUpdateTextMutation();
  const [text, setText] = React.useState(item.value);

  const saveData = () => {
    updateText({action: "updateText", page, sectionId, contentId, value: text})
  };

  const returneData = () => {
    setText(item.value)
  };

  return (
    <>
      <div
        className="flex flex-col w-full min-h-16 border-x-neutral-600 mb-6"
        key={item.label}
      >
        <label className="text-sm text-slate-500 uppercase mb-4" htmlFor={item.value}>
          {item.explan}
        </label>
        <div className="flex flex-row items-center justify-center relative">
          <Buttons saveData={saveData} returneData={returneData} pastValue={item.value} newValue={text}/>
          {item.type === "text" ? (
            <input
              id={item.value}
              className="w-full text-sm"
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          ) : (
            <textarea
              className="w-full h-40 resize-none mb-10 text-sm"
              id={item.value}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ContentList;