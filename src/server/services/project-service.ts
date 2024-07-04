"use server"

import { Project } from "../models/project-model";
import { connectToDb } from "..";


export const getProject = async () => {
    // noStore();
    connectToDb();
    const content = await Project.findOne();
    return JSON.parse(JSON.stringify(content));
};

export const updateImages = async (req: any) => {
    const mark = 'main';
    const id = 0;
    const label = "photoSlider";
    const value = "test";

    connectToDb();
    const content = await Project.findOne();
    if (!content) {
        return false;
    }
    await content.updateOne({ [`${mark}${[id]}`]: {[`${label}${[id]}`]: value} })
    const data = await Project.findOne()
    return {...data._doc};
};


