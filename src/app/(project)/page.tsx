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
import { fetchGetProject } from "@/lib/redux/slices/projectSlice";
import { selectProjectData } from "@/lib/redux/selectors";

export default function Home() {
  const dispatch = useCustomDispatch();
  const data = useCustomSelector(selectProjectData);

  //сделать фильтрацию. Пример: если есть слайдер, то показывать кнопку для слайдера, иначе null



  React.useEffect(() => {
    dispatch(fetchGetProject())
  }, [dispatch])

  
  if(data.isLoading === "loaded" && data.data?.main)
  return (
    <Swiper
      direction={"vertical"}
      pagination={{ clickable: true }}
      mousewheel={true}
      touchReleaseOnEdges={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Main main={data.data.main[0]}/>
      </SwiperSlide>
      <SwiperSlide>
        <About about={data.data.main[1]}/>
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio portfolio={data.data.main[2]}/>
      </SwiperSlide>
      <SwiperSlide>
        <Price prices={data.data.main[3]}/>
      </SwiperSlide>
      <SwiperSlide>
        <Contacts user={data.data.user}/>
      </SwiperSlide>
    </Swiper>
  );
}
