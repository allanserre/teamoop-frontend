import { Pipe, PipeTransform } from '@angular/core';
import { DateHelper } from '../helpers/DateHelper';

@Pipe({
  name: 'elapsedTime',
  standalone: true,
})
export class ElapsedTimePipe implements PipeTransform {
  transform(date: string): string {
    return DateHelper.formatDateToElapsedTime(date);
  }
}
