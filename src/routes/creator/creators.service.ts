import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Creator } from 'src/schemas/creator.schema';

@Injectable()
export class CreatorsService {
    constructor (@InjectModel('Post') private creatorModel: Model<Creator>) {}

}
