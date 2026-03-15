import { Controller, Post, Body } from '@nestjs/common';
import { EventsService } from './events.service';
import { BatchEventsDto } from './dto/batch-events.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('batch')
  ingestBatch(@Body() body: BatchEventsDto) {
    return this.eventsService.createBatch(body.events);
  }
}
