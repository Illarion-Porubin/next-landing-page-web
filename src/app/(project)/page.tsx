"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import Main from "@/components/project/main/Main";

//slider1

export default function Home() {
  return (
    <Swiper
      direction={"vertical"}
      pagination={{ clickable: true }}
      mousewheel={true}
      touchReleaseOnEdges={true}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <Main />
      </SwiperSlide>
      <SwiperSlide>
        <Main />
      </SwiperSlide>
    </Swiper>
  );
}
