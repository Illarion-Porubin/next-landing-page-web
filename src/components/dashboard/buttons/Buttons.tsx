import React from "react";
import acept from "../../../../public/dashboard/png/check.png";
import clear from "../../../../public/dashboard/svg/delete.svg";
import Image from "next/image";

interface Props {
    saveData: () => void;
    returneData: () => void;
    newValue: string;
    pastValue: string;
}

const Buttons:React.FC<Props> = ({saveData, returneData, newValue, pastValue}) => {
  return (
    <>
        <button className={`absolute right-8 top-[-30px] ${newValue !== pastValue ? "opacity-1" : "opacity-0"}`} onClick={saveData}>
            <Image className="w-[24px]" src={acept} alt="acept" />
        </button>
        <button className={`absolute right-0 top-[-30px] ${newValue !== pastValue ? "opacity-1" : "opacity-0"}`} onClick={returneData}>
            <Image className="w-[24px]" src={clear} alt="clear" />
        </button>
    </>
  );
};

export default Buttons;
