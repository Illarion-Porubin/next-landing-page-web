"use server"

import { getContent } from "@/lib/server/data"



export const Content = async () => {
    const res = await getContent()
    return JSON.parse(JSON.stringify(res))
}