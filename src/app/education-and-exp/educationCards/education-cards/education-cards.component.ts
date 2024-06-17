import { Component, Input } from '@angular/core';
import { EducationAndExpModal } from '../../../shared/modals/educationAndExp.modal';

@Component({
  selector: 'app-education-cards',
  templateUrl: './education-cards.component.html',
  styleUrl: './education-cards.component.css'
})
export class EducationCardsComponent {
  @Input()
  education!: EducationAndExpModal;
}
