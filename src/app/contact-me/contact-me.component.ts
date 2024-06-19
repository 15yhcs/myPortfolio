
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css'
})
export class ContactMeComponent {
  genders = ['male', 'female'];
  signupForm!: FormGroup;
  forbiddenUserNames = ['Chris', 'Anna'];
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'userGroup': new FormGroup({
        'username': new FormControl(null, [Validators.required]), // "this" object in the forbiddenNames function refers to some object from FormControl
        'email': new FormControl(null, [Validators.required, Validators.email]),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
  }
  onSubmit(){
    console.log(this.signupForm);
    
  }
}
