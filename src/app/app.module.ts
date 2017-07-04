import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CourseComponent } from './courses.component'
import { GamesComponent } from './games.component'
import { CollegeComponent } from './colleges.component'

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    GamesComponent,
    CollegeComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
