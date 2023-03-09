import { ProductModel } from "@/models/Product";
import { connectToDatabase } from "@/utils/connectdb"
import { IProduct } from "@/utils/interfaces";

const getProducts = async () => {
    try {
        await connectToDatabase();
        const data : IProduct[] = await ProductModel.find({});
        return data;
    } catch(e) {
        console.log(e);
    }
}

const getProductById = async (id : string) => {
    try {
        await connectToDatabase();
        const data : IProduct | null = await ProductModel.findOne({id: id});
        return data;
    } catch (e) {
        console.log(e);
    }
}

export {
    getProducts,
    getProductById
}