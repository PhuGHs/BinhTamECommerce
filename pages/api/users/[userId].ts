import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/utils/interfaces";
import { ProductModel } from "@/models/Product";
import { connectToDatabase } from "@/utils/connectdb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectToDatabase();
        if(req.method === 'POST') {
            const data : IProduct[] = await ProductModel.find({});

            res.status(200).json(data);
        }
    } catch(e) {
        console.log(e);
    }
}