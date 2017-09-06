import { Component,OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Message} from 'primeng/primeng';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import {ConfirmationService} from "primeng/components/common/api";
@Component({
   moduleId: module.id,
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

   name: string;
    userResponse: Message[]=[];
    theUserSaid: string;
    
  msgs: Message[] = [];
    constructor(private confirmationService: ConfirmationService) {
        
    }
showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
    }

greetMe(){

        this.confirmationService.confirm({
            message: ` Hey ${this.name}, do you like PrimeNG?`,
            header: 'Greeting',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.userResponse = [];
                this.userResponse.push({severity:'info', summary:'Confirmed', detail:'I like PrimeNG'});
                this.theUserSaid = this.name + " responded " + this.userResponse[0].detail;
            },
            reject: () => {
                this.userResponse = [];
                this.userResponse.push({severity:'info', summary:'Rejected', detail:'I don\'t really like PrimeNG'});
                this.theUserSaid = this.name + " responded " + this.userResponse[0].detail;
            }
        });
    }
}
