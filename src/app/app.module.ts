import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NglModule } from 'ng-lightning/ng-lightning';

import { MdButtonModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { Ng2DynamicDialogModule }  from 'ng2-dynamic-dialog';
import { AppComponent } from './app.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import { AlertService } from './alert.service';
import { SearchMovieDetailComponent } from './search-movie-detail/search-movie-detail.component';
import {Notification} from 'angular2-notifications';
@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent,
    SearchMovieDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
   
  ],
  entryComponents: [
    MyDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
