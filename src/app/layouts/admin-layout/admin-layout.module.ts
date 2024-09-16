import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AdminLayoutRoutingModule } from './admin-layout-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AdminLayoutRoutingModule,
        RouterModule
    ],
    exports: [
        RouterModule
    ]
})
export class AdminLayoutModule { }
