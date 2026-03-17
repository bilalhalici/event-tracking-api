import { Injectable } from '@nestjs/common';
import { EventItemDto } from './dto/create-batch-events.dto';
import { PrismaService } from '../prisma/prisma.service';
@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async createBatch(events: EventItemDto[]) {
    const eventNames = events.map((event) => event.eventName);

    await this.prisma.event.createMany({
      data: events.map((event) => ({
        userId: event.userId,
        eventName: event.eventName,
        properties: event.properties ?? {},
      })),
    });

    return {
      message: 'Events stored successfully',
      count: events.length,
      eventTypes: [...new Set(eventNames)],
    };
  }

  async getEvents(page: number, limit: number, eventName?: string) {
    const skip = (page - 1) * limit;

    const events = await this.prisma.event.findMany({
      where: eventName ? { eventName } : undefined,
      skip,
      take: limit,
      orderBy: {
        createdAt: 'desc',
      },
    });

    const total = await this.prisma.event.count({
      where: eventName ? { eventName } : undefined,
    });

    return {
      data: events,
      page,
      limit,
      count: events.length,
      total,
    };
  }
}
