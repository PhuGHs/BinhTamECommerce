import { Document, ObjectId } from "mongodb"

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
    isSelected: boolean,
}

export interface ICategory extends Document {
    name: string
}

export interface IUser extends Document{
    name: string,
    email: string,
    password: string,
    role: string,
    address: string,
    orders: Array<string>
}

export interface IOrder extends Document {
    user: ObjectId,
    status: string,
    items: [
        {
            product: ObjectId,
            quantity: number,
            price: number
        }
    ],
    total: number
}

export interface ITransactions extends Document {
    user: ObjectId,
    order: ObjectId,
    amount: number,
    status: string,
}

export interface UserData {
    errCode: number,
    message: string,
    user?: IUser
}