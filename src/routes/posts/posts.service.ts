import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/posts.schema';

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private postModel: Model<Post>) {}

    async insertPost(title: string, content: string): Promise<string> {
        const newPost = new this.postModel({ title: title, content: content })
        const result = await newPost.save();

        return result.id as string;
    }

    async getPosts(start: number, limit: number) {
        return this.postModel.find().sort({_id: 1}).skip(start).limit(limit)
    }
}
