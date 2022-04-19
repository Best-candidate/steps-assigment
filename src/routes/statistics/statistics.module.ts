import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CreatorSchema } from 'src/schemas/creator.schema';
import { StatisticsController } from './statistics.controller';
import { StatisticsService } from './statistics.service';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Creator', schema: CreatorSchema }]),
        HttpModule
    ],
    controllers: [StatisticsController],
    providers: [StatisticsService],
})
export class StatisticsModule {}
