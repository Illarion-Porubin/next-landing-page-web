"use server"

import { registration } from "@/lib/data"



export const Registration = async (data: { email: string, password: string, securePass: string }) => {
    const res = await registration(data)
    // return JSON.parse(JSON.stringify(res))
}