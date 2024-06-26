"use server"

import { getContent } from "@/lib/data"



export const Content = async () => {
    const res = await getContent()
    return JSON.parse(JSON.stringify(res))
}