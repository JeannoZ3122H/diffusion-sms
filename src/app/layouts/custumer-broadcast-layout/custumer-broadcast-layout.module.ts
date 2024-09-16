import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

import {
  CustumerBroadcastLayoutRoutingModule,
} from './custumer-broadcast-layout-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustumerBroadcastLayoutRoutingModule,
    RouterModule,
    NgxMatTimepickerModule.setLocale('fr-FR'),
  ]
})
export class CustumerBroadcastLayoutModule { }
