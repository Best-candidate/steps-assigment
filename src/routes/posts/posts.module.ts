import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { PostSchema } from '../../schemas/post.schema';
import { PostsService } from './posts.service';
import { HttpModule } from '@nestjs/axios';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }]),
        HttpModule
    ],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {

}
