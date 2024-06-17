import { Component, Input, OnInit } from '@angular/core';
import { myCard } from '../../shared/modals/contactCard.modal';

@Component({
  selector: 'app-contact-cards',
  templateUrl: './contact-cards.component.html',
  styleUrl: './contact-cards.component.css'
})
export class ContactCardsComponent implements OnInit{
  @Input()
  userCard: myCard[] = [];
  
  ngOnInit(): void {
    console.log(this.userCard);
    
  }
  
}
