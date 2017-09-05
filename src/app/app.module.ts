import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { NglModule } from 'ng-lightning/ng-lightning';

import { MdButtonModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GrowlModule} from 'primeng/primeng';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule }  from 'primeng/primeng';
import { dialogBoxService,dialogComponent} from './dialogBox';
@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent,
  
    dialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdDialogModule,
    FormsModule,
    HttpModule,
    GrowlModule,
    DataTableModule,
    InputTextModule, 
    DialogModule,
    ButtonModule,
   
  ],
  entryComponents: [
    MyDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [dialogBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
