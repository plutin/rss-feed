import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {MessageModule} from 'primeng/message';

import { AppComponent } from './app.component';
import { UrlsComponent } from './components/urls/urls.component';
import { UrlSearchComponent } from './components/url-search/url-search.component';
import { SharingService } from './services/sharing.service';
import { RssFeedComponent } from './components/rss-feed/rss-feed.component';
import {FeedService} from './services/feed.service';
import {HttpClientModule} from '@angular/common/http';
import {DataService} from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    UrlsComponent,
    UrlSearchComponent,
    RssFeedComponent
  ],
  imports: [
    BrowserModule,
    CardModule,
    HttpClientModule,
    ProgressSpinnerModule,
    ButtonModule,
    InputTextModule,
    MessageModule
  ],
  providers: [SharingService, FeedService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
