import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostsController } from './posts.controller';
import { Post, PostSchema } from '../../schemas/posts.schema';
import { PostsService } from './posts.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostsModule {

}
