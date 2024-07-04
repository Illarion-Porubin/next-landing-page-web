"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Main from "@/components/project/main/Main";
import About from "@/components/project/about/About";
import Price from "@/components/project/price/price";
import Contacts from "@/components/project/contacts/Contacts";
import Portfolio from "@/components/project/portfolio/Portfolio";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { selectContentData } from "@/lib/redux/selectors";
import { fetchGetContent } from "@/lib/redux/slices/contentSlice";

export default function Home() {
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectContentData);

  //сделать фильтрацию. Пример: если есть слайдер, то показывать кнопку для слайдера, иначе null



  React.useEffect(() => {
    dispatch(fetchGetContent())
  }, [dispatch])

  
  if(data.isLoading === "loaded" && data.data?.project)
  return (
    <Swiper
      direction={"vertical"}
      pagination={{ clickable: true }}
      mousewheel={true}
      touchReleaseOnEdges={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Main main={data.data.project.main}/>
      </SwiperSlide>
      <SwiperSlide>
        <About about={data.data.project.about}/>
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio portfolio={data.data.project.portfolio}/>
      </SwiperSlide>
      <SwiperSlide>
        <Price prices={data.data.project.prices}/>
      </SwiperSlide>
      <SwiperSlide>
        <Contacts contacts={data.data.project.contacts}/>
      </SwiperSlide>
    </Swiper>
  );
}
