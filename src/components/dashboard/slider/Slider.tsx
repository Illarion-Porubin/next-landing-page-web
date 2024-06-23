"use client"

import React from "react";

import { IContent, IPhoto, ISliderData } from "../../../types";
import { SlideItem } from "./SlideItem";
import { Sort } from "@/components/dashboard/sort/Sort";
import { UploadPhoto } from "../upload/UploadPhoto";


const Slider: React.FC = () => {
  const [active, setActive] = React.useState<string>("Слайдер1");
  const [sliderData, setSliderData] = React.useState<ISliderData | null>(null);

  const sort = ["Слайдер1", "Слайдер2"];
  const sortSlider =
    active === "Слайдер1" ? sliderData?.slider1 : sliderData?.slider2;
  /// switch case ?

  // const fetchSliderList = async () => {
  //   const data: IContent = await fetch("http://localhost:3001/contents").then(
  //     (data) => data.json()
  //   );
  //   setSliderData(data.sliderData);
  // };

  // React.useEffect(() => {
  //   fetchSliderList();
  // }, []);

  return (
    <div className="dashboard">
      <Sort sort={sort} setActive={setActive} active={active} />
      <div className="flex flex-wrap gap-10">
        {sortSlider && sortSlider?.length < 8 ? (
          <UploadPhoto useFetch={"slider"} />
        ) : null}
        {sortSlider?.map((item: IPhoto, id: number) => (
          <SlideItem item={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Slider