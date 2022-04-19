import { Body, Controller, Post } from '@nestjs/common';
import { CreatorService } from './creator.service';

@Controller('creator')
export class CreatorController {
    constructor( private creatorService: CreatorService ) {}

    
}
