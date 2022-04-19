import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
    constructor ( private statisticsService: StatisticsService) {}

    @Get('topcreators')
    async getTopCreators() {
        return await this.statisticsService.getTopCreators()
    }
}
