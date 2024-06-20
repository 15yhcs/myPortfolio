import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDialogModalComponent } from './education-dialog-modal.component';

describe('EducationDialogModalComponent', () => {
  let component: EducationDialogModalComponent;
  let fixture: ComponentFixture<EducationDialogModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationDialogModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EducationDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
