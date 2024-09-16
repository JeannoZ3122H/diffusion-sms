import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  Router,
  RouterModule,
} from '@angular/router';

import {
  SingleBroadcastSmsSendPreviewComponent,
} from '../../../../components/custumer-broadcast-components/single-broadcast-sms-send-preview/single-broadcast-sms-send-preview.component';
import { MaterialModule } from '../../../../material-module';

@Component({
    selector: 'app-user-broadcast-sms',
    standalone: true,
    imports: [MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, DatePipe],
    templateUrl: './user-broadcast-sms.component.html',
    styleUrl: './user-broadcast-sms.component.css'
})
export class UserBroadcastSmsComponent {
    expandedElement: any | null;
    public isGroupContact: boolean = false;
    public isSingleContact: boolean = true;

    public displayedColumns = ['exp', 'name', 'type', 'status', 'date', 'symbol'];

    public dataSource = [
        {
            id: 1,
            exp: 'AI',
            name: 'John Doe',
            type: 'Direct',
            status: 'Terminé',
            date: new Date(),
            slug: 's'
        },
        {
            id: 2,
            exp: 'AI 2',
            name: 'John Doe 2',
            type: 'Direct',
            status: 'Terminé',
            date: new Date(),
            slug: 'g'
        }
    ];

    constructor(private _router: Router, private _dialog: MatDialog) { }

    ngOnInit() {

    }

    // 😇😇 ************************************************ //
    // ****************** START FUNCTION EVENTS ****************** //
    // ************************************************ 😇😇😇😇 //
    // 😇😇 **** EVENTS MATERIAL
    // show content by group contact
    showElementContent(data: any) {
        this._dialog.open(SingleBroadcastSmsSendPreviewComponent, {
            width: 'auto',
            data
        })
    }

    // 😇😇 **** EVENTS NATIVE
    // show content table by type
    showContentByType() {
        this.isGroupContact = false;
        this.isSingleContact = true;
    }
    // add contact by type
    addNewBroadcast() {
        this._router.navigateByUrl('/web.sms.custumer-broadcast.broadcast-sms-send-to');
    }
    // 😇😇 ************************************************ //
    // ****************** END FUNCTION EVENTS ****************** //
    // ************************************************ 😇😇😇😇 //

}
