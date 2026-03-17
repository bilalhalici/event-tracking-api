import { Controller, Post, Body, Get, UseGuards, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { BatchEventsDto } from './dto/batch-events.dto';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { GetEventsQueryDto } from './dto/get-events-query.dto';
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post('batch')
  ingestBatch(@Body() body: BatchEventsDto) {
    return this.eventsService.createBatch(body.events);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getEvents(@Query() query: GetEventsQueryDto) {
    return this.eventsService.getEvents(
      query.page,
      query.limit,
      query.eventName,
    );
  }
}
