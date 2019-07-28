import {Component,  OnInit, OnDestroy} from '@angular/core';
import {FeedEntry} from '../../models/feed-entry';
import {FeedService} from '../../services/feed.service';
import { delay } from 'rxjs/internal/operators';

import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-rss-feed',
  templateUrl: './rss-feed.component.html',
  styleUrls: ['./rss-feed.component.css']
})
export class RssFeedComponent implements OnInit, OnDestroy {
  url: string;
  title: string;
  subscription;
  feeds: FeedEntry[];
  constructor(private feedService: FeedService, private data: DataService) { }

  ngOnInit() {
    this.subscription = this.data.getUrl().subscribe(
      res => {
        this.url = res;
        this.refreshFeed();
      },
      err => {
        console.error(`An error occurred: ${err.message}`);
      }
    );
  }
  refreshFeed() {
    const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
    if (this.feeds) {
      this.feeds.length = 0;
    }


    this.feedService.getFeedContent(CORS_PROXY + this.url).pipe(delay(500))
      .subscribe(
        feed => {
          this.title = feed.rss.channel.description;
          this.feeds = feed.rss.channel.item;
        } ,
        error => console.log(error));
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
