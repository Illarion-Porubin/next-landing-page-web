"use client"

import React from "react";
import del from "../../../../public/dashboard/svg/delete.svg";
import empty from "../../../../public/dashboard/png/empty-photo.png";
import { IPhoto, IUpload } from "../../../types";
import { Upload } from "@/hooks/Upload";
import Image from "next/image";


interface Props {
  item: IPhoto;
}

export const SlideItem: React.FC<Props> = ({ item }) => {
  const filePicker = React.useRef<HTMLInputElement>(null);
  const {upload}: IUpload = Upload({filePicker})
  
  const testFelete = () => {
    console.log(true);
  }

  return (
    <>
      <article className="photo w-[220px] h-[220px] cursor-pointer">
        <Image className="trashcan trashcan w-[30px] h-auto top-1 right-1 absolute opacity-0 transition-all" src={del} alt="delete" onClick={testFelete}/>
        <input
          className="hidden"
          onChange={upload.handleChange}
          ref={filePicker}
          type="file"
          name="file"
          id="file"
          accept="image/*,.png,.jpg,.web"
        />
        <Image
          className="w-full h-full object-cover"
          src={item.url ? item.url : empty}
          alt="pick"
          onClick={upload.handlePick}
        />
      </article>
    </>
  );
};
