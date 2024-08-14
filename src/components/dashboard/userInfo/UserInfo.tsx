"use client";

import React from "react";
import empty from "../../../../public/dashboard/png/empty-avatar.png";
import Image from "next/image";
import { UerInfoList } from "./UerInfoList";
import { IProject, IUserInfo } from "@/types";
import { useGetContentQuery, useUpdateUserPhotoMutation } from "@/lib/redux";
import { Upload } from "@/hooks/Upload";
import axios from "axios";

interface Props {
  data: IProject;
}

const UserInfo: React.FC<Props> = ({ data }) => {
  const [updateUserPhoto] = useUpdateUserPhotoMutation();
  const filePicker = React.useRef<HTMLInputElement>(null);

  const updatePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const formData = new FormData();
      formData.append("file", target.files[0]);
      formData.append("upload_preset", "od0cmi2t");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dnyxxxt88/upload",
        formData
      );
      if (res.status === 200 && res.data.public_id && res.data.secure_url) {
        updateUserPhoto({
          action: "updateUserPhoto",
          oldPubId: data.user.userPhoto.public_id,
          newPubId: res.data.public_id,
          newUrl: res.data.secure_url,
        });
      } else {
        window.alert("Ошибка сохранения");
      }
    }
  };

  const handlePick = () => {
    if (filePicker.current) filePicker.current.click();
  };

  return (
    <div className="w-full h-screen bg-[#e7ecfa]">
      <div className="flex items-center justify-center w-full h-full p-[20px] sm:pl-[20%]">
        <div className="flex flex-col items-center justify-center w-full sm:w-[360px] h-[600px] rounded-xl p-10 bg-slate-600">
          <div>
            <input
              className="hidden"
              onChange={updatePhoto}
              ref={filePicker}
              type="file"
              name="file"
              id="file"
              accept="image/*,.png,.jpg,.web"
            />
            <div className="flex items-center justify-center w-full h-full">
              <Image
                className="w-[150px] h-[150px] object-cover cursor-pointer rounded-[100%] "
                src={data.user.userPhoto.url || empty}
                alt="pick"
                onClick={handlePick}
                width={150}
                height={150}
                priority
              />
            </div>
          </div>
          {data.user.userInfo.map((item: IUserInfo, id: number) => (
            <UerInfoList item={item} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
