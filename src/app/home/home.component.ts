import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { myCard } from '../shared/modals/contactCard.modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private route: Router){

  }
  usercard = [new myCard('Email', '', 'yewinshu@gmail.com'), new myCard('Phone Number','','(+1)343-989-1698')]

  onClick(){
    this.route.navigate(['aboutMe'])
  }
}
