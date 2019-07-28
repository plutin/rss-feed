import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import {Url} from '../../models/url';
import {SharingService} from '../../services/sharing.service';
import {DataService} from '../../services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-urls',
  templateUrl: './urls.component.html',
  styleUrls: ['./urls.component.css']
})
export class UrlsComponent implements OnInit, OnDestroy {
  urls: Url[];
  selectedUrl: Url;
  subscription;
  constructor( private sharingService: SharingService, private data: DataService ) { }

  ngOnInit() {
    this.getUrls();
    this.subscription = this.data.getUrlListStatus().subscribe(
      res => {
         if (res) {
           this.getUrls();
         }
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }

  getUrls(): void {
    this.urls = this.sharingService.getUserSettings() || [];
    this.selectedUrl = _.find(this.urls, {selected: true });
    if (this.selectedUrl) {
      this.data.setUrl(this.selectedUrl.url);
    }
  }

  delete(url: Url): void {
    this.urls = this.urls.filter(h => h !== url);
    this.urls[0].selected = true;
    this.sharingService.setSettings( this.urls);
    this.data.setUrl(this.urls[0].url);
  }

  selectUrl(index: number) {
    this.selectedUrl.selected = false;
    // Update urls Array with new values, save it to localStorage and update Behaviour Subject
    this.urls.map( obj => {
      obj.selected = false;
    });
    this.urls[index].selected = true;
    this.selectedUrl = this.urls[index] ;
    this.sharingService.setSettings( this.urls);

    this.data.setUrl(this.selectedUrl.url);

  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }



}
