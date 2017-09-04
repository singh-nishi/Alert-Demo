import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieDetailComponent } from './search-movie-detail.component';

describe('SearchMovieDetailComponent', () => {
  let component: SearchMovieDetailComponent;
  let fixture: ComponentFixture<SearchMovieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchMovieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
