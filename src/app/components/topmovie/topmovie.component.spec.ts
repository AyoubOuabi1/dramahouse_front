import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopmovieComponent } from './topmovie.component';

describe('TopmovieComponent', () => {
  let component: TopmovieComponent;
  let fixture: ComponentFixture<TopmovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TopmovieComponent]
    });
    fixture = TestBed.createComponent(TopmovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
