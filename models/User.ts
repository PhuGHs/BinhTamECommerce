import mongoose, { model, Model, models } from "mongoose";
import { IUser } from '@/utils/interfaces';

const UserSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'user'
    },
    avatar: {
        type: String,
    }
}, {
    timestamps: true,
})

export const UserModel : Model<IUser> = models.user || model<IUser>('user', UserSchema);