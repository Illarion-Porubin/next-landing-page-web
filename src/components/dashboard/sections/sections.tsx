"use client";

import React from "react";
import { ISContent, ISection, ISPicture } from "@/types";
import ContentList from "../content/ContentList";
import Picture from "../picture/Picture";
import { UploadPhoto } from "../upload/UploadPhoto";

interface Props {
  data: ISection;
  sectionId: number;
  page: string;
}

const Sections: React.FC<Props> = ({ data, page, sectionId }) => {

  return (
    <div className="w-full mb-20 first:mt-0">
      <h4 className=" text-[28px] font-bold ">Секция {sectionId + 1}</h4>

      {data.photoSlider && (
        <div className="my-6">
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Слайдер</h4>
          <div className=" w-full h-auto flex flex-wrap gap-16">
            {data.photoSlider?.length < 8 && (
              <UploadPhoto page={page} sectionId={String(sectionId)} content={"photoSlider"} />
            )}
            {data.photoSlider.map((item: ISPicture, id: number) => (
              <Picture
                item={item}
                page={page}
                sectionId={String(sectionId)}
                contentId={String(id)}
                content={"photoSlider"}
                key={id}
              />
            ))}
          </div>
        </div>
      )}

      {data.content && (
        <div>
          <h4 className="text-[18px] font-bold my-10">Текстовое оформление</h4>
          {data.content.map((item: ISContent, id: number) => (
            <ContentList
              item={item}
              page={page}
              sectionId={String(sectionId)}
              contentId={String(id)}
              key={id}
            />
          ))}
        </div>
      )}

      {data.gallery && (
        <div>
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Галерея</h4>
          <div className="flex flex-wrap gap-16">
            {data.gallery?.length < 8 &&
              <UploadPhoto page={page} sectionId={String(sectionId)} content={"gallery"} />
            }
            {data.gallery?.map((item: ISPicture, id) => (
              <Picture
                item={item}
                page={page}
                sectionId={String(sectionId)}
                contentId={String(id)}
                content={"gallery"}
                key={id}
              />
            ))}
          </div>
        </div>
      )}

      {data.images && (
        <div>
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Картинки</h4>
          <div className=" w-full h-auto flex flex-wrap gap-16">
            {data.images.map((item: ISPicture, id: number) => (
              <Picture
                item={item}
                page={page}
                sectionId={String(sectionId)}
                contentId={String(id)}
                content={"images"}
                key={id}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sections;
