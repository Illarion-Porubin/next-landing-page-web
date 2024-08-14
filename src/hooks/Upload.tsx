
import axios from 'axios';
import React from 'react'
import { useAddPictureMutation, useUpdatePictureMutation, useUpdateServiceMutation } from '@/lib/redux';
import { ICloudinary } from '@/types';


interface Props {
    filePicker: React.RefObject<HTMLInputElement>;
    page?: string;
    content?: string;
    contentId?: string;
    sectionId?: string;
    oldPubId?: string;
    opiration?: string;
}


export const Upload = ({...props}: Props) => {
    const [addPicture] = useAddPictureMutation();
    const [updatePicture] = useUpdatePictureMutation();
    const [updateService] = useUpdateServiceMutation();
    const {page, sectionId, content, contentId, oldPubId, opiration} = {...props};

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files) {
            const formData = new FormData();
            formData.append("file", target.files[0]);
            formData.append("upload_preset", "od0cmi2t");
            const postImg = async () => {
                switch(opiration) {
                    case "add":
                        try {
                            const res:ICloudinary = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                            if (res.status === 200 && page && sectionId && content) {
                                addPicture({page, sectionId: sectionId, content, value: res.data.secure_url, newPubId: res.data.public_id})
                            }
                            else{
                                alert("Ошибка добавления")
                            }
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    case "updateService":
                        try {
                            const res:ICloudinary = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                            if (res.status === 200 && page && sectionId && content && contentId && oldPubId) {
                                updateService({action: "updateService", page, sectionId, contentId, value: res.data.secure_url, oldPubId, newPubId: res.data.public_id,})
                            }
                            else{
                                alert("Ошибка добавления")
                            }
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                    default: 
                        try {
                            const res:ICloudinary = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                            if (res.status === 200 && page && sectionId && content && contentId && oldPubId) {
                                updatePicture({action: "updatePhoto", page, sectionId, content, contentId, value: res.data.secure_url, oldPubId, newPubId: res.data.public_id})
                            }
                            else{
                                alert("Ошибка изменения")
                            }
                        } catch (error) {
                            console.log(error);
                        }
                        break;
                }
            }
            postImg()
        }
    };

    const handlePick = () => {
        if (props.filePicker.current) props.filePicker.current.click();
    };

    return {
        upload: {
            handleChange,
            handlePick
        }
    }
}
