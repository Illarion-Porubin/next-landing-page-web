"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-avatar.png";
import Image from "next/image";
import { UerInfoList } from "./UerInfoList";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { selectProjectData } from "@/lib/redux/selectors";
import { IUserInfo } from "@/types";
import { fetchGetProject } from "@/lib/redux/slices/projectSlice";


const UserInfo: React.FC = () => {
  const dispath = useCustomDispatch();
  const data = useCustomSelector(selectProjectData);

  React.useEffect(() => {
    dispath(fetchGetProject());
  }, [dispath]);

  
  return (
    <div className="w-full h-screen bg-[#e7ecfa]">
      <div className="flex items-center justify-center w-full h-full p-[20px] sm:pl-[20%]">
        <div className="flex flex-col items-center justify-center w-full sm:w-[360px] h-[600px] rounded-xl p-10 bg-slate-600">
          <Image
            className="max-w-[160px] h-auto object-cover my-2"
            src={data.data?.user.userPhoto.url || empty}
            alt="avatar"
          />
          {
            data.isLoading === "loaded" && data.data?.user.userInfo &&
             data.data?.user.userInfo.map((item: IUserInfo, id: number) => (
              <UerInfoList item={item} key={id} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
