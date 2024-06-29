import { getAllContent } from "../services/contentService";
import { NextRequest, NextResponse } from 'next/server';


export const getContent = async () => {
    try {
        const content = await getAllContent()
        return content
    } catch (err) {
        if (err instanceof Error) {
            throw new Error("Failed to fetch user!");
        } else {
            console.log('Unexpected error', err);
        }
    }
}