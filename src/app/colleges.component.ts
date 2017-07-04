import { Component } from '@angular/core'
import { CollegeService } from './colleges.service'

@Component({
    selector: 'colleges',
    template:
    `
    <h2>Colleges</h2>
    {{title}}

    <ul>
        <li *ngFor="let myColleges of colleges">
        {{myColleges}}
        </li>


    </ul>

    `, providers: [CollegeService]
})

export class CollegeComponent {
    title = "UBELT Colleges";
    colleges;

    constructor(collegeService: CollegeService) {
        this.colleges = collegeService.getColleges();
    }
}

