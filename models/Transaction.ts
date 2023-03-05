import mongoose, { model, Model, models } from "mongoose";
import { ITransactions } from '@/utils/interfaces';
import { ObjectId } from "mongodb";

const UserSchema = new mongoose.Schema<ITransactions>({
    user: {
        type: ObjectId,
        required: true,
    },
    order: {
        type: ObjectId,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "Pending"
    }
}, {
    timestamps: true,
})

export const TransactionModel : Model<ITransactions> = models.user || model<ITransactions>('transactions', UserSchema);