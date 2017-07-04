import { Injectable } from '@angular/core'

@Injectable()
export class CollegeService {
    getColleges() {
        var x = ["Centro Escolar University", "San Beda College", "FEU", "UST"];
        return x;
    }
}