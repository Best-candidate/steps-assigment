import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorSchema } from 'src/schemas/creator.schema';
import { CreatorsService } from './creators.service';
import { CreatorsController } from './creators.controller';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'Creator', schema: CreatorSchema }])],
  providers: [CreatorsService],
  controllers: [CreatorsController]
})
export class CreatorsModule {}
