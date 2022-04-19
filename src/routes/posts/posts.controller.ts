import { Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor( private postsService: PostsService) {}

    @Get()
    getPosts(): any {
        return null
    }

    @Post()
    insertPost(): any {
        return null
    }
}
