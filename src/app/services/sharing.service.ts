import { Injectable } from '@angular/core';

@Injectable()
export class SharingService {
  storageName = 'Settings';

  constructor() { }

  setSettings(data: any) {
    localStorage.setItem(this.storageName, JSON.stringify(data));
  }

  getUserSettings() {
    const data = localStorage.getItem(this.storageName);
    return JSON.parse(data);
  }

  clearUserSettings() {
    localStorage.removeItem(this.storageName);
  }

  cleanAll() {
    localStorage.clear();
  }

}
