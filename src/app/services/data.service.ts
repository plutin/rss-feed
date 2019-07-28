import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class DataService {

  private urlSelection = new BehaviorSubject('Search RSS Feed URL');
  currentUrl = this.urlSelection.asObservable();

  private listUpdated = new BehaviorSubject(false);
  currentState = this.listUpdated.asObservable();

  constructor() { }
  getUrl() {
    return this.currentUrl;
  }

  setUrl(url: string) {
    this.urlSelection.next(url);
  }

  updateUrlListStatus(updated: boolean) {
    this.listUpdated.next(updated);
  }

  getUrlListStatus() {
    return this.currentState;
  }
}
