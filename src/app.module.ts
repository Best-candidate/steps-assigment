import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './routes/posts/posts.module';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.g5nob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
