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
import { Content } from "./actions";
import { IContent, IProject } from "@/types";
import Portfolio from "@/components/project/portfolio/Portfolio";

export default function Home() {
  const [contetnt, setContent] = React.useState<IProject | null>(null)

  const fetchGetContent = async () => {
    const data: IContent = await Content();
    setContent(data.project)
  } 

  React.useEffect(() => {
    fetchGetContent()
  }, [])

  console.log(contetnt);

  if(contetnt)
  return (
    <Swiper
      direction={"vertical"}
      pagination={{ clickable: true }}
      mousewheel={true}
      touchReleaseOnEdges={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Main main={contetnt.main}/>
      </SwiperSlide>
      <SwiperSlide>
        <About about={contetnt.about}/>
      </SwiperSlide>
      <SwiperSlide>
        <Portfolio portfolio={contetnt.portfolio}/>
      </SwiperSlide>
      <SwiperSlide>
        <Price prices={contetnt.prices}/>
      </SwiperSlide>
      <SwiperSlide>
        <Contacts contacts={contetnt.contacts}/>
      </SwiperSlide>
    </Swiper>
  );
}
