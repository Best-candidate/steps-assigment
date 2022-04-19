import { Get, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Creator } from 'src/schemas/creator.schema';


@Injectable()
export class StatisticsService {
    constructor (@InjectModel('Creator') private creatorModel: Model<Creator>) {}

    async getTopCreators() {
        return await this.creatorModel.find().sort({postNumber: -1}).limit(10)
    }

}
