import { IService } from "@/types";
import Image from "next/image";
import React from "react";
import Buttons from "../buttons/Buttons";
import { UploadPhoto } from "../upload/UploadPhoto";
import { useUpdateServiceMutation } from "@/lib/redux";

interface Props {
  item: IService;
  sectionId: string;
  content: string;
  contentId: string;
  page: string;
}

const Service: React.FC<Props> = ({ item, sectionId, contentId, page }) => {
  const [updateService] = useUpdateServiceMutation();
  const [title, setTitle] = React.useState(item.title);
  const [desc, setDesc] = React.useState(item.desc);
  const [price, setPrice] = React.useState<string>(item.price);


  const saveData = (type: string) => {
    updateService({action: "updateService", page, sectionId, type, contentId, value: desc})
  }; 

  return (
    <div className="flex flex-col w-240px h-auto">
      <div className="mb-10">
        {item.url === "" ? (
          <UploadPhoto
            page={page}
            sectionId={String(sectionId)}
            content={"images"}
          />
        ) : (
          <Image src={item.url} alt="picture" width={240} height={126} />
        )}
      </div>
      <div className="flex flex-row items-center justify-center relative">
        <Buttons saveData={() => saveData("title")} returneData={() => setTitle(item.title)} pastValue={item.title} newValue={title} />
        <input
          className="w-full h-auto mb-10"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center justify-center relative">
        <Buttons saveData={() => saveData("desc")} returneData={() => setDesc(item.desc)} pastValue={item.desc} newValue={desc} />
        <textarea
          className="text-sm mb-10 w-full h-[200px]"
          style={{ resize: "none" }}
          placeholder="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="flex flex-row items-center justify-center relative">
        <Buttons saveData={() => saveData("price")} returneData={() => setPrice(item.price)} pastValue={item.price} newValue={price} />
        <input
          className="w-full h-auto"
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Service
