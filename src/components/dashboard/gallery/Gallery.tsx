"use client"

import React from "react";
import { IContent, IPhoto } from "../../../types";
import { GalleryItem } from "./GalleryItem";
import { UploadPhoto } from "../upload/UploadPhoto";


const Gallery = () => {
  const [data, setData] = React.useState<IPhoto[] | null>(null);

  // const fetchGallery = async () => {
  //   const res: IContent = await fetch("http://localhost:3001/contents").then(
  //     (data) => data.json()
  //   );
  //   setData(res.galary);
  // };

  // React.useEffect(() => {
  //   fetchGallery();
  // }, []);

  return (
    <div className="dashboard">
      <div className="flex flex-wrap gap-10">
        {data && data?.length < 12 ? <UploadPhoto useFetch={"gallery"}/> : null}
        {data?.map((item, id) => (
          <GalleryItem item={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Gallery