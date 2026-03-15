import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { EventItemDto } from './create-batch-events.dto';

export class BatchEventsDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EventItemDto)
  events: EventItemDto[];
}
