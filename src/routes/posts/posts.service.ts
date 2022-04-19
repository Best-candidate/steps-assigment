import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/schemas/post.schema';

@Injectable()
export class PostsService {
    constructor(
        @InjectModel('Post') private postModel: Model<Post>,
        private http: HttpService
) {}

    async insertPost(title: string, content: string, creatorId: string): Promise<string> {
        const newPost = new this.postModel({ title: title, content: content, creatorId: creatorId })
        const result = await newPost.save();

        await this.http.post('http://localhost:3000/creators', { creatorId: creatorId }).toPromise()
        return result.id as string;
    }

    async getPosts(start: number, limit: number) {
        return this.postModel.find().sort({_id: 1}).skip(start).limit(limit)
    }
}



