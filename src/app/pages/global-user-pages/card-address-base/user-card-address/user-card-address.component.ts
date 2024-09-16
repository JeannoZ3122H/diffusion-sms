import { DatePipe } from '@angular/common';
import {
  Component,
  OnInit,
} from '@angular/core';
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
  ShowGroupCardAddressContentComponent,
} from '../../../../components/custumer-broadcast-components/show-group-card-address-content/show-group-card-address-content.component';
import { MaterialModule } from '../../../../material-module';

@Component({
    selector: 'app-user-card-address',
    standalone: true,
    imports: [MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, DatePipe],
    templateUrl: './user-card-address.component.html',
    styleUrl: './user-card-address.component.css'
})

export class UserCardAddressComponent implements OnInit {
    expandedElement: any | null;
    public isGroupContact: boolean = false;
    public isSingleContact: boolean = true;

    public displayedColumns = ['position', 'phone', 'symbol'];

    public dataSource = [
        {
            id: 1,
            phone: '+225 07-02-02-02-02',
            group_name: 'Followed',
            slug: 's'
        },
        {
            id: 2,
            phone: '+225 07-01-01-01-01',
            group_name: 'Followed 2',
            slug: 'g'
        }
    ];

    constructor(public _dialog: MatDialog, private _router: Router) { }

    ngOnInit(){

    }

// 😇😇 ************************************************ //
// ****************** START FUNCTION EVENTS ****************** //
    // ************************************************ 😇😇😇😇 //
// 😇😇 **** EVENTS MATERIAL
    // show content by group contact
    showElementContent(data: any) {
        this._dialog.open(ShowGroupCardAddressContentComponent ,{
            width: 'auto',
            data,
            enterAnimationDuration: '300ms',
            exitAnimationDuration: '100ms',
        });
    }

// 😇😇 **** EVENTS NATIVE
    // show content table by type
    showContentByType(type: string) {
        if (type == 'group') {
            // setTimeout(()=>{
            this.isGroupContact = true;
            this.isSingleContact = false;
            // }, 400);
        }

        if (type == 'single') {
            // setTimeout(()=>{
            this.isGroupContact = false;
            this.isSingleContact = true;
            // }, 400);
        }
    }
    // add contact by type
    addContact() {
        if (this.isGroupContact == true) {
            this._router.navigateByUrl('/web.sms.custumer-broadcast.add-group-contact-in-card-address');
        }

        if (this.isSingleContact == true) {
            this._router.navigateByUrl('/web.sms.custumer-broadcast.add-single-contact-in-card-address');
        }
    }
    // import contact by type
    importContact() {
        if (this.isSingleContact == true) {
            this._router.navigateByUrl('/web.sms.custumer-broadcast.import-contact-in-card-address');
        }
    }
    // 😇😇 ************************************************ //
// ****************** END FUNCTION EVENTS ****************** //
// ************************************************ 😇😇😇😇 //

}

