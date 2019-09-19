import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {SharedModule} from './shared/shared.module';

import { PanelRoutingModule } from './page-panel/panel-routing/panel-routing.module';

import { FrameworkComponent } from './framework/framework.component';
import { PdfViewerHhangularComponent } from './pdf-viewer-hhangular/pdf-viewer-hhangular.component';
import { PdfPageViewComponent } from './pdf-page-view/pdf-page-view.component';
import { OverviewComponent } from './page-panel/overview/overview.component';
import { CommentsComponent } from './page-panel/comments/comments.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { PagePanelComponent } from './page-panel/page-panel.component';
import { InsertPanelComponent } from './page-panel/insert-panel/insert-panel.component';

/* pouzitie mozilla pdf.js- s komponentom pdf-viewer
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';

@NgModule({
  declarations: [
    PdfViewerComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
*/

@NgModule({
  declarations: [
    FrameworkComponent,
    PdfViewerHhangularComponent,
    PdfPageViewComponent,
    OverviewComponent,
    CommentsComponent,
    RatingStarsComponent,
    PagePanelComponent,
    InsertPanelComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    PanelRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
