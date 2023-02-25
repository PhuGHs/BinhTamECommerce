import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/utils/interfaces";
import { ProductModel } from "@/models/Product";
import { connectToDatabase } from "@/utils/connectdb";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    const id = req.query.id;
    const data : IProduct | null = await ProductModel.findOne({id: id});
    if(!data) {
        res.status(401).json({message: 'does not exist product with id = ' + id})
    }
    res.status(200).json(data);
}
