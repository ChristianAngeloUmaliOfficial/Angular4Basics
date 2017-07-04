import { Component } from '@angular/core'
import { CollegeService } from './colleges.service'


@Component({
    selector: 'colleges',
    template:
    `

    <div class="container-fluid">
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>
     <button type="button" class="btn btn-success" id="testButton" onClick="alert('test')">Test Button</button>

        <h2>Colleges</h2>
        {{title}}

       

        <ul>
            <li *ngFor="let myColleges of colleges">
            {{myColleges}}
            </li>
        </ul>
    </div>


    `, providers: [CollegeService]
})

export class CollegeComponent {
    title = "UBELT Colleges";
    colleges;

    constructor(collegeService: CollegeService) {
        this.colleges = collegeService.getColleges();
    }
}

