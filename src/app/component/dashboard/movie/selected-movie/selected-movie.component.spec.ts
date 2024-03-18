import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedMovieComponent } from './selected-movie.component';

describe('SelectedMovieComponent', () => {
  let component: SelectedMovieComponent;
  let fixture: ComponentFixture<SelectedMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedMovieComponent]
    });
    fixture = TestBed.createComponent(SelectedMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
