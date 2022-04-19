import mongoose from "mongoose";

export const CreatorSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    postNumber: { type: Number, required: true },
    posts: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }
  });


export interface Creator extends mongoose.Document{
    id: string;
    fullName: string;
    postNumber: number;
} 