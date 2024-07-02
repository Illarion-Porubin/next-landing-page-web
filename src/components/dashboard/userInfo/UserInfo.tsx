"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-avatar.png";
import Image from "next/image";
import { UerInfoList } from "./UerInfoList";
import { IUserForm } from "@/types";
import { useCustomDispatch, useCustomSelector } from "@/hooks/store";
import { fetchGetContent } from "@/lib/redux/slices/contentSlice";
import { selectContentData } from "@/lib/redux/selectors";


const UserInfo: React.FC = () => {
  const dispath = useCustomDispatch();
  const data = useCustomSelector(selectContentData);


  React.useEffect(() => {
    dispath(fetchGetContent());
  }, [dispath]);


  const userForm = [
    { value: data.data?.user?.firstName || "" , label: "firstName" },
    { value: data.data?.user?.lastName || "" , label: "lastName" },
    { value: data.data?.user?.email || "" , label: "email" },
    { value: data.data?.user?.phone || "" , label: "phone" },
    { value: data.data?.user?.card || "" , label: "card" },
  ]

  
  return (
    <div className="w-full h-screen bg-[#e7ecfa]">
      <div className="flex items-center justify-center w-full h-full p-[20px] sm:pl-[20%]">
        <div className="flex flex-col items-center justify-center w-full sm:w-[360px] h-[600px] rounded-xl p-10 bg-slate-600">
          <Image
            className="max-w-[160px] h-auto object-cover my-2"
            src={empty}
            alt="avatar"
          />
          {
            data.isLoading === "loaded" && 
            userForm.map((item: IUserForm, id: number) => (
              <UerInfoList item={item} key={id} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
