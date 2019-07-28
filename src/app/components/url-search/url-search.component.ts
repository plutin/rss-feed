import { Component, OnInit } from '@angular/core';
import {Url} from '../../models/url';
import {SharingService} from '../../services/sharing.service';
import {DataService} from '../../services/data.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-url-search',
  templateUrl: './url-search.component.html',
  styleUrls: ['./url-search.component.css']
})
export class UrlSearchComponent implements OnInit {
  urls: Url[];
  constructor( private sharingService: SharingService, private data: DataService) { }

  ngOnInit() {
    this.urls = this.sharingService.getUserSettings() || [];
  }

  addUrl(searchTerm: HTMLInputElement) {
    if (searchTerm.value !== '') {
      if (_.find(this.urls, {url: searchTerm.value.trim()})) {
        alert('URL already exists. Please enter different RSS feed URL');
      } else {
        const urlObj = {url: searchTerm.value, selected: true};
        // here we can validate rss feed url and add it to existing urls
        if (true) {
          if (this.urls.length > 0) {
            _.find(this.urls, {'selected': true}).selected = false;
          }
          this.urls.unshift(urlObj);
          this.sharingService.setSettings(this.urls);
          this.data.updateUrlListStatus(true);
        }
      }
    }
  }

}
