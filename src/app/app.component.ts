import { Component, DoCheck, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, DoCheck {
  title = 'myPort';
  curColor = '';
  curRoute: string = '';

  constructor(private router: Router){

  }
  ngOnInit(): void {
    
  }
  ngDoCheck(): void {
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationStart){
        this.curRoute = event.url;
        console.log(event.url);
        
      }
     }
    );
    console.log(this.curRoute);
    
    if(this.curRoute == '/aboutMe'){
      this.curColor = 'black'
    }
    if(this.curRoute == '/educationExp'){
      this.curColor = '#78d4f7'
    }
    console.log(this.curColor);
  }

}
