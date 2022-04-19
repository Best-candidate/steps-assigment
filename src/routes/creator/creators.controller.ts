import { Body, Controller, Post } from '@nestjs/common';
import { CreatorsService } from './creators.service';

@Controller('creator')
export class CreatorsController {
    constructor( private creatorsService: CreatorsService ) {}

}
