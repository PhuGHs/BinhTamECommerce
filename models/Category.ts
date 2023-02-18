import mongoose, { Model, model, models } from 'mongoose';
import { ICategory } from '@/utils/interfaces';

const CategorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true,
        trim: true,
    }
}, {
    timestamps: true,
})

export const CategoryModel : Model<ICategory> = models.category || model<ICategory>('category', CategorySchema);