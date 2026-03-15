import { Injectable } from '@nestjs/common';
import { EventItemDto } from './dto/create-batch-events.dto';

@Injectable()
export class EventsService {
  createBatch(events: EventItemDto[]) {
    const eventNames = events.map((event) => event.eventName);

    return {
      message: 'Events processed successfully',
      count: events.length,
      eventTypes: [...new Set(eventNames)],
    };
  }
}
