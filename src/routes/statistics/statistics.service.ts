import { HttpService } from '@nestjs/axios';
import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Creator } from 'src/schemas/creator.schema';
import { Post } from 'src/schemas/post.schema';


@Injectable()
export class StatisticsService {
    constructor (
        @InjectModel('Creator') private creatorModel: Model<Creator>,
        @InjectModel('Post') private postModel: Model<Post>,
        private http: HttpService
        ) {}
    
    async getTopCreators() {
        return await this.creatorModel.find().sort({postNumber: -1}).limit(10)
    }

    async getRuntimes() {
        const runtimes = {
            insertPostRuntime: await this.calculateInsertPostRuntime(),
            getPostsRuntime: await this.calculateGetPostsRuntime()
        }
        await this.cleanup()
        return runtimes
    }

    private async calculateInsertPostRuntime() {
        const startTime = new Date().getTime()
        for (let i = 0; i < 6; i++) {
            await this.http.post('http://localhost:3000/posts',
                {
                    title: "TEST",
	                content: "test runtime",
	                creatorId: "625e9759422bac8c08d95e1a"
                }).toPromise()
            if ( i == 5 )
                return (new Date().getTime() - startTime) / 5000
        }
    }

    private async calculateGetPostsRuntime() {
        const startTime = new Date().getTime()
        for (let i = 0; i < 6; i++) {
            await this.http.post('http://localhost:3000/posts/internal',
                {
                    start: 0,
	                limit: 10,
                }).toPromise()
            if ( i == 5 )
                return (new Date().getTime() - startTime) / 5000
        }
    }

    //Remove created posts and reset postNumber counter 
    private async cleanup() {
        await this.postModel.deleteMany({title: "TEST"})
        await this.creatorModel.updateOne({_id: "625e9759422bac8c08d95e1a"}, {postNumber: 0})
    }
}
