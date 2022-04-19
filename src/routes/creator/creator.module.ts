import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorSchema } from 'src/schemas/creator.schema';
import { CreatorService } from './creator.service';
import { CreatorController } from './creator.controller';

@Module({
  imports : [MongooseModule.forFeature([{ name: 'Creator', schema: CreatorSchema }])],
  providers: [CreatorService],
  controllers: [CreatorController]
})
export class CreatorModule {}
