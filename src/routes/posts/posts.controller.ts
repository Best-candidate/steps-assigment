import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor( private postsService: PostsService) {}

    @Get()
    getPosts(): any {
        return null
    }

    @Post()
    async insertPost(
        @Body('title') postTitle: string,
        @Body('content') postContent: string
    ) {
        const id = await this.postsService.insertPost(postTitle, postContent)
        return id
    }
}
