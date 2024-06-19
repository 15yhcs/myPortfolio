import { Component } from '@angular/core';
import { EducationAndExpModal } from '../shared/modals/educationAndExp.modal';
@Component({
  selector: 'app-education-and-exp',
  templateUrl: './education-and-exp.component.html',
  styleUrl: './education-and-exp.component.css'
})
export class EducationAndExpComponent {
  educationAndExp: EducationAndExpModal[] = [
    new EducationAndExpModal('IBM','2022 May - 2024 May','/assets/img/ibm.png','Software Development Engineer Co-op'),
    new EducationAndExpModal("Queen's University Health and Science Department",'2020 Sep - 2021 May','/assets/img/queens.png','Full Stack Developer / Team Lead'),
    new EducationAndExpModal('Casa Dolce Cafe','2020 May - 2019 May - 2019 Sep','/assets/img/casadolce.png', 'Coffee Maker'),
    new EducationAndExpModal('Chem China','2017 May - 2017 Sep','/assets/img/chemChina.png', 'Coffee Maker'),
  ]
}
