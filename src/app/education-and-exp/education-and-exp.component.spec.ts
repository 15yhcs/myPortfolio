import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndExpComponent } from './education-and-exp.component';

describe('EducationAndExpComponent', () => {
  let component: EducationAndExpComponent;
  let fixture: ComponentFixture<EducationAndExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationAndExpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationAndExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
