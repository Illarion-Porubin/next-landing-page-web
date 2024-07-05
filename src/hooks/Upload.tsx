
import axios from 'axios';
import React from 'react'
import { useCustomDispatch } from './store';
import { fetchUpdateProject, fetchAddPicture } from '@/lib/redux/slices/projectSlice';
// import { APIGatewayProxyHandler } from 'aws-lambda';


interface Props {
    filePicker: React.RefObject<HTMLInputElement>;
    page?: string;
    content?: string;
    contentId?: string;
    sectionId?: string;
    oldPubId?: string;
    opiration?: string;
}

interface ICloudinary {
    data: {
        public_id: string;
        version: number;
        signature: string;
        width: number;
        height: number;
        format: string;
        resource_type: string;
        created_at: string;
        tags: string[];
        bytes: number;
        type: string;
        etag: string;
        placeholder: boolean;
        url: string;
        secure_url: string;
        access_mode: string;
        original_filename: string;
        [key: string]: any; // for any additional properties
    },
    status: number;
}



export const Upload = ({...props}: Props) => {
    const {page, sectionId, content, contentId, oldPubId, opiration} = {...props};
    const dispatch = useCustomDispatch();


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files) {
            const formData = new FormData();
            formData.append("file", target.files[0]);
            formData.append("upload_preset", "od0cmi2t");
            const postImg = async () => {
                try {
                    if(opiration === "add"){
                        const res:ICloudinary = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                        if (res.status === 200 && page && sectionId && content) {
                            dispatch(fetchAddPicture({page, sectionId, content, value: res.data.secure_url, newPubId: res.data.public_id})) 
                        }
                        else{
                            alert("Ошибка добавления")
                        }
                    }
                    else{
                        const res:ICloudinary = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                        console.log(res.status === 200,  page , sectionId , content, contentId , oldPubId);
                        if (res.status === 200 && page && sectionId && content && contentId && oldPubId) {
                            dispatch(fetchUpdateProject({page, sectionId, content, contentId, value: res.data.secure_url, oldPubId, newPubId: res.data.public_id})) 
                        }
                        else{
                            alert("Ошибка изменения")
                        }
                    }
                } catch (error) {
                    console.error(error)
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
