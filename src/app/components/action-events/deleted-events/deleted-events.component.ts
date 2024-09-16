import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { MaterialModule } from '../../../material-module';

@Component({
  selector: 'app-deleted-events',
  standalone: true,
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './deleted-events.component.html',
  styleUrl: './deleted-events.component.css'
})
export class DeletedEventsComponent {

    constructor(
        public dialogRef: MatDialogRef<DeletedEventsComponent>
    ){}

    close(type: string){
        this.dialogRef.close(type)
    }
}
