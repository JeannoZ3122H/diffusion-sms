import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  Router,
  RouterModule,
} from '@angular/router';

import { Subscription } from 'rxjs';

import {
  DeletedEventsComponent,
} from '../../../../components/action-events/deleted-events/deleted-events.component';
import {
  AddOEditRoleComponent,
} from '../../../../components/admin-components/add-o-edit-role/add-o-edit-role.component';
import { MaterialModule } from '../../../../material-module';

@Component({
  selector: 'app-list-role',
  standalone: true,
  imports: [MaterialModule, RouterModule],
  templateUrl: './list-role.component.html',
  styleUrl: './list-role.component.css'
})
export class ListRoleComponent implements OnInit, OnDestroy{
    private unscribe = new Subscription();

    displayedColumns: string[] = ['position', 'name', 'symbol'];
    dataSource = [
        {
            id: 1,
            role: 'Admin',
            slug: '1'
        }
    ];

    constructor(
        private _router: Router,
        private _dialog: MatDialog
    ){}

    ngOnInit () {

    }

    addNew(){
        this._dialog.open(AddOEditRoleComponent, {
            width: 'auto'
        })
    }

    updateItem(data: any){
        this._dialog.open(AddOEditRoleComponent, {
            width: 'auto',
            data
        })
    }
    delete(slug: string){
        const eDialog = this._dialog.open(DeletedEventsComponent, {
            width: 'auto',
        })
        this.unscribe.add(eDialog.afterClosed().subscribe(
                (val: any)=>{
                    if(val == 'confirm'){
                        this.ascyncDeleted(slug);
                    }
                }
            )
        );
    }
    
    ascyncDeleted(slug: any){
        // this.unscribe.add(
        // );
    }

    ngOnDestroy () {
        this.unscribe.unsubscribe();
    }
}
