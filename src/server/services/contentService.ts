"use server"


import { Content } from "../models/content-model";
import { connectToDb } from "..";


export const getAllContent = async () => {
    // noStore();
    connectToDb();
    const content = await Content.findOne();
    return JSON.parse(JSON.stringify(content));
};

export const updateUserContent = async (req: { value: string, label: string }) => {
    connectToDb();
    const content = await Content.findOne();
    if (!content) {
        return false;
    }
    await content.updateOne({ user: { ...content.user, [`${req.label}`]: req.value } })
    const data = await Content.findOne()
    return {...data._doc};
};
