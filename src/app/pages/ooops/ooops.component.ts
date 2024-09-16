import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ooops',
  standalone: true,
  imports: [],
  templateUrl: './ooops.component.html',
  styleUrl: './ooops.component.css'
})
export class OoopsComponent {
    constructor(
        private _location: Location
    ){

    }


    back(){
        this._location.back();
    }
}
