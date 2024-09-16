import {
  AsyncPipe,
  Location,
} from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../../../../material-module';

@Component({
    selector: 'app-add-group-contact',
    standalone: true,
    imports: [ReactiveFormsModule, MaterialModule, AsyncPipe],
    templateUrl: './add-group-contact.component.html',
    styleUrl: './add-group-contact.component.css'
})
export class AddGroupContactComponent {


    constructor(private _location: Location) {

    }

    getState(e: any){
        if(e){
            // this.state = e;
        }
    }

    storeForms(){

    }

    back(){
        this._location.back();
    }
}
