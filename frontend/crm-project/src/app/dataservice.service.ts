import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  saveData(array: any, STORAGE_KEY: string): void {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(array));
  }

  getData(STORAGE_KEY: string): any[] {
    const dataString = sessionStorage.getItem(STORAGE_KEY);
    if (dataString) {
      return JSON.parse(dataString);
    } else {
      return [];
    }
  }
}
