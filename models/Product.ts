import mongoose, { model, Model, models } from "mongoose";
import { IProduct } from "@/utils/interfaces";

const productSchema = new mongoose.Schema<IProduct>({
    id: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    imgURL: {
        type: String,
        required: true,
    }, 
    imageList: [{type: String, required: true}]
    ,
    productName: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    typeOfProduct: {
        type: String,
        required: true,
    },
    inStock: {
        type: Number,
    },
    sold: {
        type: Number,
    }
}, {
    timestamps: true,
}
)

export const ProductModel : Model<IProduct> = models.product || model<IProduct>('product', productSchema) ;

