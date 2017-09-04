import { Component,OnInit,ViewChild } from '@angular/core';
import { AlertService, AlertMessage } from './alert.service';
import { Ng2DynamicDialogComponent } from 'ng2-dynamic-dialog';
@Component({
   moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(Ng2DynamicDialogComponent)
    private modalDialog: Ng2DynamicDialogComponent;
  title = 'app';
   objAlert: AlertMessage;

    constructor(
        private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.alertStatus.subscribe((val: AlertMessage) => {
            this.objAlert = { show: val.show, message: val.message };
        });
    }

    onCloseAlert(reason: string) {
        let objCloseAlert: AlertMessage = { show: false, message: '' };
        this.alertService.showAlert(false, null);
    }
}
