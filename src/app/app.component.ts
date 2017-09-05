import { Component,OnInit,ViewChild } from '@angular/core';

import {Message} from 'primeng/primeng';
import { dialogBoxService} from './dialogBox';
@Component({
   moduleId: module.id,
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

 private title : string = 'dialogBox';
  private displayDialog: boolean;
  private header : string;
  private messagebody : string;
  
  msgs: Message[] = [];
    constructor(private dialogBoxservice : dialogBoxService) {
            this.header = "Header Content from Component"
            this.messagebody = "Message body from App Component"
    }

    
  private showDialog() : void {  
    this.dialogBoxservice.showDialog(this.header ,this.messagebody);
  }
   
  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }
}
