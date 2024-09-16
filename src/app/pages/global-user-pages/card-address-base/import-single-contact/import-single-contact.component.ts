import { Location } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

import {
  FileUploadModule,
  FileUploadValidators,
} from '@iplab/ngx-file-upload';

import { MaterialModule } from '../../../../material-module';

@Component({
  selector: 'app-import-single-contact',
  standalone: true,
  imports: [FileUploadModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './import-single-contact.component.html',
  styleUrl: './import-single-contact.component.css'
})
export class ImportSingleContactComponent {

    public animation: boolean = false;
    public multiple: boolean = false;
    public is_old_upload: boolean = false;
    public file!: File | any;
    private filesControl = new FormControl<File>(this.file, FileUploadValidators.filesLimit(2));


    public demoForm = new FormGroup({
        files: this.filesControl
    });

    constructor(private _location: Location) {
        setTimeout(() => {
            let b_one: any = document.querySelector('.upload-text');
            // let b_second = document.querySelector('');
            b_one.innerHTML = `<b>Charger ou glisser</b> <br/> <span class="ms-2">le document ici</span>`;
        }, 3000);
    }

    public toggleStatus(): void {
        this.filesControl.disabled ? this.filesControl.enable() : this.filesControl.disable();
    }

    public toggleMultiple() {
        this.multiple = !this.multiple;
    }

    public clear(): void {
        this.filesControl.setValue(this.file);
    }

    uploadFile(e: any){
        if(e){
            this.is_old_upload = true;
            this.file = this.demoForm.value.files;
        }
    }

    storeFileUpload(){
        const formData = new FormData();
        formData.append('file', this.file);
    }

    back(){
        this._location.back();
    }
}
