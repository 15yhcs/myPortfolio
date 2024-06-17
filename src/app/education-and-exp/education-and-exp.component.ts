import { Component } from '@angular/core';
import { EducationAndExpModal } from '../shared/modals/educationAndExp.modal';
@Component({
  selector: 'app-education-and-exp',
  templateUrl: './education-and-exp.component.html',
  styleUrl: './education-and-exp.component.css'
})
export class EducationAndExpComponent {
  educationAndExp: EducationAndExpModal[] = [
    new EducationAndExpModal('IBM','2022 May - 2024 May','','Software Development Engineer Co-op'),
    new EducationAndExpModal("Queen's University Health and Science Department",'2020 Sep - 2021 May','','Full Stack Developer / Team Lead'),
    new EducationAndExpModal('Casa Dolce Cafe','2020 May - 2021 Sep','', 'Coffee Maker'),
  ]
}
