import { NextApiRequest, NextApiResponse } from "next";
import { UserModel } from "@/models/User";
import { connectToDatabase } from "@/utils/connectdb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    try {
        if(req.method === 'POST') {
            const {name, email, password} = req.body;
            const userInfo = new UserModel({
                name,
                email,
                password
            });
            await userInfo.save();
        }
        res.status(200).json({message: 'create new user successfully'});
    } catch(error) {
        console.log(error);
    }
}
