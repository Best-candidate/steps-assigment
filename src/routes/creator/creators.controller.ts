import { Body, Controller, Post } from '@nestjs/common';
import { CreatorsService } from './creators.service';

@Controller('creators')
export class CreatorsController {
    constructor( private creatorsService: CreatorsService ) {}

    @Post()
    async incrementPostNumber(
        @Body('creatorId') creatorId: string
    ) {
        return await this.creatorsService.incrementPostNumber(creatorId)
    }
}
