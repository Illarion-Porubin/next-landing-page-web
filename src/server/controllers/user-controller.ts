// import { NextApiRequest, NextApiResponse } from 'next';
// import { serialize } from 'cookie';
// import { registration } from "../services/userService";

// export const registUser = async (req: NextApiRequest, res: NextApiResponse) => {
//     try {
//         const userData = await registration(req.body);

        
          
//         return res.json(userData);
//     } catch (err) {
//         if (err instanceof Error) {
//             throw new Error("Failed to fetch user!");
//         } else {
//             console.log('Unexpected error', err);
//         }
//     }
// }