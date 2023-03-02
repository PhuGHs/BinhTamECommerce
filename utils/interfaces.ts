import { Document } from "mongodb"

export interface IProduct extends Document {
    id: string,
    imgURL: string,
    imageList: Array<string>
    productName: string,
    price: number,
    category: string,
    typeOfProduct: string,
    inStock: number,
    sold: number,
}

export interface CartState {
    items: Array<IOrderingProduct>,
    totalQuantity: number,
    changed: boolean,
}

export interface IOrderingProduct extends Document {
    id: string,
    img: string,
    productName: string,
    price: number,
    totalPrice: number,
    quantity: number,
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