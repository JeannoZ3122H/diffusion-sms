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
  selector: 'app-single-broadcast-sms-send-preview',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './single-broadcast-sms-send-preview.component.html',
  styleUrl: './single-broadcast-sms-send-preview.component.css'
})
export class SingleBroadcastSmsSendPreviewComponent implements OnInit{

    displayedColumns: string[] = ['date', 'desp', 'type', 'status'];
    dataSource = [
        {
            id: 1,
            name: 'test',
            weight: '13'
        }
    ];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        public dialogRef: MatDialogRef<SingleBroadcastSmsSendPreviewComponent>
    ){}

    ngOnInit() {

    }
}
