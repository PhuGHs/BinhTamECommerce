import { NextApiRequest, NextApiResponse } from "next";
import { UserData } from "@/utils/interfaces";
import { connectToDatabase } from "@/utils/connectdb";
import { handleUserLogin } from "@/services/USERService";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase();
        if(req.method === 'POST') {
            const {email, password} = req.body;
            const userData = await handleUserLogin(email, password) as UserData;
            return res.status(200).json({
                errCode: userData.errCode,
                message: userData.message,
                user: userData ? userData.user : {}
            })
        }
    } catch(e) {
        console.log(e);
    }
}