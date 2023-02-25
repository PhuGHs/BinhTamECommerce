import { NextApiRequest, NextApiResponse } from "next";
import { IProduct } from "@/utils/interfaces";
import { ProductModel } from "@/models/Product";
import { connectToDatabase } from "@/utils/connectdb";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    const data : IProduct[] = await ProductModel.find({}, {id: 1});

    res.status(200).json(data);
}
