"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-photo.png";
import { Upload } from "../../../hooks/Upload";
import Image from "next/image";
import { IPicture } from "@/types";
import { useDeletePictureMutation } from "@/lib/redux";

interface Props {
  item: IPicture;
  page: string;
  content: string;
  contentId: string;
  sectionId: string;
}

const Picture: React.FC<Props> = ({
  item,
  page,
  content,
  contentId,
  sectionId,
}) => {
  const [deletePicture] = useDeletePictureMutation();

  const filePicker = React.useRef<HTMLInputElement>(null);
  const { upload } = Upload({
    filePicker,
    page,
    sectionId,
    content,
    contentId, 
    oldPubId: item.public_id,
  });

  return (
    <article className="photo w-[240px] h-[240px] cursor-pointer ">
      <svg
        className="trashcan w-[30px] h-auto top-1 right-1 transition-all"
        width="888"
        height="888"
        viewBox="0 0 888 888"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={() =>
          deletePicture({
            action: "deletePhoto",
            page,
            sectionId,
            content,
            contentId,
            oldPubId: item.public_id,
          })
        }
      >
        <circle cx="444" cy="444" r="444" fill="#D9D9D9" />
        <path
          d="M377 444V610.667"
          stroke="black"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M510.333 444V610.667"
          stroke="black"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M177 277.333H710.333"
          stroke="black"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M243.667 377.333V644C243.667 699.23 288.439 744 343.667 744H543.667C598.897 744 643.667 699.23 643.667 644V377.333"
          stroke="black"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M343.667 210.667C343.667 173.848 373.514 144 410.333 144H477C513.82 144 543.667 173.848 543.667 210.667V277.333H343.667V210.667Z"
          stroke="black"
          strokeWidth="66.6667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

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
