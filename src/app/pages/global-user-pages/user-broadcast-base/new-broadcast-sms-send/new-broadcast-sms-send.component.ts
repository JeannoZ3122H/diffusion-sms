import {
  AsyncPipe,
  Location,
} from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import {
  map,
  Observable,
  startWith,
} from 'rxjs';

import {
  FileUploadModule,
  FileUploadValidators,
} from '@iplab/ngx-file-upload';

import { MaterialModule } from '../../../../material-module';

@Component({
    selector: 'app-new-broadcast-sms-send',
    standalone: true,
    imports: [ReactiveFormsModule, FileUploadModule, MaterialModule, AsyncPipe, FormsModule, NgxMatTimepickerModule],
    templateUrl: './new-broadcast-sms-send.component.html',
    styleUrl: './new-broadcast-sms-send.component.css'
})
export class NewBroadcastSmsSendComponent {
    public animation: boolean = false;
    public multiple: boolean = false;
    public rest_caracters: number = 160;
    
    stateCtrl = new FormControl('');
    public state: any = '';
    filteredStates: Observable<any[]>;

    public is_mode_recipient: string = '';
    public selectedMode: any;

    public is_type_send_sms: string = '';
    public selectedTimes: any;

    public name: string = '';
    public sender: string = '';
    public recipient: string = '';
    public message_content: string = '';
    public file_for_recipient!: File | any;
    private filesControl = new FormControl<File>(this.file_for_recipient, FileUploadValidators.filesLimit(2));
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

    public demoForm = new FormGroup({
        files: this.filesControl
    });

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

// ****** mode recipient
    // selected mode
    radioChangeModeRecipeint(e: any){
        this.is_mode_recipient = e.value;

        if(e.value == 'upload_recipient'){
            setTimeout(() => {
                let b_one: any = document.querySelector('.upload-text');
                // let b_second = document.querySelector('');
                b_one.innerHTML = `<b>Charger ou glisser</b> <br/> <span class="ms-2">le document ici</span>`;
            }, 1000);
        }
    }
    // upload file by mode
    uploadFile(e: any){
        this.file_for_recipient = this.demoForm.value.files;
    }

// ****** sender message forms event
    // get selected sender
    selectSender(e: any) {
        this.sender = e;
    }

// ****** program send message forms event
    // program send message
    radioChange(e: any){
        this.is_type_send_sms = e.value;
    }
    // remove btn closed
    removeBtnClosed(){
        document.querySelector('.mat-datepicker-close-button')?.remove();
    }
    // get time
    onTimeSet(e: any){
        console.log('time', e)
    }

    storeForms() {

    }

    back() {
        this._location.back();
    }
}
