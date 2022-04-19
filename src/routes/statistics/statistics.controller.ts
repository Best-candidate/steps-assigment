import { Controller, Get } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {
    constructor ( private statisticsService: StatisticsService) {}

    @Get('topcreators')
    async getTopCreators() {
        return await this.statisticsService.getTopCreators()
    }

    @Get('runtimes')
    async getRuntime() {
        return await this.statisticsService.getRuntimes()
    }
}
