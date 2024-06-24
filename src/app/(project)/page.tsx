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
import Works from "@/components/project/works/Works";
import Price from "@/components/project/price/price";
import Contacts from "@/components/project/contacts/Contacts";

export default function Home() {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{ clickable: true }}
      mousewheel={true}
      touchReleaseOnEdges={true}
      modules={[Pagination]}
    >
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <About />
      </SwiperSlide>
      <SwiperSlide>
        <Works />
      </SwiperSlide>
      <SwiperSlide>
        <Price />
      </SwiperSlide>
      <SwiperSlide>
        <Contacts />
      </SwiperSlide>
    </Swiper>
  );
}
