"use client";

import React from "react";
import { IContent, ISection, IPicture, IService } from "@/types";
import { UploadPhoto } from "../upload/UploadPhoto";
import ContentList from "../content/ContentList";
import Picture from "../picture/Picture";
import Service from "../service/Service";

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
        <div className="my-20">
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Слайдер</h4>
          <div className=" w-full h-auto flex flex-wrap gap-16">
            {data.photoSlider?.length < 8 && (
              <UploadPhoto
                page={page}
                sectionId={String(sectionId)}
                content={"photoSlider"}
              />
            )}
            {data.photoSlider.map((item: IPicture, id: number) => (
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
        <div className="my-20">
          <h4 className="text-[18px] font-bold my-10">Текстовое оформление</h4>
          {data.content.map((item: IContent, id: number) => (
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
        <div className="my-20">
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Галерея</h4>
          <div className="flex flex-wrap gap-16">
            {data.gallery?.length < 8 && (
              <UploadPhoto
                page={page}
                sectionId={String(sectionId)}
                content={"gallery"}
              />
            )}
            {data.gallery?.map((item: IPicture, id) => (
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
        <div className="my-20">
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Картинки</h4>
          <div className=" w-full h-auto flex flex-wrap gap-16">
            {data.images?.length < 2 && (
              <UploadPhoto
                page={page}
                sectionId={String(sectionId)}
                content={"images"}
              />
            )}
            {data.images.map((item: IPicture, id: number) => (
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

      {data.services && (
        <div className="my-20">
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Услуги</h4>
          <div className="w-full h-auto flex flex-wrap gap-16">
            {data.services.map((item: IService, id: number) => (
              <Service
                item={item}
                key={id}
                content={"services"}
                sectionId={String(sectionId)}
                contentId={String(id)}
                page={page}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sections;
