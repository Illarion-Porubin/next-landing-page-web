"use client";

import React from "react";
import del from "../../../../public/dashboard/svg/delete.svg";
import empty from "../../../../public/dashboard/png/empty-photo.png";
import { Upload } from "../../../hooks/Upload";
import Image from "next/image";
import { ISPicture } from "@/types";

interface Props {
  item: ISPicture;
  page: string;
  content: string;
  contentId: string;
  sectionId: string;
}

const testFelete = () => {
  console.log(true);
};

const Picture: React.FC<Props> = ({ item, page, content, contentId, sectionId }) => {
  const filePicker = React.useRef<HTMLInputElement>(null);
  const { upload } = Upload({ filePicker, page, sectionId, content, contentId, oldPubId: item.public_id });

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
        src={item.url ? item.url : empty}
        alt="pick"
        onClick={upload.handlePick}
        width={240}
        height={240}
        priority
      />
    </article>
  );
};

export default Picture;
