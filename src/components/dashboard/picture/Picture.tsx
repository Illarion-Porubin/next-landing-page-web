"use client";

import React from "react";
import del from "../../../../public/dashboard/svg/delete.svg";
import empty from "../../../../public/dashboard/png/empty-photo.png";
import { Upload } from "../../../hooks/Upload";
import Image from "next/image";

interface Props {
  url: string;
  mark: string;
  type: string;
  id: number;
}

const testFelete = () => {
  console.log(true);
};

const Picture: React.FC<Props> = ({ url, mark, type, id }) => {
  const filePicker = React.useRef<HTMLInputElement>(null);
  const { upload } = Upload({ filePicker, mark, type, id });


  return (
    <article className="photo w-[240px] h-[240px] cursor-pointer ">
      <Image
        className="trashcan w-[30px] h-auto top-1 right-1 transition-all"
        src={del}
        alt="delete"
        onClick={testFelete}
      />
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
        src={url ? url : empty}
        alt="pick"
        onClick={upload.handlePick}
        width={240}
        height={240}
      />
    </article>
  );
};

export default Picture;
