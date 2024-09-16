import {
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

import { MaterialModule } from '../../../material-module';

@Component({
  selector: 'app-show-group-card-address-content',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './show-group-card-address-content.component.html',
  styleUrl: './show-group-card-address-content.component.css'
})
export class ShowGroupCardAddressContentComponent implements OnInit{

    public list_single_contactin_group: any = [
        {
            id: 1,
            phone: '+225 01-01-01-10-11'
        },
        {
            id: 2,
            phone: '+225 02-02-02-10-11'
        },
        {
            id: 3,
            phone: '+225 03-03-03-10-11'
        },
        {
            id: 4,
            phone: '+225 04-04-04-10-11'
        },
    ];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<ShowGroupCardAddressContentComponent>
    ){}

    ngOnInit() {
        if(this.data != null){
            // this.list_single_contactin_group = this.data;
        }
    }
}
