import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewApointmentComponent } from './new-apointment.component';

describe('NewApointmentComponent', () => {
  let component: NewApointmentComponent;
  let fixture: ComponentFixture<NewApointmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewApointmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewApointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
