import { Component } from '@angular/core';
import { CourseComponent } from './courses.component'
import { GamesComponent } from './games.component'
import { CollegeComponent } from './colleges.component'

@Component({
  selector: 'app-root',
  template: '<courses></courses> <games></games>  <colleges></colleges>',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

}
