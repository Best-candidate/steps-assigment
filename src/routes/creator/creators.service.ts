import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Creator } from 'src/schemas/creator.schema';

@Injectable()
export class CreatorsService {
    constructor (@InjectModel('Creator') private creatorModel: Model<Creator>) {}

    async incrementPostNumber(id: string) {
        const creator = await this.creatorModel.findById(id)
        const newPostNumber = ++creator.postNumber

        return await this.creatorModel.updateOne({ id }, { postNumber: newPostNumber })
    }   
}
