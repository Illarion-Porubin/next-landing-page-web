"use client"

import { IUser, IUserForm } from "../../../types";
import React from "react";
import acept from "../../../../public/dashboard/png/check.png";
import clear from "../../../../public/dashboard/svg/delete.svg";
import Image from "next/image";


interface Props {
  item: IUserForm;
  saveData: (data: IUserForm) => void;
}

export const UerInfoList: React.FC<Props> = ({ item, saveData }) => {
  const [userValue, setUserValue] = React.useState<IUserForm>(item);

    return (
      <>
        <label className="flex flex-col text-white relative w-full h-auto">
          <button className={`absolute right-8 top-[-4px] ${userValue.value !== item.value ? "opacity-1" : "opacity-0"}`} onClick={() => saveData(userValue)}>
            <Image className="w-[24px]" src={acept} alt="acept" />
          </button>
          <button className={`absolute right-0 top-[-4px] ${userValue.value !== item.value ? "opacity-1" : "opacity-0"}`}>
            <Image className="w-[24px]" src={clear} alt="clear" />
          </button>
          <span className="text-sm text-slate-300 mb-1">{userValue.label}</span>
          <input
            className="w-full h-[28px] mb-4 text-black "
            type="text"
            value={userValue.value}
            onChange={(e) =>
              setUserValue({ ...userValue, value: e.target.value })
            }
          />
        </label>
      </>
    );
};
