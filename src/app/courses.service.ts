import {Injectable} from '@angular/core';


@Injectable()
export class CourseService {
    getCourses() {
          var x = ["Information Technology", "Computer Science", "Information System", "Computer Engineering"];

          return x;
    }
}