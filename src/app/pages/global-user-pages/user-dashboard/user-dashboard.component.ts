import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../../../material-module';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [MaterialModule, RouterModule, FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {
    public toDay: any = new Date();
}
