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
import { useGetContentQuery } from "@/lib/redux";


export default function Home() {
  const { data = [], isLoading } = useGetContentQuery(undefined);


  if (isLoading) return <h1>Loading...</h1>

    return (
      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        mousewheel={true}
        touchReleaseOnEdges={true}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <Main main={data.main[0]} />
        </SwiperSlide>
        <SwiperSlide>
          <About about={data.main[1]} />
        </SwiperSlide>
        <SwiperSlide>
          <Portfolio portfolio={data.main[2]} />
        </SwiperSlide>
        <SwiperSlide>
          <Price prices={data.main[3]} />
        </SwiperSlide>
        <SwiperSlide>
          <Contacts user={data.user} />
        </SwiperSlide>
      </Swiper>
    );
}
