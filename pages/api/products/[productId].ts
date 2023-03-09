import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/utils/connectdb";
import { getProductById } from "@/services/PRODUCTService";


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await connectToDatabase();
    const id = req.query.productId;
    const method = req.method;
    let result;
    switch(method) {
        case 'GET':
            result = await getProductById(id as any);

            res
            .status(200)
            .json(result);
            break;
    }
}