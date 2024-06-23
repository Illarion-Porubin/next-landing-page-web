"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-avatar.png";
import Image from "next/image";
import { UerInfoList } from "./UerInfoList"; 
import { Content, UContent } from "./actions";
import { IContent, IUser, IUserInfo } from "@/types";



const UserInfo: React.FC = () => {
  const [user, setUser] = React.useState<IUserInfo | null>(null);

  const fetchGetContent = async () => {
    const data: IContent = await Content();
    setUser(data.user);
  };

  React.useEffect(() => {
    fetchGetContent();
  }, []);


  const saveData = async (data: IUser) => {
     const res:IContent = await UContent(data)
     setUser(res.user);
  }

  const userInterface: IUser[] = [
    { value: user?.firstName, label: "firstName" },
    { value: user?.lastName, label: "lastName" },
    { value: user?.email, label: "email" },
    { value: user?.phone, label: "phone" },
    { value: user?.card, label: "card" },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full p-[20px] pt-[60px] sm:pl-[20%]">
      <div className="flex flex-col items-center justify-center w-full sm:w-[360px] h-[600px] rounded-xl p-10 bg-slate-600">
        <Image
          className="max-w-[160px] h-auto object-cover my-2"
          src={empty}
          alt="avatar"
        />
          {
          user &&
          userInterface.map((item: IUser, id: number) => (
            <UerInfoList item={item} saveData={saveData} key={id} />
          ))
        }
      </div>
    </div>
  );
};

export default UserInfo;
