import React from "react";
import { ISContent, ISection } from "@/types";
import { ContentList } from "../content/ContentList";
import Picture from "../picture/Picture";

interface Props {
  data: ISection;
  mark: string;
  id: number;
}

const Sections: React.FC<Props> = ({ data, mark, id }) => {

  return (
    <div className="w-full mb-20 first:mt-0">
      <h4 className=" text-[28px] font-bold ">Секция {id}</h4>

      {data.photoSlider && (
        <div className="my-6">
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Слайдер</h4>
          <div className=" w-full h-auto flex flex-wrap gap-16">
            {data.photoSlider.map((item: string, id: number) => (
              <Picture url={item} key={id} mark={mark} type={'photoSlider'} id={id}/>
            ))}
          </div>
        </div>
      )}

      {data.content && (
        <div>
          <h4 className="text-[18px] font-bold my-10">Текстовое оформление</h4>
          {data.content.map((item: ISContent, id: number) => (
            <ContentList item={item} key={id} />
          ))}
        </div>
      )}

      {data.gallery && (
        <div>
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Галерея</h4>
          <div className="flex flex-wrap gap-16">
            {data.gallery?.map((item, id) => (
              <Picture url={item} key={id} mark={mark} type={'gallery'} id={id}/>
            ))}
          </div>
        </div>
      )}

      {data.images && (
        <div>
          <h4 className="text-[18px] font-bold my-10 first:mt-0">Картинки</h4>
          <div className=" w-full h-auto flex flex-wrap gap-16">
            {data.images.map((item: string, id: number) => (
              <Picture url={item} key={id} mark={mark} type={'images'} id={id}/>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Sections;
