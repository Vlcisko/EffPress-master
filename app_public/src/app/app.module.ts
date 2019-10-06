import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {SharedModule} from './shared/shared.module';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { FrameworkComponent } from './framework/framework.component';
import { PdfViewerHhangularComponent } from './pdf-viewer-hhangular/pdf-viewer-hhangular.component';
import { PdfPageViewComponent } from './pdf-page-view/pdf-page-view.component';
import { OverviewComponent } from './page-panel/overview/overview.component';
import { CommentsComponent } from './page-panel/comments/comments.component';
import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { PagePanelComponent } from './page-panel/page-panel.component';
import { RegisterComponent } from './register/register.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { LoginComponent } from './login/login.component';

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
    PdfViewerComponent,
    OverviewComponent,
    CommentsComponent,
    RatingStarsComponent,
    PagePanelComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
