import mongoose from 'mongoose';
import { CreatorSchema } from './creator.schema';

export const PostSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    creatorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Creator' }
  });


export interface Post extends mongoose.Document{
    id: string;
    title: string;
    content: string;
    creatorId: string;
} 