import axios from 'axios';
import React from 'react'

interface Props {
    filePicker: React.RefObject<HTMLInputElement>;
    mark: string;
    type: string;
    id: number;
}

export const Upload = ({...props}: Props) => {
    const createKey = `${props.mark}[${props.id}].${props.type}`;

    // console.log(props.mark[id]);


    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files) {
            const formData = new FormData();
            formData.append("file", target.files[0]);
            // formData.append("upload_preset", "od0cmi2t");
            console.log(formData);
            const postImg = async () => {
                try {
                    const res = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                    if (res.status === 200) {
                        console.log(res);
                        // пушим новую фотку в базу данных
                        // удаляем старое фото
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
