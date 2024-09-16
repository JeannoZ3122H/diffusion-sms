import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from '../../components/navbar/navbar.component';
import {
  DashboardComponent,
} from '../../pages/global-admin-pages/dashboard/dashboard.component';

@Component({
    selector: 'app-admin-layout',
    standalone: true,
    imports: [
        DashboardComponent,
        NavbarComponent,
        RouterModule,
    ],
    templateUrl: './admin-layout.component.html',
    styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent {

}
