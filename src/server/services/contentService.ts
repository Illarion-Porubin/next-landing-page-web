"use server"


import { Content } from "../models/content-model";
import { connectToDb } from "..";


export const getAllContent = async () => {
    // noStore();
    connectToDb();
    const content = await Content.findOne();
    return JSON.parse(JSON.stringify(content));
};

export const updateUserContent = async (data: { value: string | undefined, label: string }) => {
    connectToDb();
    try {
        const content = await Content.findOne();
        if (!content) {
            throw new TypeError("Request error!");
        }
        await content.updateOne({ user: { ...content.user, [`${data.label}`]: data.value } })
        return await Content.findOne()
    } catch (error) {
        if (error instanceof TypeError) {
            throw new TypeError("Failed to fetch user!");
        } else {
            console.log('Unexpected error', error);
        }
    }
};
