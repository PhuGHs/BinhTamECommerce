import { Document } from "mongodb"

export interface IProduct extends Document {
    id: string,
    imgURL: string,
    productName: string,
    price: Number,
    category: string,
    typeOfProduct: string,
    inStock: Number,
    sold: Number,
}

export interface ICategory extends Document {
    name: string
}

export interface IUser extends Document{
    name: string,
    email: string,
    password: string,
    role: string,
    avatar: string,
}