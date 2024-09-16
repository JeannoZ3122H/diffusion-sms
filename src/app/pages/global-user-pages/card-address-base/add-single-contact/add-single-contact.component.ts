import {
  AsyncPipe,
  Location,
} from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  map,
  Observable,
  startWith,
} from 'rxjs';

import { FileUploadModule } from '@iplab/ngx-file-upload';

import { MaterialModule } from '../../../../material-module';

@Component({
    selector: 'app-add-single-contact',
    standalone: true,
    imports: [FileUploadModule, ReactiveFormsModule, MaterialModule, AsyncPipe],
    templateUrl: './add-single-contact.component.html',
    styleUrl: './add-single-contact.component.css'
})
export class AddSingleContactComponent {
    stateCtrl = new FormControl('');
    public state: any = '';
    filteredStates: Observable<any[]>;

    control = new FormControl<any>('', Validators.required);
    public demoForm = new FormGroup(
        {
            lname: this.control,
            fname: this.control,
            email: this.control,
            phone: this.control,

        }
    );

    states: any[] = [
      {
        name: 'Arkansas',
        population: '2.978M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
      },
      {
        name: 'California',
        population: '39.14M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
      },
      {
        name: 'Florida',
        population: '20.27M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
      },
      {
        name: 'Texas',
        population: '27.47M',
        // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
        flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
      },
    ];

    constructor(private _location: Location) {
        this.filteredStates = this.stateCtrl.valueChanges.pipe(
          startWith(''),
          map(state => (state ? this._filterStates(state) : this.states.slice())),
        );
    }

    private _filterStates(value: string): any[] {
        const filterValue = value.toLowerCase();

        return this.states.filter(state => state.name.toLowerCase().includes(filterValue));
    }

    getState(e: any){
        if(e){
            this.state = e;
        }
    }

    storeForms(){
        console.log(this.demoForm.value.email);
    }

    back(){
        this._location.back();
    }
}
