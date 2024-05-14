import { Component, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'myPort';
  url = '/assets/fonts/Poetsen_One/bgPort.jpg'
}
