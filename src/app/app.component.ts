import { Component,OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Message} from 'primeng/primeng';
// import { dialogBoxService} from './dialogBox';
import {ConfirmationService} from "primeng/components/common/api";
@Component({
   moduleId: module.id,
  selector: 'app-root',
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

//  private title : string = 'dialogBox';
//   private displayDialog: boolean;
//   private header : string;
//   private messagebody : string;
   name: string;
    userResponse: Message[]=[];
    theUserSaid: string;
    // dirty: boolean;
    // username: string;
  msgs: Message[] = [];
    constructor(private confirmationService: ConfirmationService) {
            // this.header = "Header Content from Component";
            // this.messagebody = "Message body from App Component";
    }

    
//   private showDialog() : void {  
//     this.dialogBoxservice.showDialog(this.header ,this.messagebody);
//   }
   
  showInfo() {
    this.msgs = [];
    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});
  }
//   onSubmit(f: FormGroup) {
//         this.dirty = f.dirty;
//         this.router.navigate(['/second-view']);
//     }
//  onChangeEvent({target}){
//         this.name = target.value;
//         console.log(this.name);
//     }

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
