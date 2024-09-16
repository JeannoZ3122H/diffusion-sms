import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { MaterialModule } from '../../../material-module';

@Component({
  selector: 'app-add-o-edit-role',
  standalone: true,
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  templateUrl: './add-o-edit-role.component.html',
  styleUrl: './add-o-edit-role.component.css'
})
export class AddOEditRoleComponent implements OnInit, OnDestroy{
    public is_update_item: boolean = false;
    public my_role: string = '';
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<AddOEditRoleComponent>
    ){}

    ngOnInit() {
        if(this.data){
            this.is_update_item = true;
        }
    }

    ngOnDestroy() {

    }
}
