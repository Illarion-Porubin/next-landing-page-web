import axios from 'axios';
import React from 'react'

interface Props {
    filePicker: React.RefObject<HTMLInputElement>
}

export const Upload = ({...props}: Props) => {

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        if (target.files) {
            const formData = new FormData();
            formData.append("file", target.files[0]);
            formData.append("upload_preset", "od0cmi2t");
            const postImg = async () => {
                try {
                    const res = await axios.post("https://api.cloudinary.com/v1_1/dnyxxxt88/upload", formData);
                    // пушим новую фотку в базу данных
                    if (res.status === 200) {
                        // удаляем старое фото
                        console.log(res);
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
