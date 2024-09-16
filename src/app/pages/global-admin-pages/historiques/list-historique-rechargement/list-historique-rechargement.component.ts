import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

import { Subscription } from 'rxjs';

import {
  DeletedEventsComponent,
} from '../../../../components/action-events/deleted-events/deleted-events.component';
import {
  SingleBroadcastSmsSendPreviewComponent,
} from '../../../../components/custumer-broadcast-components/single-broadcast-sms-send-preview/single-broadcast-sms-send-preview.component';
import { MaterialModule } from '../../../../material-module';

@Component({
    selector: 'app-list-historique-rechargement',
    standalone: true,
    imports: [MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, DatePipe],
    templateUrl: './list-historique-rechargement.component.html',
    styleUrl: './list-historique-rechargement.component.css'
})
export class ListHistoriqueRechargementComponent {
    private unscribe = new Subscription();
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

    constructor(private _dialog: MatDialog) { }

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
    // 😇😇 ************************************************ //
    // ****************** END FUNCTION EVENTS ****************** //
    // ************************************************ 😇😇😇😇 //

    delete(slug: string) {
        const eDialog = this._dialog.open(DeletedEventsComponent, {
            width: 'auto',
        })
        this.unscribe.add(eDialog.afterClosed().subscribe(
            (val: any) => {
                if (val == 'confirm') {
                    this.ascyncDeleted(slug);
                }
            }
        )
        );
    }
    ascyncDeleted(slug: any) {
        // this.unscribe.add(
        // );
    }

    ngOnDestroy() {
        this.unscribe.unsubscribe();
    }
}
