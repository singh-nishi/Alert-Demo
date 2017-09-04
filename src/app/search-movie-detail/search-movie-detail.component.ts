import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
@Component({
  selector: 'app-search-movie-detail',
  templateUrl: './search-movie-detail.component.html',
  styleUrls: ['./search-movie-detail.component.css']
})
export class SearchMovieDetailComponent implements OnInit {
movieDetailModel:any;
  constructor(
        private alertService: AlertService) {        
    }

    ngOnInit() {
         this.alertService.showAlert(true, "Details of " + this.movieDetailModel.title + " has been laoded.");
    }

}
