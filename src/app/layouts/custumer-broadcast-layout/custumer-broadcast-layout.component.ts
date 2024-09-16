import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  UserNavbarComponent,
} from '../../components/user-navbar/user-navbar.component';

@Component({
  selector: 'app-custumer-broadcast-layout',
  standalone: true,
  imports: [UserNavbarComponent, RouterModule],
  templateUrl: './custumer-broadcast-layout.component.html',
  styleUrl: './custumer-broadcast-layout.component.css'
})
export class CustumerBroadcastLayoutComponent {

}
