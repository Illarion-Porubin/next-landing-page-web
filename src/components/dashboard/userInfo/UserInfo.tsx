"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-avatar.png";
import Image from "next/image";
import { UerInfoList } from "./UerInfoList";
import { IContent, IUser, IUserForm } from "@/types";
import { contentController } from "@/lib/server/controllers/contentController";

const UserInfo: React.FC = () => {
  const [user, setUser] = React.useState<IUser | null>(null);

  // const fetchGetContent = async () => {
  //   const data: IContent = await contentController.content();
  //   setUser(data.user);
  // };

  // React.useEffect(() => {
  //   fetchGetContent();
  // }, []);

  const saveData = async (data: IUserForm) => {
    const res: IContent = await contentController.updateUser(data);
    setUser(res.user);
  };

  const userInterface: IUserForm[] = [
    { value: user?.firstName || '', label: "firstName" },
    { value: user?.lastName || '', label: "lastName" },
    { value: user?.email || '', label: "email" },
    { value: user?.phone || '', label: "phone" },
    { value: user?.card || '', label: "card" },
  ];

  return (
    <div className="w-full h-screen bg-[#e7ecfa]">
      <div className="flex items-center justify-center w-full h-full p-[20px] sm:pl-[20%]">
        <div className="flex flex-col items-center justify-center w-full sm:w-[360px] h-[600px] rounded-xl p-10 bg-slate-600">
          <Image
            className="max-w-[160px] h-auto object-cover my-2"
            src={empty}
            alt="avatar"
          />
          {user &&
            userInterface.map((item: IUserForm, id: number) => (
              <UerInfoList item={item} saveData={saveData} key={id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
