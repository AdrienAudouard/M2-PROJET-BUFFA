import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateTimeService {

  constructor() { }

  get todayDateTimelineFormat(): string {
    const date = new Date();

    return `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()}`;
  }
}
