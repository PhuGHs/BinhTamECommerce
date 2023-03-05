import mongoose, { model, Model, models } from "mongoose";
import { IOrder } from '@/utils/interfaces';
import { ObjectId } from "mongodb";

const UserSchema = new mongoose.Schema<IOrder>({
    user: {
        type: ObjectId,
        required: true,
    },
    status: {
        type: String,
        default: 'Pending'
    },
    items: [
        {
            product: {
                type: ObjectId,
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
        }
    ],
    total: {
        type: Number,
        required: true,
    }
}, {
    timestamps: true,
})

export const OrderModel : Model<IOrder> = models.user || model<IOrder>('orders', UserSchema);