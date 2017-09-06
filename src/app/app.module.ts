import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { MdButtonModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';
import { AppComponent } from './app.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { MyDialogComponent } from './my-dialog/my-dialog.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {GrowlModule} from 'primeng/primeng';
import { InputTextModule, ButtonModule, DataTableModule, DialogModule}  from 'primeng/primeng';
// import { dialogBoxService,dialogComponent} from './dialogBox';
import {ConfirmDialogModule} from 'primeng/components/confirmdialog/confirmdialog';
import {ConfirmationService} from 'primeng/components/common/api';


@NgModule({
  declarations: [
    AppComponent,
    DialogDemoComponent,
    MyDialogComponent,

  
  
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
    ConfirmDialogModule
   

   
  ],
  entryComponents: [
    MyDialogComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
