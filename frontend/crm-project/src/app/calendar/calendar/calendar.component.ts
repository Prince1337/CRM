import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  currentMonth: string;
  daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  dates: Date[] = [];
  selectedDate!: Date;
  events: Date[] = [
    new Date('2023-04-01'),
    new Date('2023-04-05'),
    new Date('2023-04-10'),
    new Date('2023-04-15')
  ];

  constructor() {
    this.currentMonth = this.formatMonth(new Date());
    this.generateCalendar();
  }

  formatMonth(date: Date): string {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[date.getMonth()] + ' ' + date.getFullYear();
  }

  generateCalendar(): void {
    const startDate = new Date(this.currentMonth);
    startDate.setDate(1);
    const endDate = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
    const numOfDays = endDate.getDate();

    const dates = [];
    for (let i = 1; i <= numOfDays; i++) {
      const date = new Date(startDate.getFullYear(), startDate.getMonth(), i);
      dates.push(date);
    }
    this.dates = dates;
  }

  prev(): void {
    const prevMonth = new Date(this.currentMonth);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    this.currentMonth = this.formatMonth(prevMonth);
    this.generateCalendar();
  }

  next(): void {
    const nextMonth = new Date(this.currentMonth);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    this.currentMonth = this.formatMonth(nextMonth);
    this.generateCalendar();
  }

  isToday(date: Date): boolean {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  isSelected(date: Date): boolean {
    if (!this.selectedDate) {
      return false;
    }
    return date.toDateString() === this.selectedDate.toDateString();
  }

  hasEvent(date: Date): boolean {
    return this.events.some(eventDate => eventDate.toDateString() === date.toDateString());
  }

  isOtherMonth(date: Date): boolean {
    return date.getMonth() !== new Date(this.currentMonth).getMonth();
  }

  selectDate(date: Date): void {
    this.selectedDate = date;
  }
}
