"use server"

import { Project } from "../models/project-model";
import { connectToDb } from "..";
import * as cloudinary from 'cloudinary';



export const getProject = async () => {
    // noStore();
    connectToDb();
    const content = await Project.findOne();
    return JSON.parse(JSON.stringify(content));
};

export const updateProject = async (res: { page: string, sectionId: string, content: string, contentId: string, value: string, oldPubId: string, newPubId: string }) => {
    const { page, sectionId, content, contentId, value, newPubId, oldPubId } = { ...res };
    connectToDb();

    cloudinary.v2.config({
        cloud_name: 'dnyxxxt88',
        api_key: '119333622165115',
        api_secret: '-3emrravls_kI477oUJ3Wxrok2M',
        secure: true
    });

    try {
        const destroy = await cloudinary.v2.uploader.destroy(oldPubId);
        console.log(destroy, "destroy");
    } catch (error) {
        console.error(error);
    }

    const project = await Project.findOne();
    if (!project) {
        return false;
    }

    await project.updateOne(
        { $set: { [`${page}.${sectionId}.${content}.${contentId}`]: { url: value, public_id: newPubId } } }
    )

    const data = await Project.findOne()
    return { ...data._doc };
};

export const addPicture = async (res: { page: string, sectionId: string, content: string, value: string, newPubId: string }) => {
    connectToDb();
    const { page, sectionId, content, value, newPubId } = { ...res };

    const project = await Project.findOne();
    if (!project) {
        return false;
    }

    await project.updateOne(
        { $push: { [`${page}.${sectionId}.${content}`]: { url: value, public_id: newPubId } } },
        { new: true, useFindAndModify: false }
    )

    const data = await Project.findOne()
    return { ...data._doc };
}

export const deletePhotoAtIndex = async (res: { page: string, sectionId: number, content: string, contentId: string, oldPubId: string }) => {
    connectToDb();
    const { page, sectionId, content, contentId, oldPubId } = { ...res };

    cloudinary.v2.config({
        cloud_name: 'dnyxxxt88',
        api_key: '119333622165115',
        api_secret: '-3emrravls_kI477oUJ3Wxrok2M',
        secure: true
    });

    try {
        const destroy = await cloudinary.v2.uploader.destroy(oldPubId);
        console.log(destroy, "destroy");
    } catch (error) {
        console.error(error);
    }

    try {
        const project = await Project.findOne();
        if (!project) {
            return false;
        }

        await project.updateOne(
            { $unset: { [`${page}.${sectionId}.${content}.${contentId}`]: 1 } },
            { new: true, useFindAndModify: false }
        );

        // Step 2: Pull the null value from the array
        await project.updateOne(
            { $pull: { [`${page}.${sectionId}.${content}`]: null } }, 
            { new: true, useFindAndModify: false }
        );

        const data = await Project.findOne()
        return { ...data._doc };
    } catch (error) {
        console.error('Error deleting photo:', error);
    }
};