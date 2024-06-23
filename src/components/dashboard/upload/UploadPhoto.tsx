import React from "react";
import add from "../../../../public/dashboard/svg/add.svg";
import Image from "next/image";
import { IUpload } from "../../../types";
import { Upload } from "@/hooks/Upload";


interface Props {
    useFetch: string
}

export const UploadPhoto:React.FC<Props> = ({useFetch}) => {
    const filePicker = React.useRef<HTMLInputElement>(null);
    const { upload }: IUpload = Upload({ filePicker });

    return (
        <article className="w-[220px] h-[220px]">
        <input
            className="hidden"
            onChange={upload.handleChange}
            ref={filePicker}
            type="file"
            name="file"
            id="file"
            accept="image/*,.png,.jpg,.web"
        />
        <div className="flex items-center justify-center w-full h-full">
            <Image
            className="w-[100px] h-auto object-cover cursor-pointer"
            src={add}
            alt="pick"
            onClick={upload.handlePick}
            />
        </div>
        </article>
    );
};
