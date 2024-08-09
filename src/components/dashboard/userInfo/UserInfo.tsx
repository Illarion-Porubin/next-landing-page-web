"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-avatar.png";
import Image from "next/image";
import { UerInfoList } from "./UerInfoList";
import { IProject, IUserInfo } from "@/types";

interface Props {
  data: IProject;
}

const UserInfo: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-screen bg-[#e7ecfa]">
      <div className="flex items-center justify-center w-full h-full p-[20px] sm:pl-[20%]">
        <div className="flex flex-col items-center justify-center w-full sm:w-[360px] h-[600px] rounded-xl p-10 bg-slate-600">
          <Image
            className="max-w-[160px] h-auto object-cover my-2"
            src={data.user.userPhoto.url || empty}
            alt="avatar"
            width={160}
            height={160}
            priority
          />
          {data.user.userInfo.map((item: IUserInfo, id: number) => (
            <UerInfoList item={item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
