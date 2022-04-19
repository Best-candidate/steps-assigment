import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor( private postsService: PostsService) {}

    @Get()
    async getPosts(
        @Body('start') postStart: number,
        @Body('limit') postLimit: number
    ) {
        return await this.postsService.getPosts(postStart, postLimit)
    }

    @Get('postsnumber')
    async getPostNumber() {
        return this.postsService.getPostsNumber()
    }

    @Post()
    async insertPost(
        @Body('title') postTitle: string,
        @Body('content') postContent: string
    ) {
        return await this.postsService.insertPost(postTitle, postContent)
    }
}
