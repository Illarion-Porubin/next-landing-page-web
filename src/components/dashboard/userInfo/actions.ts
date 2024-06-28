// 'use server'

// import { getContent, getUsers, updateContent, updateUser } from "@/lib/server/data";

 
// export const Users = async () => {
//     const data = await getUsers() 
//     return JSON.parse(JSON.stringify(data))
// };

// export const Update = async (data: { email: string, password: string }) => {
//     const res = await updateUser(data)
//     return JSON.parse(JSON.stringify(res))
// }

// export const UContent = async (data: { value: string | undefined, label: string }) => {
//     const res = await updateContent(data)
//     return JSON.parse(JSON.stringify(res))
// }

// export const Content = async () => {
//     const res = await getContent()
//     return JSON.parse(JSON.stringify(res))
// }