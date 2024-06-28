import { connectToDb } from "..";
import { Content } from "../models/content-model";
import { userService } from "../services/userService";


class ContentController {
    async getContent() {
        // noStore();
        try {
            connectToDb();
            const content = await Content.findOne();
            return content;
        } catch (err) {
            if (err instanceof Error) {
                throw new Error("Failed to fetch user!");
            } else {
                console.log('Unexpected error', err);
            }
        }
    };

    async updateUserContent(data: { value: string | undefined, label: string }) {
        try {
            connectToDb();
            const content = await Content.findOne();
            if (!content) {
                return 'Не найдено'
            }
            await content.updateOne({ user: { ...content.user, [`${data.label}`]: data.value } })
            return await Content.findOne()
        } catch (err) {
            console.log(err);
            // throw new Error("Failed to fetch user!");
        }
    };
}

export const contentController = new ContentController