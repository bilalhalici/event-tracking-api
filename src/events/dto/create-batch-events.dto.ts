import { IsString, IsOptional, IsObject, IsISO8601 } from 'class-validator';
import { EventName } from '../enums/event-name.enum';
import { IsEnum } from 'class-validator';

export class EventItemDto {
  @IsString()
  userId: string;

  @IsEnum(EventName)
  eventName: EventName;

  @IsOptional()
  @IsObject()
  properties?: Record<string, any>;

  @IsOptional()
  @IsISO8601()
  timestamp?: string;
}
